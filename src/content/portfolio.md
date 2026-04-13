## Portfolio

The following items showcase my abilities and expertise.

### 1. Fracture pipeline visualization

During my doctoral thesis, I built an automated hip fracture prediction pipeline that goes from Computed Tomograpy (CT) scan to simulation to analysis. This process involves many steps; communicating the process efficiently and concisely is important during presentations or teaching.

As such, I assembled a video showing each of the steps using Blender, going from the volume based CT scan, to the simulation, and finally the results.

For this particular video, the DICOM volume files from the CT scan volume were converted to an OpenVDB file using VTK, and custom Python scripts translated binary LS-Dyna outputs to raw updated nodal locations. Blender used these updated nodal locations to deform the surface meshes of each component, effectively visualizing a LS-Dyna simulation in Blender.

[video:/HFPP_methods.mp4]
*Demonstration of the automated methods to build and analyze a subject's hip fracture risk*

### 2. New interpretable injury metric

One major issue we faced when using complex finite element models was distilling biomechanical results into a single metric that was understandable by clinicians. Previous metrics included peak percentile strains or running the model with different
material properties to identify "damage" (fragility ratio), which were predictive of injury, but difficult to communicate to a non-engineering audience.

Instead, I realized that, under a given fall orientation, as injury is binary, there exists a single fall velocity that separates between
"safe" falls and "injurious" falls. That is, any speed below this value, no injury occurs and vice versa.

We called this the *Critical Velocity* (VCrit), which we defined as the minimum velocity of
simulated fracture -- where simulated fracture was defined as a threshold of failed elements.

[video:/Vcrit.mp4]
*Falls are simulated at increasing severity until a simulated fracture is observed. D represents the distance of connected failed surface elements and is used to define simulated fracture.*

We then evaluated this new metric in a cohort of 49 subjects and found that it discriminates injury risk better than the gold standard, areal bone mineral density (aBMD).

![Discriminatory performance of VCrit in a cohort of 49 subjects](Vcritperformance.png "style=width:500px;max-width:100%;height:auto;display:block;margin:1.5rem auto")
*Discriminatory performance of VCrit in a cohort of 49 subjects. Note that these values are correlated so the differences are more significant than it appears*

While not the most predictive metric, VCrit is interpretable and physically meaningful. As such, it is being used by collaborators in similar cohort studies.

This work is currently under review at the Journal of Biomechanics.

### 3. Reusable code architecture

Manipulating CT scans, meshes, and finite element models, often involves similar components and ideas. As such, I developed reusable core components that abstracted the underlying volume, mesh, and array data. In order to separate concerns cleanly and increase modularity, I  used Object oriented design in a Python package (named HipPy).

Unfortunately, the code itself is not open-source, but its design *is* published in my dissertation ([here](https://www.research-collection.ethz.ch/bitstreams/11980dc0-1069-4714-a018-fe998518b109/download)).

A little history first.

The code itself went through three iterations.

Version one was "quick and dirty": a giant monolithic brittle and fragile script. It worked, but paths and values were hardcoded, a variables were tangled from beginning to end.

Version two abstracted much of the core components, but the structure of the Python package still entangled core components with simulation-specific components. This meant that as others wanted certain parts of my HipPy package, I was stuck giving them the whole thing, and this often made them install external libraries that had no relevance to their project.

Version three finally separated all the core components into a sub-package, called `hippy.core` which could be used completely independently of all the other code.

![HipPy.core OOP code structure](hippy-core_structure.png "style=width:500px;max-width:100%;height:auto;display:block;margin:1.5rem auto")
*hippy.core includes inheritance to separate concerns and reduce duplicate code*

By abstracting many similar reusable components, I created a software package that was usable in separate, unrelated projects. Additionally, the separation of concerns created a cleaner update cycle as this `hippy.core` was relatively mature and rarely underwent any updates.

### 4. Object oriented programming course using Python

During my doctoral studies, many colleagues asked me to teach a Python course. Most of the researchers already knew MATLAB, so teaching Python would mean just learning new syntax. Instead, I instead decided to make it an introduction to object oriented programming (OOP) using Python.

After helping fellow researchers program, I often suggested architectures that were difficult for them to conceive. To them, declarative and procedural programming was all programming. Thus, I realized that OOP is, in some respects, a fundamentally different way of approaching a problem. As such, I thought using Python as an introduction to OOP would introduce a new way of approaching problems.

Not that OOP is the correct solution for everything, but rather it is an additional tool in our engineering toolkit.

[Link to repository](https://github.com/alexander02468/python-oop-course)