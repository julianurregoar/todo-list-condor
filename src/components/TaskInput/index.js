import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';

const TaskInput = ({ title, taskId, action, setIsEdit }) => {
  const inputRef = useRef();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: title,
    },
    // validationSchema: signFomrSchema,
    onSubmit: (values) => {
      if (taskId) {
        action(taskId, values);
      } else {
        action(values);
      }
      setIsEdit(false);
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
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
        disabled={values.title === ''}
        className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-2"
      >
        Add task
      </button>
      <button
        type="button"
        onClick={() => setIsEdit(false)}
        className="text-lg text-white py-1 px-2 mt-2 ml-2 hover:text-orange-500"
      >
        Cancel
      </button>
    </form>
  );
};

export default TaskInput;
