import React, { useContext, useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { TaskContext } from '../../context/TaskContext';

const Tasks = () => {
  const { tasks, getAllTasks, addTask } = useContext(TaskContext);
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const inputRef = useRef();

  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: {
      title: '',
    },
    // validationSchema: signFomrSchema,
    onSubmit: (values) => {
      values.userId = '5f35c887ff0384183f8d8011';
      addTask(values);
      resetForm();
    },
  });

  useEffect(() => {
    if (addTaskOpen) {
      inputRef.current.focus();
    }
  }, [addTaskOpen]);

  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-screen bg-teal-500 px-4 lg:px-40">
      <h1 className="font-bold text-white pt-20 text-6xl border-b-2 mb-3">
        Tasks
      </h1>
      {!addTaskOpen ? (
        <button
          onClick={() => setAddTaskOpen(true)}
          className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-2"
        >
          Add task
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              ref={inputRef}
              type="text"
              id="title"
              onChange={handleChange}
              value={values.title}
              className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 appearance-none leading-normal"
            />
          </div>

          <button
            type="submit"
            className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-2"
          >
            Add task
          </button>
          <button
            type="button"
            onClick={() => {
              setAddTaskOpen(false);
              resetForm();
            }}
            className="text-lg text-white py-1 px-2 mt-2 ml-2 hover:text-orange-500"
          >
            Cancel
          </button>
        </form>
      )}
      <div className="mt-6">
        {tasks.map((task) => (
          <p key={task._id}>{task.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
