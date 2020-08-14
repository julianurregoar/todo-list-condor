import React, { createContext, useReducer } from 'react';
import { server, config } from '../../utils/axios';
import { taskReducer } from '../../reducer/taskReducer';

const TaskContext = createContext({
  tasks: [],
  getAllTasks: () => {},
  addTask: (body) => {},
});

const TaskProvider = (props) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
  });

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

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        getAllTasks,
        addTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
