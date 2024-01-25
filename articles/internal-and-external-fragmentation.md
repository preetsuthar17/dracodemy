---
title: "Internal and External Fragmentation"
date: 2024-01-25
id: 40
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Internal and external fragmentation

## Internal Fragmentation -

- Internal fragmentation occurs when fixed sized memory blocks are allocated to processes.
- Suppose we have a memory block with 5MB and we have Process 1 which is P1 and it is 2MB. So when P1 is assigned to the memory block it’ll take up 2MB but the other 3MB is wasted and become useless, so this is what we call **Internal Fragmentation**.
  ![Untitled](https://i.imgur.com/4xheg8K.png)

## External Fragmentation -

- External Fragmentation occurs when variable sized memory blocks are allocated to processes.
- Suppose we two memory blocks, We are using variable partitioning so P1 is 10MB and P2 is 20MB.
  ![Untitled](https://i.imgur.com/c75bDjz.png)
- now once the execution of these two processes, P1 and P2 finishes, It’ll empty those memory partitions, 10MB and 20MB total 30MB is emptied.
- Now we have another process which requires 30MB of storage, but it cannot be allocated to these empty partitions because the memory block is not contiguous which means it’s not single block of memory which can be assigned to program.
- and now this 10MB and 20MB is wasted which makes **External Fragmentation**.
