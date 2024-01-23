---
title: "8 - Context Switch"
date: 2024-01-24
id: 34
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Context Switch

- Context switching is method or technique of storing the state of current program and executing another program, and restoring the previous program from the same state when it was switched.
- Basically it is method of storing current state of program so that it can be restored and later, and then loading the state of another process and run it.

  ![Untitled](https://i.imgur.com/xGOWAdO.png)

- Here is how it works,

  - assume there are two process running p1 and p2, we first save the current state of p1 in the memory and then load the p2 then we can save the state of p2 and reload the state of p1.
  - In simpler words it switching between processes without losing their state.

- Triggers for Context Switching,
  - Multitasking
  - interrupt handling
  - user and kernel mode switch
