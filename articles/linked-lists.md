---
title: "Linked Lists"
date: 2024-01-20
id: 24
author: "Preet Suthar"
authorGithub: "https://github.com/preetsuthar17"
tags:
  - DSA Tutorial
---

## Linked list presentation

- Linked list is a linear data structure just like array.
- The elements in linked list are connected using pointers.
  ![Untitled](https://i.imgur.com/dkktSQh.png)
- Linked list is basically multiple nodes connected together making a sequence of nodes.
- It has NULL at the end of linked list, which shows that the linked list is ended
- Each node contains two field,
  - Data
  - Next(pointer)
- Data:
  - It contains the data of variable.
- Next(pointer):
  - It contains the memory address of next data.
    ![Untitled](https://i.imgur.com/1KhIabX.png)
- Starting point of linked list is known as Head, and ending point is known has Tail
- Operations on Linked List
  - Insertion
  - Deletion
  - Traversal
  - Searching
  - Sorting
  - Merging

## Types of linked list

- There are multiple types of Linked List
  - Singly Linked List
  - Doubly Linked List
  - Circular Linked List
  - Circular doubly Linked List

### Singly linked list -

- A singly linked is single directional linked list, which means we can traverse in only one direction, i.e., from head node to tail node.
- It is sequence of nodes, where node contains data and pointer/next which points to next node.
- Last node is Null.
- It’s linear data structure which means elements are sequentially connected.
  ![Untitled](https://i.imgur.com/MPdyMFr.png)

### Applications of singly linked List

- Implementing stacks and queues.
- Dynamic memory allocation.
- Undo - Redo functionality.
- media playback applications

## Concept of circular linked list

- A circular linked list is another variation of linked list, but in this linked list the last node don’t have any null character but the last node is connected to first node forming a circular loop.
- This makes the data structure without endpoints
  ![Untitled](https://i.imgur.com/LNdUwOa.png)
- Here you can see the end tail don’t have any NULL character but instead the last character is connected with the first node.
- It forms a circular loop, which allows user to traverse the list infinitely.
- Each node contains data and pointer to next node.

### Advantages of circular linked list -

- Used to implement continual traversal like playing playlists on loop.
- Cancels the need to check for the null character which allows traversal infinitely.
- Can turn any linked list into a circular one by making the last node’s next pointer reference the first node.

### Applications of circular linked list -

- Used to implement circular buffers.
- Used to implement OS and browser forward and backward navigation while referencing the next or previous node.
- Used in Operating Systems to take note of processing.
- Used for round robin scheduling algorithms.
- Used to task scheduling in Operating Systems.

## Difference between circular linked list and singly linked list

| Circular Linked List                                                                                        | Singly Linked List                                                                                                                |
| ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| The last node points to the first node.                                                                     | The last node doesn’t point to any node but instead it’s NULL.                                                                    |
| Circular linked list doesn’t have any ending point instead the ending point is referenced to starting node. | Singly linked list have ending point where the ending point is defined with NULL.                                                 |
| Circular linked list can be traversed infinitely as they don’t have any ending pointer.                     | In Singly linked list the traversal is finite because it has NULL node at the end, and can be only traversed in single direction. |
| Used for queues, buffers or turn-based games etc.                                                           | Used for stacks, undo functionality, hash table chaining etc.                                                                     |

## Doubly linked list

- Doubly linked list is another type of linked list, which is also sequenced collection of nodes.
- The doubly linked list is different than singly linked list because the node and traversing has different field and methods.
  ![Untitled](https://i.imgur.com/3rNB8JT.png)
- In double linked list the node has three fields.
  - prev
    - points to the next pointer of prev node.
  - data
    - contains data of the node.
  - next
    - points to the prev pointer of next node.
- This takes more memory compared to singly linked list.
- Insertion and deletion of node is more efficient since no traversal is required to find the previous node.
- Nodes are linked together because of that the traversal is done in both direction.
- Application of Doubly Linked List -
  - Creating and navigating in both direction browser or OS to traverse forward and backwards.
  - Implementing Undo and Redo functionality by storing the data in previews and storing the data in forward data.
  - Music and video player to allow next and previous song navigation.
  - Image viewer application to allow viewing photos in an album forth and back.

## Difference between Doubly linked list and singly linked list

| Singly Linked List                                 | Doubly Linked List                                     |
| -------------------------------------------------- | ------------------------------------------------------ |
| Contains one pointer to next pointer               | Contains pointers to both next and previous node       |
| Can traverse in only single direction.             | Can traverse in both direction forwards and backwards. |
| Use less memory to as it only stores next pointer. | Uses more memory as it stores two points               |
| Can be accessed from head only.                    | Can be accessed from head and tail                     |
| Simple and clean code.                             | Complex code due to two pointer.                       |
| Used in Stacks, queues, etc.                       | Used in browsers, OS, undo-redo features, etc.         |

## Applications of Linked List

- Implementing stacks and queues -
  - Linked list are used for efficient insertion and deletion of data in linear data structures.
- Undo/redo functionality -
  - Linked lists can be used to keep track of prev pointers to implement Undo/redo functionality.
- Browser history functionality -
  - Page visits in web browser’s history implemented using linked lists to track visit sequence of pages.
- Image gallery -
  - Linked list is used to create media browsing system allowing to create next and previous button to navigate media.
- Dynamic memory allocation -
  - Linked list doesn’t require reallocation of memory, this makes it useful in systems where amount of data to be stored can’t be predicted ahead of time.
