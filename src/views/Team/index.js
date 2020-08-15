import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UserCard } from '../../components';
import { UserContext } from '../../context/UserContext';

const Team = () => {
  const { allUsers, getAllUsers } = useContext(UserContext);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect push to="/" />;
  }

  return (
    <div className="min-h-screen bg-teal-500 px-4 lg:px-40">
      <h1 className="font-bold text-white pt-20 text-6xl border-b-2 mb-3">
        Team
      </h1>
      <div className="mt-6">
        {allUsers &&
          allUsers.map((user) => <UserCard user={user} key={user._id} />)}
      </div>
    </div>
  );
};

export default Team;
