---
title: "Introduction to shell and commands"
date: 2024-01-27
id: 53
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Introduction to shell and commands

## Shell -

- Shell is user interface which connects user and kernel and helps user to perform tasks and manage the system through it.
- Shell is basically command line interface to manage the systems.
- It takes commands through user and runs the functions of kernels.
- The Shell can be differentiated in two types,
  - Command line shell -
  - These shell runs the command in terminal and displays the output in terminal itself.
  - Graphical user interface -
  - These shell execute the process provided by user in graphical way and displays output in graphical way too
- There are few types of Shell which are listed below,
  - Korn Shell
  - Bourne Shell
  - C Shell
  - POSIX Shell

## Shell scripts -

- Shell are usually very interactive which means they accepts commands as input from the users and execute them.
- However sometimes user want to execute multiple commands at once that’s when we can create shell scripts and put bunch of commands in it and execute the script.
- Shell script file ends with `.sh` extension.
- Here is small example of shell script,

```bash
myScript.sh

echo "Hello world!"
```

- Now to execute this file we can run,

```bash
sh myScript.sh
OR
bash myScript.sh
OR
./myScript.sh
```
