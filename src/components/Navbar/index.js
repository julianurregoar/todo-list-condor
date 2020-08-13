import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="mx-auto h-auto w-full flex px-4 pt-4 absolute">
      <div className="w-1/2 flex">
        <Link to="/">
          <h1 className="font-bold text-3xl text-white mx-2">
            Yah
            <span className="text-orange-500">.</span>
          </h1>
        </Link>
      </div>
      <div className="w-1/2 flex justify-end mt-2">
        <Link to="/login">
          <p className="text-lg py-1 px-2 text-white hover:text-orange-500">
            Login
          </p>
        </Link>
        <Link to="/signup">
          <p className="font-bold text-lg py-1 px-2 text-white hover:text-orange-500">
            Signup
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
