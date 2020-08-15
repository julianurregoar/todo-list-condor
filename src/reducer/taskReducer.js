export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    case 'GET_ALL_TASKS':
    case 'DELETE_TASK':
    case 'EDIT_TASK':
    case 'ASSIGNED_USER':
    case 'UNASSIGNED_USER':
      return {
        ...state,
        tasks: payload,
      };
    case 'SEARCH_TASK':
      return {
        ...state,
        searchedTasks: payload,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        searchedTasks: [],
      };
    default:
      return state;
  }
};
