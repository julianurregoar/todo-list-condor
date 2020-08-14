import React, { createContext, useReducer } from 'react';
import { server, config } from '../../utils/axios';
import { userReducer } from '../../reducer/userReducer';

const UserContext = createContext({
  user: null,
  signup: (body) => {},
  login: (body) => {},
  logout: () => {},
  getCurrentUser: () => {},
});

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
  });

  const getCurrentUser = async () => {
    try {
      const res = await server.get('/api/user/current', config);
      dispatch({ type: 'GET_CURRENT_USER', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (body) => {
    try {
      const res = await server.post('/api/user/signup', body);
      dispatch({ type: 'CREATE_USER', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (body) => {
    try {
      const res = await server.post('/api/user/login', body);
      dispatch({ type: 'LOGIN', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.href = '/';
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        signup,
        login,
        logout,
        getCurrentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
