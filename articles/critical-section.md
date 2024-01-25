---
title: "Critical Section"
date: 2024-01-24
id: 34
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Critical Section

- Critical section is condition is where part of program tries to access the shared resources.
- This resources may be any resource in computer like memory location, Data Structure, CPU or any I/O device.
- Critical section cannot be executed by more than one process at the same time.
- Critical section is designed to minimize the occurrence of race condition in OS.
- Race condition is a condition that occurs when multiple processes or threads access shared resources at the same time.’
- Solution for critical section must fulfill following requirements:

### Mutual Exclusion

- No two processes can use same resources/objects at the same time.

### Progress

- if one process doesn’t need to execute into critical section then it should not stop other processes to get into the critical section.

### Bounded waiting

- We should be able to predict waiting time for every process to get into the critical section.
