const initialState = {
    tasks: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          ),
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      case 'FETCH_TASKS':
        return {
          ...state,
          tasks: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  