---
title: "Deadlock"
date: 2024-01-24
id: 36
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Deadlock

- When a process requires finite amount of resources but those resources are held by another process and that first process has to enter in waiting mode and this condition is called as **deadlock**.

## Example

- We have two processes, P1 and P2 we have total of 60 resources now P2 requires 60 resources and P1 also requires 60 resources. we are running both processes at the same time. Now one of the process don’t get enough resources it requires for this example we have P2 that requires 60 resources but those 60 resources are held by P1 so P2 will enter in waiting state until the P1 is completely executed. Here we call the deadlock condition has occur for P1.

## Conditions for deadlock

### Mutual exclusion

- At least one resource should be held in non-sharable mode at a time only one process can use the resource.

### Hold and Wait

- A process is holding at least one resource and waiting to get further resources what are currently used by other processes.

### No-Preemption

- Resource can be only released by the process that holding it after the process that has completed the task.

### Circular wait

- Suppose we have set of processes {p1,p2,p3…,pn} which are waiting in such state that p1 is waiting for a resource that is held by p2 and p2 is waiting for resource that is held by p3 and p3 is waiting for resources that is held by p4 and p4 is waiting for resource that is held by pn and pn is waiting for resources that is held by p1.
