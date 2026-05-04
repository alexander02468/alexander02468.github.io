---
title: Hip Fracture Prediction Software Pipeline

description: Reusable system tooling for building biofidelic sideways fall models and other biomechanical models

image: /content/images/fall-thumb.jpg

open: false
---

[Link to publication](https://link.springer.com/article/10.1007/s10439-025-03938-1)

Manipulating CT scans, meshes, and finite element models, often involves similar components and ideas. As such, I developed reusable core components that abstracted the underlying volume, mesh, and array data. In order to separate concerns cleanly and increase modularity, I  used Object oriented design in a Python package (named HipPy).

Unfortunately, the code itself is not open-source, but its design *is* published in my dissertation ([here](https://www.research-collection.ethz.ch/bitstreams/11980dc0-1069-4714-a018-fe998518b109/download)).

A little history first.

The code itself went through three iterations.

Version one was "quick and dirty": a giant monolithic brittle and fragile script. It worked, but paths and values were hard-coded; variables were tangled from beginning to end.

Version two abstracted much of the core components, but the structure of the Python package still entangled core components with simulation-specific components. This meant that as others wanted certain parts of my HipPy package, I was stuck giving them the whole thing, and this often made them install external libraries that had no relevance to their project.

Version three finally separated all the core components into a sub-package, called `hippy.core` which could be used completely independently of all the other code.

![HipPy.core OOP code structure](hippy-core_structure.png "style=width:500px;max-width:100%;height:auto;display:block;margin:1.5rem auto")
*hippy.core includes inheritance to separate concerns and reduce duplicate code*

By abstracting many similar reusable components, I created a software package that was usable in separate, unrelated projects. Additionally, the separation of concerns created a cleaner update cycle as this `hippy.core` was relatively mature and rarely underwent any updates.

Various parts of the pipeline have been used in different capacities across many publications.


#### Used in (automated meshing and material mapping algorithms)

* AA Weaver, KA Greene, X Leng, L Lenchik, MF Lyles, BJ Nicklas, AM Baker, B Helgason, J Stapleton, K Devane, et al.  
*Effect of protein supplementation on hip bone mineral density, cortical thickness, and bone strength in older adult participants during a caloric restriction and aerobic exercise weight loss intervention: a randomized controlled trial.*  
**Osteoporosis International**, 1-12, 2026

* D Jha, AD Praveen, AM Baker, A Fung, VS Cheong, P Gupta, EL Lamoureux, N Hong, Y Rhee, VJW Koh, et al.  
*Dual-energy X-ray absorptiometry based biofidelic finite element models for simulating falls to the hip: Impact of trochanteric soft tissue thickness on fracture risk.*  
**Clinical Biomechanics**, 106720, 2025

* D Jha, M Chandran, D Koller, VS Cheong, AD Praveen, AM Baker, P Gupta, EL Lamoureux, H Pálsson, SJ Ferguson, et al.  
*Relationship between areal BMD, FRAX®, and femoral strength in community-dwelling older Asian adults.*  
**Archives of Osteoporosis**, 20 (1), 139, 2025

* AD Praveen, D Jha, AM Baker, I Fleps, P Björnsson, LM Ellingsen, T Aspelund, S Sigurdsson, V Gudnason, H Pálsson, et al.  
*Comparison of the time-dependent discriminatory accuracy of femoral strength and bone mineral density for predicting future hip and major osteoporotic fractures: a 16-year follow-up of the AGES-Reykjavik cohort.*  
**Osteoporosis International**, 1-10, 2025

* PA Bjornsson, AM Baker, I Fleps, Y Pauchard, H Palsson, SJ Ferguson, S Sigurdsson, V Gudnason, B Helgason, LM Ellingsen.  
*Fast and robust femur segmentation from computed tomography images for patient-specific hip fracture risk screening.*  
**Computer Methods in Biomechanics and Biomedical Engineering: Imaging & Visualization**, 2023

* I Fleps, H Pálsson, AM Baker, W Enns-Bray, H Bahaloo, M Danner, NB Singh, WR Taylor, S Sigurdsson, V Gudnason, et al.  
*Finite element derived femoral strength is a better predictor of hip fracture risk than aBMD in the AGES Reykjavik study cohort.*  
**Bone** 154, 116219, 2022

#### Used in (automated object alignment and placement)

* EK Bliven, P Guy, AM Baker, A Fung, B Helgason, PA Cripton  
*High-speed x-ray characterizes fracture incidence and bone-implant motion during a fall from standing.*  
**Clinical Biomechanics**, 106556, 2025

* EK Bliven, A Fung, AM Baker, I Fleps, SJ Ferguson, P Guy, B Helgason, PA Cripton.  
*How accurately do finite element models predict the fall impact response of ex vivo specimens augmented by prophylactic intramedullary nailing?*  
**Journal of Orthopaedic Research** 43 (2), 396-406, 2025



