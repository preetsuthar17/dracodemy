---
title: "Overview and Types of Operating System"
date: 2024-01-21
id: 27
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Overview of operating systems

## Multiprogramming OS

- Multiprogramming operating system is kind of operating system which can run multiple processes on a single thread CPU efficiently.
- While multiprogramming OS can run multiple programming on single thread CPU but one program must execute before CPU loads another program.
- When a program is being executed it’s also known as **Task** or **Process** or **Job.**
- There are two types in multiprogramming OS,
  - Multitasking Operating system.
    - Multitasking operating system is where one, two or more programs are executed at same time.
    - It happens because the operating system loads each program in the each memory at the same time.
  - Multiuser Operating system.
    - Multiuser Operating system works by providing multiple user access to single computer with powerful central computer terminal.
- Advantages -
  - It provides less response time.
  - It can run multiple program at the same time.
  - It can utilize CPU by reducing the ideal time to almost zero.
  - Resources are utilized smartly.
- Disadvantages -
  - CPU scheduling is required.
  - Memory management is required because all the programs are loaded into main memory.
  - If job is large, it’ll take more wait to execute.

## Time Sharing OS

- Time sharing operating system is very efficient because this is how it works, It divides the computer time into slices and assigning each time slice to each user to each of them can use it turn by turn without having to wait for computer to get free.
- It shares the time slices among user instead of giving all time to just single user and letting other wait to use until that single user it done with execution.
- It provides time slices to each user so each can use without having to wait for one person to finish using or executing programs.
- It is commonly used in modern operating system to make multitasking work even more efficient.
- Advantages -
  - It makes computer system more cost-efficient.
  - Provides better user experience.
  - Makes it more efficient to multitask.
  - They provide better user interface.
  - Allows multiple users to work at the same time.
- Disadvantages -
  - Not providing enough security as all the programs are divided into multiple chunks of memory.

## Real Time OS

- Real time operating system are kind of operating system where the time and constraints are fixed and very strict.
- These operating system are used when we want to fix some time to do perform particular task in specified task very strictly.
- Is it used in services like Air Crafts, Traffic signals etc.
- There are three types of Real Time Operating System,
  - Hard Real Time OS:
    - In this real time operating system the time and constraint is very fixed and strict. Even a second of delay is not allowed. that’s why given task is completed within the given time only.
    - This is used in Air Crafts, medical systems etc.
  - Firm Real Time OS:
    - In this real time operating system it gives time limit too but crossing the time limit doesn’t result in great loss.
  - Soft Real Time OS:
    - As name suggests it handles the deadline and time limit softly, that means if there are small delays in system it’s acceptable.
- Advantages -
  - They have no errors.
  - Due to small size, they can be added to other systems.
- Disadvantages -
  - Algorithm are complex
  - System resources are costly.
