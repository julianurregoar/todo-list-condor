export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_TASK':
      return {
        tasks: [payload, ...state.tasks],
      };
    case 'GET_ALL_TASKS':
    case 'DELETE_TASK':
    case 'EDIT_TASK':
    case 'ASSIGNED_USER':
    case 'UNASSIGNED_USER':
      return {
        tasks: payload,
      };

    default:
      return state;
  }
};
