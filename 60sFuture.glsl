#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 uv = (gl_FragCoord.xy/u_resolution.xy);
    float aspectRatio = (u_resolution.x / u_resolution.y);
     
    uv.x *= aspectRatio;
    uv.x -= (aspectRatio - 1.) * .5;
    float pixelz = 900.;
    uv.x = floor(uv.x * pixelz) / pixelz;
    uv.y = floor(uv.y * pixelz) / pixelz;
    pixelz = 900.;
    uv.x = floor(uv.x * pixelz) / pixelz;
    uv.y = floor(uv.y * pixelz) / pixelz;
    uv.x *= aspectRatio;
    uv.x -= (aspectRatio - 1.0) * .5;
    vec3 PulsePloom = vec3(uv.x, uv.y, sin(u_time));
    if (mod(gl_FragCoord.y, 2.) < 1.) {
        PulsePloom = PulsePloom - vec3(100.0, 100.0, 100.0);
        uv += .4 + sin(u_time * .5 + uv.y * 15.) * 0.1;
    } else {
        uv -= .4 + cos(u_time * .5 + uv.y * 15. + .5) * 0.1;
    }
    if(mod(gl_FragCoord.y, 2.0) < 1.0){
       uv += .4 + sin(u_time * .5 + uv.y * 15.) * 0.1;
       uv.x += sin(u_time)*0.1;
       uv.x *= u_time;
    }
     else {
        uv -= .4 + cos(u_time * .5 + uv.y * 15. + .5) * 0.1;
        uv.x -= sin(u_time)*0.1;
    }
    
    vec3 mixMe = vec3(uv.x, uv.y, uv.x);
    if(uv.x < .07){
      PulsePloom = vec3(cos(u_time), 0.6, 0.5);
    }
    else{
    PulsePloom = mix(PulsePloom, mixMe, sin(u_time));
    PulsePloom = (sin(uv.xyx) * PulsePloom);
    }   
    float clampage = 8.0;
    PulsePloom = ceil(PulsePloom * clampage) / clampage;
    gl_FragColor = vec4(PulsePloom, 1.0);
    }
