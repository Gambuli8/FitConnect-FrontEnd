import { Link, Outlet } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { Suspense, useEffect, useState } from "react";
import Carrito from "../Carrito/Carrito";

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
            <img className="h-24 inline mx-10" src="https://res.cloudinary.com/djqwbu0my/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689956873/logoFitConnect-removebg-preview_g34p2p.png"  />
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
        <li className='mx-4'>
        <Carrito />
        </li>
      </ul>
    <Suspense fallback={<h1>Loading...</h1>} >
      <Outlet />
    </Suspense>
    </nav>
  );
};

export default NavBar;
