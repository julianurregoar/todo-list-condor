import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserCard = ({ user }) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const joinedDate = new Date(user.createdAt).toLocaleString('en-US', options);

  return (
    <div className="">
      <FontAwesomeIcon
        icon={faUser}
        className="text-2xl mr-3 md:text-4xl md:mr-6 text-orange-500 inline-block"
      />
      <p className="text-2xl mr-3 md:text-4xl md:mr-6 text-white inline-block">
        {user.username}
      </p>
      <p className="text-sm md:text-xl text-gray-800 inline-block">
        joined @ {joinedDate}
      </p>
    </div>
  );
};

export default UserCard;
