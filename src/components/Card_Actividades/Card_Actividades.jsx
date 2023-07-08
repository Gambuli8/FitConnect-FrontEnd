function Card_Actividades() {
  return (
    <div className="w-[340px] h-[450px] border-[4px] border-[#ffd277] shadow-black shadow-xl bg-black  flex flex-col rounded-xl justify-center items-center m-4 bg-auto bg-no-repeat bg-center bg-origin-padding hover:translate-y-[-20px] duration-300">
      <div className="flex flex-col text-justify p-2 items-center text-white">
        <img
          src="https://thumbs.dreamstime.com/b/meditaci%C3%B3n-de-yoga-y-mujer-tranquila-en-la-alfombra-para-el-ejercicio-respiratorio-bienestar-cuerpo-saludable-estudio-espiritual-277878330.jpg"
          alt="imagen de la actividad"
          className="rounded-full mx-auto w-32 h-32 object-cover"
        />
        <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[25px] my-2">
          nombre de actividad
        </h1>
        <h3 className="font-parrafo my-2 text-[20px]">horario de actividad</h3>
        <p className="font-Inconsolata my-2 text-[17px] font-medium capitalize text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          blanditiis minus ut necessitatibus quos sed laborum, dolore
          voluptatibus deleniti? Minus mollitia impedit ipsa voluptate
          voluptatem quae eos voluptatum omnis nihil.
        </p>
      </div>
    </div>
  );
}

export default Card_Actividades;
