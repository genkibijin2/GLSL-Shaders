//KENDALL PRICE 2026
#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359

//==UNIFORMS==//
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_tex0;

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
    vec2 texuv = gl_FragCoord.xy/u_resolution.xy;
    if (mod(gl_FragCoord.y, 2.) < 1.) {
        texuv += .4 + sin(u_time * .5 + texuv.y * 15.) * 0.1;
    } else {
        texuv -= .4 + cos(u_time * .5 + texuv.y * 15. + .5) * 0.1;
    }
    uv.x = uv.x + sin(u_time*0.2);
    vec4 euroColour = texture2D(u_tex0, texuv);

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
    float weirdCol = float(cos(u_time*uv.y) - (0.3*u_time));
    float greenWorld = float(u_time*0.01 + (uv.x*u_time*0.002));
    greenWorld = sin(greenWorld-uv.y);
    weirdCol = mix(uv.x, sin(weirdCol), sin(u_time));
    float blueWorld = float(mix(uv.y, sin(u_time), sin(uv.x)));
    blueWorld =  blueWorld + howFarFromMiddle;
    weirdCol = weirdCol - sin(weirdCol);
    float coolNum = length(abs(uv)-0.3);
    blueWorld = blueWorld - coolNum;
        //blueWorld = sin(blueWorld*100.0);
        //weirdCol = sin(weirdCol*100.00);
        //greenWorld = sin(greenWorld*100.00);
        //blueWorld = mix(uv.x, sin(uv.y*u_time), blueWorld);
        //weirdCol = mix(weirdCol, weirdCol*u_time, sin(weirdCol-10.00/u_time));
        weirdCol = clamp(weirdCol, 0.0, 0.5);
         vec2 mouseUV = (gl_FragCoord.xy/u_mouse);
    vec3 finalColour = vec3(weirdCol-howFarFromMiddle,greenWorld*coolNum/howFarFromMiddle,(blueWorld));
    mouseUV.x = clamp(mouseUV.x, 0.0, 0.0);
    mouseUV.y = clamp(mouseUV.y, 0.0, 0.0);
    finalColour = vec3(finalColour.r-mouseUV.x, finalColour.g-mouseUV.y, finalColour.b-mouseUV.x);
   
    vec3 beautySunset = vec3(uv.x, uv.y, uv.x);
//==FINAL OUTPUT==//
finalColour = ceil(finalColour * 8.0) / 8.0;
vec4 finalColAlph = vec4(finalColour, 1.0);
finalColAlph += euroColour;
gl_FragColor = vec4(finalColAlph);

}
