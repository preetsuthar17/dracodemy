---
title: "Contiguous memory allocation"
date: 2024-01-25
id: 39
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Contiguous memory allocation

- Contiguous memory allocation is technique where each process takes up single block in memory and execute in particular block.
- basically in contiguous memory allocation the memory is divided into particular sized partitions.
- Each block in memory is allocated to corresponding program with it’s corresponding size.

![Untitled](https://i.imgur.com/v1EY00e.png)

- There are two ways the partitioning can work,
  - Fixed partitioning (static partitioning)
  - Variable partitioning (dynamic partitioning)

### Fixed and variable partitioning (Fixed = Static & variable = dynamic)

- Fixed partitioning -
  - In fixed partitioning the memory is divided into equal amount of memory blocks, which later are assigned to program during execution or configuration.
    ![Untitled](https://i.imgur.com/4q8w4tR.png)
  - Advantages of Fixed Sized partitioning -
    - Fixed sized partitioning is easy to implement.
    - It is very light and efficient.
    - Little OS overhead.
  - Disadvantages of Fixed Sized partitioning -
    - Increases Internal Fragmentation.
    - Increases External Fragmentation.
    - Wastage of memory.
    - Limited size of process because of divided memory.
- Variable partitioning -
  - In variable partitioning the initial memory is empty and partitions are made at the run time.
  - Which means the partition in memory will be created of the same amount of memory which is required by a particular process to execute.
  - If a program requires 20MB memory to run then the partition in memory will be created size of 20MB during the run time.
  - Size of partition is equal to incoming process.
    ![Untitled](https://i.imgur.com/CdGCeDS.png)
- Advantages of variable partitioning -
  - Reduction of Internal Fragmentation.
  - No restriction for multiprogramming implementation.
- Disadvantages of variable partitioning -
  - Increase of external Fragmentation.
  - It is very difficult to implement.
