import { Link } from "react-router-dom";
import logo from "../../images/fitconnectimg.png";
import { UserAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { isLoggedIn, logout } = UserAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setIsAuthenticated(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <nav className="p-05 bg-black shadow md:flex md:items-center md:justify-between">
      <div>
        <span>
          <Link to="/">
            <img className="h-24 inline mx-10" src={logo} alt="Logo" />
          </Link>
        </span>
      </div>

      <ul className="md:flex md:items-center mr-5">
        <li className="mx-4">
          <Link
            to="/"
            className="text-white text-xl hover:text-yellow-500 duration-500 "
          >
            Inicio
          </Link>
        </li>
        <li className="mx-4">
         <a href="#contacto" className="text-white text-xl hover:text-yellow-500 duration-500">
          Contacto
         </a>
        </li>
        <li className="mx-4">
          <a
            href="#Membresia"
            className="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Membresias
          </a>
        </li>
        <li className="mx-4">
          <Link
            to={"/actividades"}
            className="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Actividades
          </Link>
        </li>
        {isAuthenticated ? (
          <li className="mx-4">
            <button
              className="text-white text-xl hover:text-yellow-500 duration-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="mx-4">
            <Link
              className="text-white text-xl hover:text-yellow-500 duration-500"
              to={"/signin"}
            >
              Sign in!
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
