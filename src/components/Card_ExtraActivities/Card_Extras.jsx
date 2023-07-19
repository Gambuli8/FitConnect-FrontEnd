/* eslint-disable react/prop-types */
export default function Card_Extras({ name, schedule, type_activity, rating, image, price}) {
  return (
    <div className="w-[340px] h-[450px] border-[4px] border-[#ffd277] shadow-black shadow-xl bg-black  flex flex-col rounded-xl justify-center items-center m-4 bg-auto bg-no-repeat bg-center bg-origin-padding hover:translate-y-[-20px] duration-300">
      <div className="flex flex-col text-justify p-1 items-center text-white"> 
        <img 
          src={`${image}`}
          alt="imagen de la actividad"
          className="mx-auto w-50 h-40 object-cover"
        />
        <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[25px] my-2">{name}</h1>
        <h3 className="font-parrafo my-1 text-[20px]">Shedule: {schedule}</h3>
        <h3 className="font-parrafo my-1 text-[20px]">Type Activitie: {type_activity}</h3>
        <h3 className="font-parrafo my-1 text-[20px]">Rating: {rating}</h3>
        <h3 className="font-parrafo my-1 text-[20px]">Price: ${price}</h3>
        <p className="font-Inconsolata my-2 text-[17px] font-medium capitalize text-gray-400"></p>
      </div>
    </div>
  )
}
