## Portfolio

The following are a few items that I would like to showcase and exemplify my abilities and expertise.

### 1. Fracture Pipeline Methods Visualization

During my doctoral thesis, I built an automated hip fracture prediction pipeline that goes from Computed Tomograpy (CT) scan to simulation to analysis. This process involves many steps and telling the story efficiently and concisely is important during presentations or teaching.

As such, I assembled a video showing each of the steps using Blender, going from the volume based CT scan, to the simulation, and finally the results.

For this particular video, the CT scan was converted to an OpenVDB file using VTK, and custom Python scripts translated LS-Dyna outputs to raw updated nodal locations. These nodal locations were read in by Blender to visualize the simulation.

[video:/HFPP_methods.mp4]
*Demonstration of the automated methods to build and analyze a subject's hip fracture risk*

### 2. Reusable Code Architecture

Going from CT scans to LS-Dyna models required many steps and manipulation of the underlying data. As such, it was necessary to develop reusable core components that abstracted the underlying volume, mesh, and array data. Object oriented design was heavily used in a Python package (named HipPy).

Unfortunately, the code itself is not open-source, but its design *is* published in my dissertation ([here](https://www.research-collection.ethz.ch/bitstreams/11980dc0-1069-4714-a018-fe998518b109/download)).

The code itself went through three iterations. The first one was "quick and dirty": a giant monolithic brittle and fragile script. Version two abstracted much of the core components, but the structure of the Python package still entangled core components with simulation-specific components. This showed as the entire codebase was often dragged along to colleagues, when all they needed were just a few functions. Version three finally separated all the core components into a sub-package, called `hippy.core` which could be used completely independently of all the other code.

![HipPy.core OOP code structure](hippy-core_structure.png "style=width:500px;max-width:100%;height:auto;display:block;margin:1.5rem auto")
*hippy.core includes inheritance to separate concerns and reduce duplicate code*

By abstracting many similar reusable components, I created a software package that was usable in separate, unrelated projects. Additionally, the separation of concerns created a cleaner update cycle as this `hippy.core` was relatively mature and rarely underwent any updates.

### 3. Object Oriented Programming course using Python

During my doctoral studies, many colleagues asked me to teach a Python course. Instead of teaching strictly a Python Introduction,
I instead decided to make it an introduction to Object Oriented Programming (OOP) using Python. Most of the researchers already knew MATLAB, so teaching Python would mean just learning new syntax.

After discussing code with many researchers, I have realized that OOP is a different way of thinking about problems; the
code architecture is often very different. As such, I thought using Python as an introduction to OOP would be both
teaching a new language as they had desired, but also a new way to architect their own code.

[Link to repository](https://github.com/alexander02468/python-oop-course)