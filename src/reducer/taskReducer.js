export const taskReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_TASK':
      return {
        tasks: [payload, ...state.tasks],
      };
    case 'GET_ALL_TASKS':
      return {
        tasks: payload,
      };

    default:
      return state;
  }
};
