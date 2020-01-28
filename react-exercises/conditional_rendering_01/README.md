

## TODO APP

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
The first prop will be named todos and it will accept an array of objects.
The second prop will take a prop named showCompleted and it will accept a boolean.

if the second prop is true, it will render the completed items in the todo list. If the prop is toggled to false, it will render all the todos that have not been completed.


##DEMO

![](demo.gif)






