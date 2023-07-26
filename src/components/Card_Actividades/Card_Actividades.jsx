/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

function Card_Actividades({
  name,
  schedule,
  type_activity,
  rating,
  image,
  memberships,
}) {
  const allMemberships = useSelector((state) => state.allMemberships);

  return (
    <div className="w-[340px] h-[450px] border-[4px] border-[#ffd277] shadow-black shadow-xl bg-black  flex flex-col rounded-xl justify-center items-center m-8 bg-auto bg-no-repeat bg-center bg-origin-padding hover:translate-y-[-20px] duration-300">
      <div className="flex flex-col text-justify p-2 items-center text-white">
        <img
          src={`${image}`}
          alt="imagen de la actividad"
          className="mx-auto w-50 h-40 object-cover"
        />
        <h1 className="font-titulo text-center text-[#ffd277]  uppercase text-[25px] my-2">
          {name}
        </h1>
        <h3 className="font-parrafo my-2 text-[20px]">Horario: {schedule}</h3>
        <h3 className="font-parrafo my-2 text-[20px]">
          Tipo de actividad: {type_activity}
        </h3>
        <h3 className="font-parrafo my-2 text-[20px]">Rating: {rating}</h3>
        <h3 className="font-parrafo my-2 text-[14px]">Memberships:</h3>
        <div className="grid grid-cols-3 text-[#fff990]">
          {memberships?.map((m, index) => {
            const memb = allMemberships?.filter(
              (all) => all.idMembership == m.membershipId
            );
            return (
              <p className="m-1" key={index}>
                {memb[0]?.levelMembership}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Card_Actividades;
