const getUsernameFromUserId = (id, allUsers) => {
  const user = allUsers.find((user) => user._id === id);
  return user.username;
};

export default getUsernameFromUserId;
