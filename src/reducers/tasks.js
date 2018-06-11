const tasks = (state = [], action) => {
    switch (action.type) {
      case 'ADD':
      console.log("HELLO");
        return [
          ...state,
          action.task
        ]
      case 'DELETE':
      state.splice(action.id,1);
        return state;
      case "EDIT":
      state[action.id]=action.task
        return state;
      default:
        return state
    }
  }
export default tasks