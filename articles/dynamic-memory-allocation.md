---
title: "Dynamic Memory Allocation"
date: 2024-01-21
id: 23
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Tutorial
---

## Dynamic Memory Allocation

- Dynamic memory allocation in programming language allows the programmer to allocate the memory at runtime.
- There are 4 function for the memory allocation in C programming language.

  1. malloc()
  2. calloc()
  3. realloc()
  4. free()

### malloc()

- malloc function allocates single block of requested memory.
- It doesn’t initialize memory at execution time, so it has garbage value initially.
- It returns null if memory is not sufficient.
- syntax

  ```c
  ptr = (cast_type*)malloc(byte_size)
  ```

- example

  ```c
  ptr = (int*)malloc(n*sizeof(int)); // we're allocating the size of int datatype
  ```

### calloc()

- calloc function allocates multiple block of requested memory.
- It initially initialize all bytes to zero.
- It returns null if memory is not sufficient.
- syntax

  ```c
  ptr = (cast_type*)calloc(number, byte_size);
  ```

- example

  ```c
  ptr = (int*)calloc(10, sizeof(int)); // we're allocating the size of  int datatype to 10 blocks in memory
  ```

### realloc()

- if memory is not sufficient for malloc() or calloc() you can reallocate the memory by realloc() function.
- basically it changes the memory size.

```c
ptr = realloc(ptr, new_size)
```

### free()

- free function is used to release the memory occupied by malloc or calloc functions

```c
free(ptr)
```
