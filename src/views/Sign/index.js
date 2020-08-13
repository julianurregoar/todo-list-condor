import React from 'react';

const Sign = ({ title }) => {
  return (
    <div className="flex h-screen bg-teal-500 justify-center items-center px-4">
      <div className="mx-auto max-w-sm border-white p-6 bg-white rounded shadow-xl">
        <h1 className="font-bold text-4xl text-gray-800">{title}</h1>
        <label htmlFor="username" className="text-gray-800">
          Username
          <input
            type="text"
            id="username"
            className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 appearance-none leading-normal mb-2"
          />
        </label>
        <label htmlFor="password" className="text-gray-800">
          Password
          <input
            type="password"
            id="password"
            className="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-1 px-2 appearance-none leading-normal"
          />
        </label>
        <button className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-1 px-2 rounded mt-4">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Sign;
