import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/fitconnectimg.png";
const NavBar = () => {
  return (
    <nav class="p-1 bg-black shadow md:flex md:items-center md:justify-between">
      <div>
        <span>
          <img class="h-20 inline" src={logo}></img>
        </span>
      </div>

      <ul class="md:flex md:items-center">
        <li class="mx-4">
          <Link
            to="/"
            class="text-white text-xl hover:text-yellow-500 duration-500 "
          >
            Inicio
          </Link>
        </li>
        <li class="mx-4">
          <Link
            to={"/contacto"}
            class="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Contacto
          </Link>
        </li>
        <li class="mx-4">
          <Link
            to={"/membresias"}
            class="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Membresias
          </Link>
        </li>
        <li class="mx-4">
          <Link
            to={"/actividades"}
            class="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Actividades
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
