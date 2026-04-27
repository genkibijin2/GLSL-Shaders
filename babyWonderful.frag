//KendallModified 2026
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
vec2 shift(vec2 p, vec2 d){
    return p - d;
}
float rectDrawerz(vec2 p, vec2 b){
    vec2 q = abs(p) - b;
    return length(max(q,0.0)) + min(max(q.x,q.y),0.0);
}
float waveDist(vec2 p, float d, float f, float spd, float amp){
    float iTime = u_time*0.2;
    return d + sin(p.x*f + iTime*spd) * amp;
}
vec2 uvNorm(vec2 fc){
    vec2 iResolution = u_resolution.xy;
    return (2.0*fc - iResolution.xy) / iResolution.y;
}
void paint(inout vec3 base, vec3 ink, float d, float blur){
    float a = smoothstep(blur, blur, d);
    base = mix(ink, base, a);
}
void paintTheWave(vec2 uv, inout vec3 col, float h, float freq, float spd, vec3 tone){
    float base = rectDrawerz(shift(uv, vec2(0.0,-h)), vec2(4.0,0.6));
    float d = waveDist(uv, base, freq, -spd, 0.03 + h*0.015);
    paint(col, tone, d, 0.015);
}
void main(){
    vec2 fragCoord = vec2(gl_FragCoord);
    vec2 iResolution = vec2(u_resolution.xy);
    float iTime = u_time;
    vec2 uv = uvNorm(fragCoord);
    vec3 col = vec3(0.0);
    float g = smoothstep(-1.0, 1.0, uv.y);
    vec3 bottomBit = vec3(0.0588, 0.8941, 0.7961);
    vec3 topBit = vec3(0.7137, 0.9412, 0.9294);
    col = mix(topBit, bottomBit, g);
    vec2 whereTheSun = vec2(0.970,0.980);
    whereTheSun.y += sin(iTime * 0.0) * 0.015;
    vec2 p = uv - whereTheSun;
    float r = length(p);
    float anglez = atan(p.y, p.x);
    float blastFlash = sin(anglez * 14.568 + iTime * 1.2) * 0.02
                + sin(anglez * 7.0  - iTime * 0.7) * 0.01;
    float sunShape = r - (0.052 + blastFlash);
    float core = smoothstep(0.02, -0.02, sunShape);
    vec3 sunColor = vec3(1.000,0.950,0.981);
    float glow = pow(clamp(0.920 - r / 0.45, 0.0, 1.0), 2.668);
    paintTheWave(uv, col, 0.6, 5.5, 1.2, vec3(0.6157, 0.9333, 0.8392));
    paintTheWave(uv, col, 0.9, 3.8, 1.8, vec3(0.3922, 0.8863, 0.7608));
    paintTheWave(uv, col, 1.2, 2.4, 3.0, vec3(0.1529, 0.5725, 0.4824));
    gl_FragColor = vec4(col,1.0);
}
