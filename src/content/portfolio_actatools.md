---
title: ActaTools

description: A set of lightweight command-line tools for reproducible and traceable computational studies

image: /content/images/fall-thumb.jpg

open: false
---

[Link to repository](https://github.com/alexander02468/actatools)

As a personal project, I have been developing a set of lightweight command-line tools to address an issue I commonly
faced as a research engineer: Our code often drifted, studies were difficult to compare across different times.

The solution is obvious: develop versioning and traceable packaging that seals what code generates what results 
-- right along the lines of regulated workflows such as ISO 13485. But doing proper version tracking or packaging
traceable results is often time-consuming -- there are always higher priority items to work on. And then the result
is that our messy code and data provenance comes back to bite only once things have already gone wrong.

How do we fix it when we already have established workflows?

ActaTools is designed to be minimally invasive to existing workflows, using Blake3 hashing algorithms file-based
version control. Additionally, there is a light-weight orchestration functionality to encourage more modular computational
study designs. To ease usage, I split functionality into
two separate tools: ActaStudy and ActaRecords, and also enabled cleaner separation of concerns.

![Architectural design of ActaStudy](Variations.png "style=width:500px;max-width:100%;height:auto;display:block;margin:1.5rem auto")
*Architectural design and abstraction of a Study in ActaStudy*

During this project, I have been learning how to balance scope versus usefulness versus maintainability, emphasizing clean
architecture, minimal dependencies, and streamlined usage. Additionally, I have become proficient in Rust, a
significantly different language than C++ or Python. The result is a blazing fast tool that can be used by
researchers and small groups that do not or cannot use larger orchestration
and data management tools.
