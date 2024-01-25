---
title: "Overview of paging"
date: 2024-01-25
id: 41
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Overview of paging

- Paging is a storage system which is used to retrieve processes from the secondary storage to the main memory as pages.
- The paging basically eliminates the external fragmentation.
- In paging we have a process and a main memory, those process and main memory are divided into blocks which are same sized which means size of single block in process is equal to size of single block in main memory.
- Each divided block in process is called **pages** and each divided block in main memory is called **frame**.
- Processes are divided into number of pages and main memory is divided into frames and we divide it in a manner that size of pages is always equal to size of frames.
  ![Untitled](https://i.imgur.com/lCbXfSb.png)
- So now if we want to execute the process 1 (p1) what it will do is that it will allocate each page to each frame in the main memory and will execute it.
- There can be multiple process which are being executed,
  ![Untitled](https://i.imgur.com/Ge41QPn.png)
- Now suppose our process 3 and process 4 is done executing so those frame of p3 and p4 will be free in our memory means blank where we can execute another process.
- Now we want to execute process 5
  ![Untitled](https://i.imgur.com/33AS3Mn.png)
- Now how it’ll eliminate the external fragmentation is by that paging doesn’t require process to execute in contiguous manner.
- How it works is that it’ll allocate one page of p5 in first empty frame, and other two pages of p2 in last two empty frames and the process will execute seamlessly.
  ![Untitled](https://i.imgur.com/YRZ5h1Q.png)
- This is the biggest reason we use paging cause it doesn’t require process to execute in contiguous manner.
