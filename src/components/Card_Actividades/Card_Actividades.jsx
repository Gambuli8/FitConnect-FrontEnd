/* eslint-disable react/prop-types */

function Card_Actividades({ name, schedule, type_activity, rating, image }) {
  // const images = [
  //   {}
  // ];
  return (
    <div className="w-[340px] h-[450px] border-[4px] border-[#ffd277] shadow-black shadow-xl bg-black  flex flex-col rounded-xl justify-center items-center m-4 bg-auto bg-no-repeat bg-center bg-origin-padding hover:translate-y-[-20px] duration-300">
      <div className="flex flex-col text-justify p-2 items-center text-white">
        <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[25px] my-2">
          {name}
        </h1>
        <h3 className="font-parrafo my-2 text-[20px]">Horario: {schedule}</h3>
        <h3 className="font-parrafo my-2 text-[20px]">
          Tipo de actividad: {type_activity}
        </h3>
        <h3 className="font-parrafo my-2 text-[20px]">Rating: {rating}</h3>
        <img src={image} alt="" />
        <p className="font-Inconsolata my-2 text-[17px] font-medium capitalize text-gray-400"></p>
      </div>
    </div>
  );
}
export default Card_Actividades;
