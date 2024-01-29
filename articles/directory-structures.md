---
title: "Directory Structures"
date: 2024-01-26
id: 47
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

- There are three types of three types of file directory structure,
  - Single-level Directory
  - Two-level Directory
  - Tree-Structured Directory

## Single level directory -

- In single level directory all files are stored in a single directory.
- There are no sub-folders.
- This directory is maintained for all the users.
  ![Untitled](https://i.imgur.com/2NdiTyA.png)
- Advantages -
  - Simple to understand the directory.
  - Easier to implement.
- Disadvantages -
  - Hard to organize files logically.
  - No control on group of files.
  - Not efficient for large amount of number of files.

## Two-level Directory -

- There are two directories,
  - Root Directory
  - Sub Directory
- Files can exist in the root folder or any sub folders.
- Sub directories help group related files into folders.
  ![Untitled](https://i.imgur.com/tBopD2v.png)
- It allows each user to keep their files separately inside their own directory.
- It allows to use the same name for files but under different user directories.
- Advantages -
  - Organize more files by grouping related files into sub folders.
  - Find files faster by reducing the files searched through.
- Disadvantages -
  - Not efficient for large files systems.

## Tree-Structured Directory -

- Tree structured directory allows user to make more depth directories.
- We can create more than 2 sub-directories.
- It can support large numbers of files all over.
- File can exists on any level subdirectory.
- A user can access a file of its own user directory with a shorter path than the other user
  ![Untitled](https://i.imgur.com/vzkfRdZ.png)
- Advantages -
  - Very very efficient to manage extremely large files systems.
  - Flexible way to group related files/folders.
  - Find files faster by logical classifications.
- Disadvantages -
  - Harder to implement tree data structures.
  - Navigations can get complex deep down the hierarchy.
