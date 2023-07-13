import { Link } from "react-router-dom";
import logo from "../../images/fitconnectimg.png";
const NavBar = () => {
  return (
    <nav className="p-05 bg-black shadow md:flex md:items-center md:justify-between">
      <div>
        <span>
          <Link to="/">
            <img className="h-24 inline mx-10" src={logo}></img>
          </Link>
        </span>
      </div>

      <ul className="md:flex md:items-center">
        <li className="mx-4">
          <Link
            to="/"
            className="text-white text-xl hover:text-yellow-500 duration-500 "
          >
            Inicio
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to={"/contacto"}
            className="text-white text-xl hover:text-yellow-500 duration-500 "
          >
            Contacto
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to={'#Membresia'}
            className="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Membresias
          </Link>
        </li>
        <li className="mx-4">
          <Link
            to={"/actividades"}
            className="text-white text-xl hover:text-yellow-500 duration-500"
          >
            Actividades
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
