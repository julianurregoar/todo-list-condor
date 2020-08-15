import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const UserCard = ({ user }) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const joinedDate = new Date(user.createdAt).toLocaleString('en-US', options);

  return (
    <div className="flex bg-teal-400 rounded shadow my-1 p-2 pt-0 items-center">
      <div className="w-10 mt-2 mr-6">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-5xl md:mr-2 text-orange-500 inline-block bg-white rounded-full"
        />
      </div>

      <div className="w-auto mt-1">
        <p className="text-3xl text-white -mb-2">{user.username}</p>
        <p className="text-md text-gray-700">joined @ {joinedDate}</p>
      </div>
    </div>
  );
};

export default UserCard;
