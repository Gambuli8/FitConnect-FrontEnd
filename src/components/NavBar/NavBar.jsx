import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import Carrito from "../Carrito/Carrito";
import { useSelector } from "react-redux";
import useCart from "../../Hooks/useCart";

const NavBar = () => {
  const { user, isLoggedIn, logout } = UserAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const userStatus = useSelector((state) => state.user);
  const navigate = useNavigate();
  const {cart} = useCart();

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    navigate("/");
    cart.splice(0, cart.length)
  };

  useEffect(() => {
    setIsAuthenticated(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <nav className="p-0 bg-black shadow md:flex md:items-center md:justify-between">
      <div>
        <span>
          <Link to="/">
            <img
              className="h-24 inline mx-0"
              src="https://res.cloudinary.com/djqwbu0my/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689956873/logoFitConnect-removebg-preview_g34p2p.png"
            />
          </Link>
        </span>
      </div>

      <ul className="md:flex w-[75%] md:items-center">
        {userStatus?.email === "administrador@gmail.com" ? (
          <li className="mx-2">
          <Link
            to="/admin"
            className="text-white text-xl hover:text-yellow-500 duration-500 "
            >
            Admin
          </Link>
        </li>
        ) : null
          }
        <li className="mx-2">
          <Link
            to="/"
            className="text-white text-xl hover:text-yellow-500 duration-500 "
          >
            Inicio
          </Link>
        </li>
        <li className="mx-3">
          <a
            href="#contacto"
            className="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Contacto
          </a>
        </li>
        <li className="mx-3">
          <a
            href="/#Membresia"
            className="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Membresias
          </a>
        </li>
        <li className="mx-3">
          <Link
            to={"/actividades"}
            className="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Actividades
          </Link>
        </li>
        {isAuthenticated ? (
          <div className='flex '>
              <li className="mx-3 mt-[18px]">
              <button
                className="text-white text-xl hover:text-yellow-500 duration-500"
                onClick={handleLogout}
              >
                Cerrar sesion
              </button>
            </li>
            {isLoggedIn && user ? (
              <div className='flex flex-col'>
                <p className="mx-3 text-white text-lg font-semibold mt-1">
                  {user.displayName ? `Hello, ${user.displayName}!` : "Hello!"}
                </p>
                <p className="mx-3 text-white font-semibold mt-1 text-lg">
                  {" "}
                  ✉️{user.email}
                </p>
              </div>
            ) : (
              <li className="mx-3">
                <Link
                  className="text-white text-xl hover:text-yellow-500 duration-500"
                  to={"/signin"}
                >
                  Iniciar sesion!
                </Link>
              </li>
            )}
          </div>
        ) : (
          <li className="mx-3">
            <Link
              className="text-white text-xl hover:text-yellow-500 duration-500"
              to={"/signin"}
            >
              Iniciar sesion!
            </Link>
          </li>
        )}

        <li className="mx-3">
          <Carrito />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
