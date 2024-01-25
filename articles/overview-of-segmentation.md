---
title: "Overview of segmentation"
date: 2024-01-25
id: 42
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Overview of segmentation

- Segmentation is technique where we divide our memory into variable size parts. Each part is known as segment which can be allocated to a process.
- There are two types of segmentation,
  1. Simple Segmentation
     - Each Process is segmented into multiple divisions and they are all segmented together at once.
  2. Virtual Segmentation
     - Each process is segmented into multiple divisions but they all are not segmented together.
- Details about each segment are stored in a table called segment table.
- A segment table contains mainly two information about segment.
  1. Base: It is the base address of segment.
  2. Limit: It is the length of the segment.

## Why we need segmentation?

    - Well the paging is close to operating system view rather than user view. paging doesn’t care about the user view and user have no access to paging execution.
    - Where segmentation is close to user view rather than operating system view because segmentation works by diving program or process into blocks which is very efficient for user because they can decide what segment to create and what not.
    - For example we have a simple program with few functions, `main() sum() sub()`. here in this program we segmented the processes into specific function which makes it easier for user to understand the process rather than diving the main memory and putting this process pages all scattered in memory.

## Advantages of segmentation

    - No internal fragmentation
    - Less overhead.
    - Easy to understand the process.
    - Average segment size is larger than the actual page size.

## Disadvantages of segmentation.

    - It can cause external fragmentation.
    - Costly memory management algorithms
    - It is difficult to allocate contiguous memory to variable sized partitions.
