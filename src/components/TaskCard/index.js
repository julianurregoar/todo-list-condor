import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded my-1">
      <p className="text-xl p-2">{task.title}</p>
    </div>
  );
};

export default TaskCard;
