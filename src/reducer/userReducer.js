export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_USER':
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      return {
        user: payload.user,
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
