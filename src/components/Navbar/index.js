import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="mx-auto h-auto w-full flex px-4 pt-4 absolute">
      <div className="w-1/2 flex">
        <Link to={user ? '/tasks' : '/'}>
          <h1 className="font-bold text-3xl text-white">
            Yah
            <span className="text-orange-500">.</span>
          </h1>
        </Link>
      </div>
      <div className="w-1/2 flex justify-end mt-2">
        {!user ? (
          <Fragment>
            <Link to="/login">
              <p className="text-lg py-1 px-4 text-white hover:text-orange-500">
                Login
              </p>
            </Link>
            <Link to="/signup">
              <p className="font-bold text-lg py-1 px-4 text-white hover:text-orange-500">
                Signup
              </p>
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <Link to="/tasks">
              <p className="text-lg py-1 px-4 text-white hover:text-orange-500">
                Tasks
              </p>
            </Link>
            <Link to="/team">
              <p className="text-lg py-1 px-4 text-white hover:text-orange-500">
                Team
              </p>
            </Link>
            <button
              onClick={logout}
              className="font-bold text-lg py-1 px-4 text-white hover:text-orange-500 border-none"
            >
              Logout
            </button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Navbar;
