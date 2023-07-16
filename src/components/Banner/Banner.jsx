import { Link } from "react-router-dom";
import bannerimage from "../../images/gym_img_2.jpg";

const Banner = () => {
  return (
    <section className="bg-gray-950 h-[500px]">
      <div className="mx-auto h-full">
        <div className="flex items-center h-full pl- -space-x-48 lg:-space-x-10">
          {/* text */}
          <div className="text-center flex-1 z-10 px-12">
            <h1 className="text-4xl text-white mb-8 z-10">
              SACA CON <span className="text-yellow-500">NOSOTROS</span> LO{" "}
              <span className="text-yellow-500">MEJOR</span> DE TU DIA!
            </h1>

            <p className="text-white text-lg mb-8">
              Proveemos planes serios de fitness pero en un ambiente agradable,
              con total libertad para que puedas hacer acceder a todas las
              actividades!
            </p>

            <button className="bg-yellow-500 text-black font-medium py-2 px-10 rounded-full">
              <Link to="/membresias">¡Asóciate ahora!</Link>
            </button>
          </div>

          <div className="w-full h-full bg-cover bg-left bg-no-repeat flex-1">
            <img src={bannerimage} alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

//commit prueba Fede3

export default Banner;
