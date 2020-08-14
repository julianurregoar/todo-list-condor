import React, { createContext } from 'react';
import { UserProvider } from './UserContext';
import { TaskProvider } from './TaskContext';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider>
      <TaskProvider>
        <UserProvider>{props.children}</UserProvider>
      </TaskProvider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
