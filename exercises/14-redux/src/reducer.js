import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    isVisible: true,
    color: null,
    todos: ["Finish this assignment", "Read a book"],
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      };

    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case types.TOGGLE:
      return {
        ...state,
        isVisible: !state.isVisible
      };
    case types.WHAT_COLOR:
      return {
        ...state,
        color: action.color
      };
    case types.SET_INPUT:
      return {
        ...state,
        todoInput: action.todoInput
      };
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
        todoInput: "",
      };
    // case types.SET_YELLOW:
    //   return {
    //     ...state,
    //     color: "yellow"
    //   };
    // case types.SET_RED:
    //   return {
    //     ...state,
    //     color: "red"
    //   };
    // case types.SET_GREEN:
    //   return {
    //     ...state,
    //     color: "green"
    //   };
    // case types.SETINPUT:
    //   return {
    //     ...state,
    //     todoInput: state.setInput
    //   };
    // case types.TODO:
    //   return {
    //     ...state,
    //     todoInput: state.setInput
    //   };
    default:
      return state;
  }
};

export default reducer;
