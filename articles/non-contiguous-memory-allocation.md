---
title: "Non Contiguous memory allocation"
date: 2024-01-25
id: 41
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Non Contiguous memory allocation

- Non contiguous memory allocation is also known as dynamic or linked allocation.
- In this technique each process is allocated a series of non-contiguous blocks of memory that can be located anywhere in the physical memory.
- Which means if a process requires 10MB of memory block and we have two blocks of 5MB, The process can be divided into two chunks and will be loaded in two 5MB blocks making total 10MB usage.
