import React, { useState, useEffect } from 'react';
import { UserCard } from '../../components';
import { server } from '../../utils/axios';

const Team = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    server.get('/api/user/all').then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-teal-500 px-4 lg:px-40">
      <h1 className="font-bold text-white pt-20 text-6xl border-b-2 mb-3">
        Team
      </h1>
      <div className="mt-6">
        {users && users.map((user) => <UserCard user={user} key={user._id} />)}
      </div>
    </div>
  );
};

export default Team;
