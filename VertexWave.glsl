#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359

//==UNIFORMS==//
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec3 u_camera;
varying vec4 v_position;

//==FUNCTIONS==//
float plotALine(vec2 uv){
    float minimumWhip = float(sin(u_time+uv.y));
    return smoothstep(0.02, 0.01, abs(minimumWhip -uv.x));
}

//==MAIN LOOP==//
void main() {
    //ScreenSetup
    vec2 uv = (gl_FragCoord.xy/u_resolution.xy);
    float aspectRatio = u_resolution.x / u_resolution.y;
    uv.x *= aspectRatio;
    uv.x -= (aspectRatio - 1.) * .5;
    //float pixelz = 90.;
    //uv.x = floor(uv.x * pixelz) / pixelz;
    //uv.y = floor(uv.y * pixelz) / pixelz;
    //pixelz = 90.;
    //uv.x = floor(uv.x * pixelz) / pixelz;
    //uv.y = floor(uv.y * pixelz) / pixelz;
    if (mod(gl_FragCoord.y, 2.) < 1.) {
        uv += uv.y +.4 * sin(u_time) * 0.1;
        uv.y += uv.y +.3 *sin(u_time) * 0.1;
    } else {
        uv -= uv.x -.9 - cos(u_time) * 0.1;
        uv.x -= uv.x *2.0-1.0;
    }
    float howFarFromMiddle = distance(uv, vec2(0.5));
    howFarFromMiddle = sin(howFarFromMiddle*u_time);
    vec3 cameraPos = vec3(u_camera.x-uv.x*2.0, u_camera.y-uv.y*2.0, u_camera.z-uv.x*2.0);
    vec3 finalColour = vec3((v_position.r*uv.x)-cameraPos.x, (v_position.g*uv.y)+cameraPos.y, (v_position.b)-cameraPos.z);
    finalColour = vec3(finalColour.x-howFarFromMiddle, finalColour.y-howFarFromMiddle, finalColour.z-howFarFromMiddle);
    finalColour = vec3(sin(finalColour));
//==FINAL OUTPUT==//
finalColour = ceil(finalColour * 8.0) / 8.0;
gl_FragColor = vec4(finalColour, v_position.a);

}
