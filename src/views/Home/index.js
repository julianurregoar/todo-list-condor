import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex h-screen bg-teal-500 justify-center items-center px-4">
      <div className="text-center">
        <h1
          className="font-bold text-white leading-none mb-6"
          style={{ fontSize: '6rem' }}
        >
          To-Do Yah
          <span className="text-orange-500">.</span>
        </h1>
        <p className="text-2xl font-bold text-white mb-4">
          The best To-Do app you can find. Period.
        </p>
        <Link to="/signup">
          <button className="font-bold text-lg bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mt-5">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
