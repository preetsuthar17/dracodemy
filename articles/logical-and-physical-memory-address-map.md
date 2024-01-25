---
title: "Logical and Physical Memory address map"
date: 2024-01-25
id: 37
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Logical and Physical Memory address map

## Logical address map

- A logical address is a virtual address created by the CPU of the computer system.
- The logical address of a program is generated when the program is running.
- The logical address is basically used as a reference to access the physical memory locations.
- In computer system a device named memory management unit (MMU) is used to map the logical address to its corresponding physical address.
- Logical address of a program is visible to computer user.

## Physical address map

- A physical address map is one that represents a location in the memory unit of the computer.
- This physical address however is not visible to computer user.
- The memory management unit (MMU) generates the physical address of for the corresponding logical address.
- Physical address is accessed through the corresponding logical address because a user cannot access it directly.
- logical address has to be mapped with physical address before the execution of program
