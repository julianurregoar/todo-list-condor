export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_USER':
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        user: payload.user,
      };
    case 'GET_CURRENT_USER':
      return {
        ...state,
        user: payload,
      };
    case 'GET_ALL_USERS':
      return {
        ...state,
        allUsers: payload,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        user: null,
      };
    default:
      return state;
  }
};
