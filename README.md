# LinkedList and Node Classes

This repository contains a simple implementation of a **Linked List** data structure with two classes: `LinkedList` and `Node`.

## LinkedList Class

The `LinkedList` class provides methods for adding, removing, and interacting with nodes in the list.

### Constructor

- **`constructor(list = {})`**  
  Initializes the linked list (can be an empty list or a pre-existing one).

### Methods

- **`append(value)`**  
  Adds a node with the given value to the end of the list.

- **`prepend(value)`**  
  Adds a node with the given value to the beginning of the list.

- **`size()`**  
  Returns the number of nodes in the list.

- **`head()`**  
  Returns the first node in the list.

- **`tail()`**  
  Returns the last node in the list.

- **`at(index)`**  
  Returns the node at the specified index.

- **`pop()`**  
  Removes the last node from the list.

- **`contains(value)`**  
  Checks if a node with the specified value exists.

- **`find(value)`**  
  Finds the index of the first node with the specified value.

- **`toString()`**  
  Returns a string representation of the list.

## Node Class

The `Node` class represents a single element in the linked list.

### Constructor

- **`constructor(value = null, nextNode = null)`**  
  Initializes a node with a value and a reference to the next node (or `null` if it's the last node).