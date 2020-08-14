import React, { createContext, useReducer } from 'react';
import { server } from '../../utils/axios';
import { userReducer } from '../../reducer/userReducer';

const UserContext = createContext({
  user: null,
  allUsers: null,
  signup: (body) => {},
  login: (body) => {},
  logout: () => {},
  getCurrentUser: () => {},
  getAllUsers: () => {},
});

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    allUsers: null,
  });

  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };

  const getCurrentUser = async () => {
    try {
      const res = await server.get('/api/user', config);
      dispatch({ type: 'GET_CURRENT_USER', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const res = await server.get('/api/user/all', config);
      dispatch({ type: 'GET_ALL_USERS', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (body) => {
    try {
      const res = await server.post('/api/user/signup', body, config);
      dispatch({ type: 'CREATE_USER', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (body) => {
    try {
      const res = await server.post('/api/user/login', body, config);
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
        allUsers: state.allUsers,
        signup,
        login,
        logout,
        getCurrentUser,
        getAllUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
