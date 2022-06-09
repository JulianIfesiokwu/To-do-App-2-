# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./src/images/Screenshot%202022-06-09%20at%2011-52-51%20React%20App.png)

### Links

- Solution URL: [https://github.com/JulianIfesiokwu/To-do-App-2-e](https://github.com/JulianIfesiokwu/To-do-App-2-)
- Live Site URL: [https://to-do-app-2-umber.vercel.app/](https://to-do-app-2-umber.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [SASS](https://sass-lang.com/) - For styles
- [Beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) - For drag and drop functionality

### What I learned

I learnt how to manipulate arrays in React and JavaScript

- How to create, manipulate and filter arrays in React and JavaScript
- How to use Beautiful-dnd, a react library for drag and drop
- How to SASS in react
- How to toggle light and dark mode in react
- React hook - useState

```js
// Rearrange items on drag and drop
const handleOnDragEnd = (result) => {
  const items = Array.from(clonedAllTasks);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);

  setClonedAllTasks(items);
  setAllTasks(items);
};

// Toggle light and dark mode
const toggleTheme = (theme) => {
  setTheme(!theme);
};

// Add a task to the task list
const addTask = (e) => {
  if (e.target.value === "" && e.charCode === code) {
    alert("Please enter task details");
    return;
  }
  if (e.charCode === code) {
    const newTask = {
      id: new Date().getTime().toString(),
      title: task,
      completed: false,
      shown: true,
    };
    setAllTasks([...allTasks, newTask]);
    setClonedAllTasks([...allTasks, newTask]);
    setTask("");
  }
};
```

### Continued development

- React
- Beautiful-dnd
- SASS
- React Hooks

### Useful resources

- (https://dev.to/s0xzwasd/using-scss-css-variables-in-react-322j) - This helped me understand and use sass varibales in react.
- https://www.w3schools.com/css/css3_variables.asp#:~:text=First%20of%20all%3A%20CSS%20variables,it%20inside%20the%20%3Aroot%20selector.

- https://www.w3schools.com/howto/howto_css_custom_checkbox.asp

- https://stackoverflow.com/questions/52900207/how-to-use-scss-variables-into-my-react-components

- https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

These are just some of my resources.

## Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/JulianIfesiokwu](https://www.frontendmentor.io/profile/JulianIfesiokwu)
