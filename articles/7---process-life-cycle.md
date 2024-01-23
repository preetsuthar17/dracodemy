---
title: "7 - Process Life Cycle"
date: 2024-01-24
id: 33
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Process Control Block

- process control block is basically a data structure that stores and manages information about specific processes.
- It is also known as task control block because it’ll control the data and manage information of specific task.
- It is associated with each processes in an operating system.
- This is very important for process management as the data structuring for the processes is done in term of PCB.
- it contains following information,

### Process State

- It displays current state of a process.
- states such like waiting, ready, running or terminated.

### Program Counter

- It keeps address of next instruction that needs to be executed in process.

### CPU Registers

- It contains specific registers that are used by processes.

### CPU Scheduling Information

- It keeps information about next process or queue for executing programs.

### Memory Management Information

- The memory management information contains information for the page tables or the segment tables depending on the memory system used.

### Accounting Information

- It contains time limit, account numbers, amount of CPU used, process number etc.

### I/O Status Information

- It contains information about the Input/output devices used by process.

  ![Untitled](https://i.imgur.com/6cz38kr.png)
