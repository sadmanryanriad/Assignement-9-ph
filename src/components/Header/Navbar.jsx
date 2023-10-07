import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const menu = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold" : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/prices"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold" : ""
        }
      >
        Prices
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/cart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold " : ""
        }
      >
        Cart
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/registration"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold" : ""
        }
      >
        Registration
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/Login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active font-bold" : ""
        }
      >
        Login
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn text-sm btn-neutral hover:text-white normal-case md:text-xl"
        >
          Event Management
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm text-green-600 btn-ghost">
                  {user.displayName}
                </button>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="btn-warning hover:bg-blue-700 hover:text-white text-lg"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
