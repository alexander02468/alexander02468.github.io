---
title: Visualization of model construction and results

description: Using Python, VTK, and Blender to create clean and attractive visualizations

image: /content/images/fall-thumb.jpg

open: false
---


During my doctoral thesis, I built an automated hip fracture prediction pipeline that goes from Computed Tomography (CT) scan to simulation to analysis. This process involves many steps; communicating the process efficiently and concisely is important during presentations or teaching.

As such, it is important to use clean and understandable pictures and videos. Often, we work enough with the models and results
that dealing directly with software inputs and outputs is still understandable to us. But to others, the raw data is 
distracting from the message.

Blender offers full control over rendering properties and styles. I created scripts transform our data into Blender
readable objects. This enabled me to create clean, precise, and efficient picturs/videos.

![Example labeled pelvis](intro_pelvis.png "style=width:400px;max-width:100%;height:auto;display:block;margin:1.5rem auto")
*An example of the clean visualization that is possible using Blender cartoon shaders and Freestyle lines.*

[video:/HFPP_methods.mp4]
*Video demonstration of the automated methods to build and analyze a subject's hip fracture risk*

For this particular video, the DICOM volume files from the CT scan volume were converted to an OpenVDB file using VTK, and custom Python scripts translated binary LS-Dyna outputs to raw updated nodal locations. Blender used these updated nodal locations to deform the surface meshes of each component, effectively visualizing a LS-Dyna simulation in Blender.

