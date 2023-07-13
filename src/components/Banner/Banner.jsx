import React from "react";
import { Link } from "react-router-dom";
import bannerimage from "../../images/gym_img_2.jpg";

const Banner = () => {
  return (
    <section className="bg-gray-950 h-[500px]">
      <div className="mx-auto h-full">
        <div className="flex items-center h-full pl- -space-x-48 lg:-space-x-10">
          {/* text */}
          <div className="text-center flex-1 z-10">
            <h1 className="text-7xl text-white mb-8 z-10">
              Saca con nosotros lo mejor de tu dia!
            </h1>

            <p className="text-white text-lg mb-8">
              Proveemos planes serios de fitness pero en un ambiente agradable
            </p>

            <button className="bg-yellow-500 text-black font-medium py-2 px-6 rounded-full">
              <Link to="/membresias">Asociate ahora!</Link>
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

export default Banner;
