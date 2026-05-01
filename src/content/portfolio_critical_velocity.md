---
title: Critical Velocity - a new biomechanical metric

description: Developing a new biomechanical metric derived from a biofidelic sideways-fall model to predict hip fracture during a sideways-fall

image: /content/images/fall-thumb.jpg

open: false
---

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
