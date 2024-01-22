---
title: "12 - Revision of Pointers and Structures | DSA"
date: 2024-01-04
id: 21
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Tutorial
---

## Revision of Pointers

### Pointer -

- A pointer is a variable that stores the memory address of another variable as its value.
- It is done using reference operator `&`.
- A pointer variable points to a datatype of the same type, and is created with `*` operator.
- Syntax:

  ```python
  int my_var = 10;
  int* ptr = &my_var;
  ```

- In above example the memory address of `my_var` is stored in pointer called `ptr`
- Let’s access those values and print in console

  ```c
  int my_var = 10;
  int* ptr = &my_var;

  // print value of my_var
  printf("%d\n", my_var);

  // print memory address of my_var without using pointer.
  printf("%n\n", &my_var);

  // print memory address of my_var using pointer.
  printf("%p\n", ptr);
  ```

## Revision of Structure

### Structure -

- A structure in programming language is a user-defined data type.
- They are used to group multiple related variables at single place.
- Each variable in structure is known as `member`.
- A structure can contain multiple type of data like float, int, char, etc.

### Creating Structure

- To create a structure we use `struct` keyword and all the member are declared inside the curly braces `{}`

```c
struct myStructure { // declaration
 int myNum; // member
 char myLetter; // member
}; // Ends with semicolon
```

### Accessing structure and members inside of structure

- To access structure we must create a variable of a structure.
- We use `struct` keyword inside `main()` function following by identifier.

```c
struct myStructure{
 int myAge;
 int mySal;
};

int main(){
 struct myStructure s1;

 return 0
}
```

- Now to access the structure members we use structure variable following by member name.

```c
struct myStructure{
 int myAge;
 int mySal;
};

int main(){
 struct myStructure s1;

 s1.myAge = 17;
 s1.mySal = 69000;

 printf("My age: %d\n My salary: %d\n", s1.myAge, s1.mySal);

 return 0
}
```
