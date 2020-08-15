const isUserAssigned = (id, task) => {
  const result = task.assignedUsers.find((user) => user === id);
  if (result) {
    return true;
  } else {
    return false;
  }
};

export default isUserAssigned;
