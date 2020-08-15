import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faPlusCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { TaskContext } from '../../context/TaskContext';
import { UserContext } from '../../context/UserContext';
import { TaskCard, TaskInput } from '../../components';

const Tasks = () => {
  const {
    tasks,
    searchedTasks,
    getAllTasks,
    addTask,
    deleteTask,
    searchTaskByTitle,
    clearSearch,
  } = useContext(TaskContext);
  const { allUsers } = useContext(UserContext);
  const [openInput, setOpenInput] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen bg-teal-500 px-4 lg:px-40">
      <h1 className="font-bold text-white pt-20 text-6xl border-b-2 mb-3">
        Tasks
      </h1>

      {!openInput ? (
        <div>
          <button
            onClick={() => {
              setOpenInput(true);
              setIsSearch(false);
            }}
            className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-2 mr-3"
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="text-lg text-white mr-2"
            />
            Add task
          </button>
          <button
            onClick={() => {
              setOpenInput(true);
              setIsSearch(true);
            }}
            className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-2"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="text-lg text-white mr-2"
            />
            Search
          </button>
        </div>
      ) : (
        <TaskInput
          title={''}
          taskId={null}
          action={isSearch ? searchTaskByTitle : addTask}
          isEdit={null}
          setIsEdit={setOpenInput}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
          clearSearch={clearSearch}
        />
      )}

      <div className="mt-6">
        {!isSearch ? (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              allUsers={allUsers}
              handleDelete={deleteTask}
            />
          ))
        ) : searchedTasks.length === 0 ? (
          <div className="text-center">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-white mb-1 text-6xl"
            />
            <p className="text-xl text-white font-bold">No results</p>
          </div>
        ) : (
          searchedTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              allUsers={allUsers}
              handleDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
