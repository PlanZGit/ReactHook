# React Interview Questions | A Preparation Guide

## Like and Dislike

1. What do you like and dislike about React?

- Like : I like how components are made, it's well orginazied from parent to child. I also like react hooks in version 16.8 which is better compared to class components.

- Dislike : I dislike redux data management.

- Like A : Love unidrectional flow from parent to child and the fact that react is pretty much javascipt

- Dislike A: Dislike JSX

## Conditional rendering and List rendering

1. What is the signifance of having a key prop when rendering a list of elements?

A: It provides an easier way for the PC to identify the unique number

2. How React compares elements under the hood to only render what has changed?

A: react rerenders when the state is changed,therefore elements in that component will rerender. The children components under it will not rerender unless specified

3. What is a potential bug that you can introduce when using index as key?

A: Using index might result in performance issues and data binding issues in case reordering in the form of sorting, filtering might happen.

## Class component's lifecycle methods

- There will always be lagacy code that you need to maintain
- Learn the mounting phase, the updation phase and the unmounting phase methods
- Order of invocation and brief description of when you'd use each one of them

## Context API

- What is prop drilling, how can you overcome that using the contextAPI

## Hooks

What was the need for hooks?
useState, useEffect and useContext

A: It is famous for its ease of use and its readability. Hooks allow you to use state, lifecycle methods, and other functionalities of React without using classes.

How does useEffect compare to component did mount, did update, and will unmount lifecycle methods?

A: useEffect can be use as a component did mount and did update, by adding a dependences in the second parameter and it can unmount by return

## Optimization

- Pure components
- memo
- usMemo and useCallback

How to share logic across components?

- Higher order components
- Render props pattern
- Custom Hooks

What are some of the packages that you use along with React?

- Styling
- Routing
- Form handling
- State management
- CRA vs Custom webpack config

## Redux

What is Redux?

A : it is a state management which solves the problem with prop drilling

How do you decide whether to choose Context API or Redux?

A: If it is a small project, context with useReducer is the way to go
1
A: If it is a large project redux with its dev tools is definitely helpful

    what is the redux store? A: It stores the whole state of the app
    What are actions? A: plain JavaScript object that contains information
    what are action creators? A: a function that literally creates an action object
    What are reducers?
    A: pure function that takes an action and the previous state of the application and returns the new state

Be able to explain the flow between these different parts.

# MORE QUESTION

## What is JSX?

Stands for JavaScipt and XML
it is a XML like syntax to write javascipt and render things to the dom
it is a react.create element

## Why is class , classname in react

class is a reserved keyword in javascipt
so , class is classname in JSX

## Describe the data flow in react

It is unidirectional, this means that all the component in react has a parent child relationship,
passing the data in one direction, mainly we pass information down is through props

- context, redux

## How would you delay a API call until the data is mounted?

by using component did mount which is part of the life cycle methods, or by using useEffect hook

## Should you use ternaries or && operator to conditionally render react components

use ternaries
