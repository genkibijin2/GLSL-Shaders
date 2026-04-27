# GLSL-Shaders
Collection of shaders made in GLSL/OpenGL
# What is GLSL?
GLSL is the OpenGL Shader Language. It's the subsection of OpenGL graphics rendering that works on shaders. These shaders use the extremely high individual thread count of the GPU to create images/graphics with maths in an extremely fast way. Each pixels colour is informed via maths functions on how it's going to appear, and none of the variables can rely on the data from another pixel. This means that all of the pixels of a canvas can be computed at the same time, using various values called "Uniforms" to inform the shader of things like resolution, mouse position, time before it computes the next frame. 
# How does this work?
GLSL uses the "Uniforms" from OpenGL, which are values that are not constant, but are applied equally to every pixel. Some of the most useful/common uniforms are as follows:<br/>
u_resolution - a 2 point vector (x and y) that represents the values for the horizontal and vertical screen size in pixels.<br/>
u_mouse - a 2 point vector (x and y) that represents the current position of the users mouse on the screen in pixels.<br/>
u_time - a floating point value that represents the number of seconds since the shader has began running<br/><br/>
Usually, the coordinates of the screen are normalised, and thus turned relative, but dividing the current coordinate of a pixel by the resolution. This is typically labelled as the variable "uv", which is a 2 point vector representing the screen between 0.0-0.0 to 1.0-1.0; 0.0 x and y values represents the bottom left corner of the screen, and 1.0 x and y values represent the top right.<br/>
As mentioned earlier, there are some built in values supplied by the OpenGL driver, such as the afformentioned pixel coordinate. Some of the most used values are as follows:<br/>
gl_FragCoord - a 2 point vector (x and y) representing the current position of a pixel on the screen.<br/>
gl_FragColor - a 4 point vector that outputs the final colour to the screen. The 4 floating points represent Red, Blue, Green and Alpha respectively. A gl_FragColor value of 1.0, 1.0, 1.0, 1.0 would display a completely white image.<br/>
# Shader Previews
<p align="center">
SunsetMagicPond.GLSL<br/>
<img width="400" height="276" alt="SunsetPond" src="https://github.com/user-attachments/assets/6c5fb7d6-d0f9-492b-8e56-8212c325c225" />
<br/><br/>
60sFuture.GLSL<br/>
<img width="400" height="315" alt="60sFuture" src="https://github.com/user-attachments/assets/9302204d-7400-434f-a990-e4692c773fa6" />
<br/><br/>
VertexWave.GLSL<br/>
<img width="289" height="272" alt="VertexWave" src="https://github.com/user-attachments/assets/c907879f-48b6-4e21-878f-364f1c49da59" />
<br/><br/>
BlueMoonCard.frag<br/>
(Note: Requires texture.png file found inside root folder)<br/>
<img width="400" height="278" alt="BlueMoonCardPreview" src="https://github.com/user-attachments/assets/bd0eea7b-098e-405a-b9ee-a8cbbce67601" />
<br/><br/>
babyWonderful.frag<br/>
<img width="400" height="325" alt="babyWonderful" src="https://github.com/user-attachments/assets/ab365ced-cd56-4dac-8003-9b1aa2896aa9" />
</p><br/>
