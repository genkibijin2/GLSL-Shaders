#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359

//==UNIFORMS==//
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;



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
    float pixelz = 90.;
    uv.x = floor(uv.x * pixelz) / pixelz;
    uv.y = floor(uv.y * pixelz) / pixelz;
    pixelz = 90.;
    uv.x = floor(uv.x * pixelz) / pixelz;
    uv.y = floor(uv.y * pixelz) / pixelz;
    if (mod(gl_FragCoord.y, 2.) < 1.) {
        uv += uv.y +.4 + sin(u_time * .5 + uv.y * 15.) * 0.1;
    } else {
        uv -= uv.x -.4 + cos(u_time * .5 + uv.y * 15. + .5) * 0.1;
    }

    float y = uv.x;
    vec3 finalColour = vec3(sin(uv.x+u_time), sin(uv.y), uv.x);

    float lineDrawing = plotALine(uv);
    float redValue = float(sin(u_time*5.0));
    float RedValueWithoutTooDark = clamp(redValue, 0.4, 1.0);
    finalColour = (1.0-lineDrawing)*finalColour+lineDrawing*vec3(uv.x, RedValueWithoutTooDark, uv.y);

//==FINAL OUTPUT==//
finalColour = ceil(finalColour * 8.0) / 8.0;
gl_FragColor = vec4(finalColour, 1.0);
}
