---
title: "File Allocation methods"
date: 2024-01-26
id: 49
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## File Allocation methods

There are two methods for file allocation,

- Contiguous Allocation
- Non-Contiguous Allocation

## Contiguous allocation

- In contiguous file allocation, the block is allocated in such manner that all the allocated blocks in the hard disk are adjacent.
- Assuming that a file need `n` number of blocks in the hard disk and the file begins with a block at position `x`, then next block to be assigned to it will be `x+1, x+2, x+3,...,x+n-1` so that they are in contiguous manner.
- The table of contiguous allocation contains these 4 information.
- File Name, Starting point, Length, and Total Allocated Blocks.
  ![Untitled](https://i.imgur.com/REqafFP.png)
- Advantages -
  - It is very easy to implement.
  - There is minimum amount of seek time.
  - The disk head movement is minimum.
  - Memory access is faster
  - It supports sequential as well as well direct access.
- Disadvantages -
  - At the time of creation, the file size must be initialized.
  - As it is pre-initialized, the size cannot increase.
  - Possibility of internal or external disk fragmentation.

## Linked allocation

- Also known has Non-Contiguous allocation.
- The linked allocation overcomes the drawback of the contiguous file allocation.
- The file we store on the hard disk is stored in scattered manner according to the space available on the hard disk.
- So the name suggests linked allocation, it uses pointers to point to the next block of the same file, so therefore each file block also stores the pointer to the next block.
  ![Untitled](https://i.imgur.com/Bc780BQ.png)
  - Here as you can see in the image each block in the memory has it’s own particular address which actually stores the information of file.
- In the linked allocation table we store some basic information like, File, Starting point and Ending point.
- The OS will search from starting point to ending point entirely and if it finds empty block it can make use of those empty block in memory.
- Now because the allocation is linked in the memory it won’t need to store data in contiguous manner. data can be stored randomly in memory.
- Advantages -
  - There is no external fragmentation.
  - The directory entry just needs the address of starting block,
  - The memory is not needed in contiguous form.
- Disadvantages -
  - It does not support random access or direct access.
  - If pointers are affected so the disk blocks are also affected.
  - Extra space is required for pointers in the block
