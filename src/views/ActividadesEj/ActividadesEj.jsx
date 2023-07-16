/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getActivities } from "../../redux/Actions/Actions";
import logo from "../../assets/Fotos de Actividades y Extra Actividades/Actividades/Crossfit.jpg";

const ActividadesEj = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const allActivities = useSelector((state) => state.allActivities);

  return (
    <div className="bg-gray-950 block pl-16">
      <div className="flex text-center flex-col items-center my-3">
        <h1 className="text-4xl font-lg text-white flex-1 z-10">
          NUESTRAS <span className="text-yellow-500">ACTIVIDADES</span>{" "}
          EXCLUSIVAS
        </h1>
        <p className="py-2 text-xl font-xl text-white">
          Combinamos actividades para trabajar todo tu cuerpo.
        </p>
        <button className="bg-yellow-500 text-black font-medium py-2 px-6 rounded-full w-[200px] my-10">
          <a href="#Membresia">¡Asóciate ahora!</a>
        </button>
      </div>
      <div className="text-white grid grid-cols-2 gap-10 w-3/4 mx-auto">
        <div className="bg-gray-950 rounded-lg p-4">
          <img
            className="h-64 w-full object-cover rounded-lg mb-4"
            src={allActivities?.image}
            alt="Logo del ejercicio"
          />
          <h3 className="text-3xl font-bold mb-2">GAP</h3>
          <p className="text-2xl">
            <span className="text-yellow-500">
              Tonifica y fortalece glúteos, abdominales y piernas
            </span>{" "}
            con nuestra clase de GAP. Adecuada para todos los niveles de
            condición física.
          </p>
        </div>
        <div className="bg-gray-950 rounded-lg p-4">
          <img
            className="h-64 w-full object-cover rounded-lg mb-4"
            src={logo}
            alt="Logo del ejercicio"
          />
          <h3 className="text-3xl font-bold mb-2">FUNCTIONAL</h3>
          <p className="text-2xl">
            <span className="text-yellow-500">
              Mejora tu fuerza, resistencia y movilidad
            </span>{" "}
            con nuestra clase de Functional Training. Ejercicios prácticos y
            funcionales para todos.
          </p>
        </div>
        <div className="bg-gray-950 rounded-lg p-4">
          <img
            className="h-64 w-full object-cover rounded-lg mb-4"
            src={logo}
            alt="Logo del ejercicio"
          />
          <h1 className="text-3xl font-bold mb-2">PILATES</h1>
          <p className="text-2xl">
            <span className="text-yellow-500">
              Mejora tu postura, flexibilidad y fuerza
            </span>{" "}
            muscular con nuestra clase de Pilates. Instructores expertos y
            ejercicios controlados.
          </p>
        </div>
        <div className="bg-gray-950 rounded-lg p-4">
          <img
            className="h-64 w-full object-cover rounded-lg mb-4"
            src={logo}
            alt="Logo del ejercicio"
          />
          <h3 className="text-3xl font-bold mb-2">YOGA</h3>
          <p className="text-2xl">
            <span className="text-yellow-500">
              Encuentra la armonía entre cuerpo y mente
            </span>{" "}
            con nuestra clase de Yoga. Reduce el estrés y mejora tu flexibilidad
            con posturas y meditación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActividadesEj;
