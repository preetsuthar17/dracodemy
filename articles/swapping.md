---
title: "Swapping"
date: 2024-01-25
id: 38
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Swapping

- Swapping is a process in operating system where a program from main memory is swapped to external memory for temporary period to save and empty the main memory.
- This helps to make space for other processes and helps to improve the main memory utilization.
- in main memory the space where the swapped out process is stored is called **swap space.**
- The concept of swapping is divided into two concepts,
  - Swap-in
  - Swap-out

## Swap-in

- Swap-in is a method of removing program from main memory and adding that to secondary memory.

## Swap-out

- Swap-out is a method of removing the program from secondary memory and putting back in main memory.
- Here is basic example of calculating time to figure out how much time it will take for process to swap-in and swap-out.

> Suppose the user process's size is 2048KB and is a standard hard disk where swapping has a data transfer rate of 1Mbps. Now we will calculate how long it will take to transfer from main memory to secondary memory.

`1MB = 1024KB`

```
User process size is 2048KB
Data transfer rate is 1Mbps = 1024 Kbps

Time = process size/transfer rate
Time = 2048/1024
Time = 2 seconds
Time = 2000 milliseconds

swap-in will take 2000 milliseconds and swap-out will take same time as swap-in,
therefore, swap-in and swap-out will take total 4000 milliseconds.
```
