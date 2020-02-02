## Conditional Rendering

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/03-conditional-rendering/
code . # if you would like to open this in a separate VSCode window
yarn install
yarn start
```

If, at any time, you need to stop the app, press `ctrl+c`.

## Instructions

Create a component that will iterate over an array of objects. The array of objects will look like this:

```javascript
export const todos = [
  {
    userId: 1,
    id: 1,
    title: "clean my room",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "take trash out",
    completed: false
  }
];
```

Import the the "todos" from "data" folder.

The first prop will be named "todos" and it will accept an array of objects.
The second prop will take a prop named "showCompleted" and it will accept a boolean.

```xml
<Todo todos={todos} showCompleted={false} />
```

if the "showCompleted" is true, it will render the completed items in the todo list. If the "showCompleted" is false, it will render all the todos that have not been completed.

![](demo.gif)
