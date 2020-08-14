import React, { createContext, useReducer } from 'react';
import { server } from '../../utils/axios';
import { taskReducer } from '../../reducer/taskReducer';

const TaskContext = createContext({
  tasks: [],
  getAllTasks: () => {},
  addTask: (body) => {},
  deleteTask: (taskId) => {},
  editTask: (taskId, body) => {},
  assignUser: (taskId, body) => {},
  unassignUser: (taskId, body) => {},
});

const TaskProvider = (props) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
  });

  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };

  const getAllTasks = async () => {
    try {
      const res = await server.get('/api/task', config);
      dispatch({ type: 'GET_ALL_TASKS', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (body) => {
    try {
      const res = await server.post('/api/task', body, config);
      dispatch({ type: 'CREATE_TASK', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const res = await server.delete(`/api/task/${taskId}`, config);
      dispatch({ type: 'DELETE_TASK', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = async (taskId, body) => {
    try {
      const res = await server.patch(`/api/task/${taskId}`, body, config);
      dispatch({ type: 'EDIT_TASK', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const assignUser = async (taskId, body) => {
    try {
      const res = await server.patch(
        `/api/task/assign/${taskId}`,
        body,
        config
      );
      dispatch({ type: 'ASSIGNED_USER', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const unassignUser = async (taskId, body) => {
    try {
      const res = await server.patch(
        `/api/task/unassign/${taskId}`,
        body,
        config
      );
      dispatch({ type: 'UNASSIGNED_USER', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        getAllTasks,
        addTask,
        deleteTask,
        editTask,
        assignUser,
        unassignUser,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
