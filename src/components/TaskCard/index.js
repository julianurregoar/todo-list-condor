import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskInput from '../TaskInput';

const TaskCard = ({ task, allUsers, handleDelete }) => {
  const { editTask, assignUser, unassignUser } = useContext(TaskContext);
  const [isEdit, setIsEdit] = useState(false);

  const handleStatus = (e, taskId) => {
    editTask(taskId, { status: e.target.value });
  };

  const handleAssign = (e, taskId) => {
    assignUser(taskId, { userId: e.target.value });
  };

  const handleUnassignUser = (taskId, userId) => {
    unassignUser(taskId, { userId });
  };

  const getUsernameFromUserId = (id, allUsers) => {
    const user = allUsers.find((user) => user._id === id);
    return user.username;
  };

  const isAssigned = (id) => {
    const result = task.assignedUsers.find((user) => user === id);
    if (result) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="bg-white rounded my-1">
      {!isEdit ? (
        <p className="text-xl p-2">{task.title}</p>
      ) : (
        <TaskInput
          title={task.title}
          taskId={task._id}
          action={editTask}
          setIsEdit={setIsEdit}
        />
      )}
      <p className="text-xl text-green-600">{task.status}</p>
      {task.assignedUsers.map((assignedUserId) => (
        <p
          onClick={() => handleUnassignUser(task._id, assignedUserId)}
          className="text-xl text-red-600"
          key={assignedUserId}
        >
          {allUsers && getUsernameFromUserId(assignedUserId, allUsers)}
        </p>
      ))}
      <button onClick={() => setIsEdit(!isEdit)}>edit</button>
      <button onClick={() => handleDelete(task._id)}>delete</button>
      <br />

      <form>
        <select
          name="status"
          id="status"
          defaultValue={task.status}
          onChange={(e) => handleStatus(e, task._id)}
        >
          <option value="open">open</option>
          <option value="in-progress">in-progress</option>
          <option value="completed">completed</option>
          <option value="archived">archived</option>
        </select>

        <br />

        <p>Assign to:</p>
        <select
          name="assignedUsers"
          value="choose"
          onChange={(e) => handleAssign(e, task._id)}
        >
          <option value="choose" disabled>
            Choose
          </option>
          {allUsers &&
            allUsers.map((user) => (
              <option
                key={user._id}
                value={user._id}
                disabled={isAssigned(user._id)}
              >
                {user.username}
              </option>
            ))}
        </select>
      </form>
    </div>
  );
};

export default TaskCard;
