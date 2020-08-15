import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';

const TaskInput = ({
  title,
  taskId,
  action,
  isEdit,
  setIsEdit,
  isSearch,
  setIsSearch,
  clearSearch,
}) => {
  const inputRef = useRef();

  const { handleSubmit, handleChange, values, resetForm } = useFormik({
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
      if (isEdit) {
        setIsEdit(false);
      }
      if (!isSearch) {
        resetForm();
      }
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClearSearch = () => {
    clearSearch();
    setIsSearch(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            ref={inputRef}
            type="text"
            id="title"
            onChange={handleChange}
            value={values.title}
            className="w-full bg-white focus:outline-none focus:shadow-outline rounded-lg py-1 px-2 mt-2 appearance-none leading-normal text-xl"
          />
        </div>
        <button
          type="submit"
          disabled={values.title === ''}
          className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded"
        >
          {isEdit ? 'Save' : isSearch ? 'Search' : 'Add task'}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsEdit(false);
            isSearch && handleClearSearch();
          }}
          className="text-lg text-white py-1 px-2 ml-2 mb-2 hover:text-orange-500"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
