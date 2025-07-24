# GLSL-Shaders
Collection of shaders made in GLSL/OpenGL
# Why?
As part of my IT training, a key area for me to improve on was my mathematics. In order to improve at concepts that I was originally unfamiliar with, such as linear algebra and GPU maths, I opted to learn GLSL. It heavily relies on using maths functions such as Sin, Cos, Tan, Pow, Roots etc - combining them all to create interesting visual effects that run from a GPU.
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
---SunsetMagicPond.GLSL---<br/>

![SunsetPond](https://github.com/user-attachments/assets/72ebe63a-eeae-4239-ab90-d8b12ede315a)
<br/>
---60sFuture.GLSL---<br/>

![60sFuture](https://github.com/user-attachments/assets/628e4da4-f2c7-432e-b1ac-d6b1a0d8cb75)
<br/>
