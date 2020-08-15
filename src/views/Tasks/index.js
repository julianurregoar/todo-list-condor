import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
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
  const [addTaskOpen, setAddTaskOpen] = useState(false);

  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line
  }, []);

  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: {
      title: '',
    },
    // validationSchema: signFomrSchema,
    onSubmit: (values) => {
      searchTaskByTitle(values);
    },
  });

  const handleClear = () => {
    clearSearch();
    resetForm();
  };

  return (
    <div className="min-h-screen bg-teal-500 px-4 lg:px-40">
      <h1 className="font-bold text-white pt-20 text-6xl border-b-2 mb-3">
        Tasks
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Search by title..."
          value={values.title}
          onChange={handleChange}
        />
        <button type="submit">search</button>
        <button onClick={handleClear}>clear</button>
      </form>
      {!addTaskOpen ? (
        <button
          onClick={() => setAddTaskOpen(true)}
          className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-2"
        >
          Add task
        </button>
      ) : (
        <TaskInput
          title={''}
          taskId={null}
          action={addTask}
          setIsEdit={setAddTaskOpen}
        />
      )}
      <div className="mt-6">
        {searchedTasks.length === 0
          ? tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                allUsers={allUsers}
                handleDelete={deleteTask}
              />
            ))
          : searchedTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                allUsers={allUsers}
                handleDelete={deleteTask}
              />
            ))}
      </div>
    </div>
  );
};

export default Tasks;
