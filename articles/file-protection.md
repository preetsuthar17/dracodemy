---
title: "File Protection"
date: 2024-01-26
id: 48
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - OS Tutorial
---

## Protection

- Protection in file system means safety from improper access.
- Protection in file system is required when the file is being shared among multiple system or users.
- Some files need to be shared among all users while others need to be shared among limited users.
- To allow limited sharing we can limit the access for specific users to the file system. which means we can add permissions to the file systems for users.
- Here are several operations on files that can be controlled,
  - Read - Read a file.
  - Write - Write a file.
  - Execute - Load the file and execute file.
  - Append - Add information at the end of the file.
  - Delete - Free up the space allocated to a file.
- There are two most common ways to limit file access,

## Password -

        - User choose or get assigned password to authenticate their identity.
        - User has to provide password to login while accessing protected files/directories.
        - OS verifies password and grants access if valid.
        - This Provides user-level access control on file.

## Access Control -

          - Files and resources have access control list specifying access rights.
          - Access rights indicates users allowed and type of access given (e.g. read, write)
          - Permissions can be set at user or all users level in many file systems.
          - This is more advance way to control access and permissions for different users.
