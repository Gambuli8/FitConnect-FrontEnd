/* eslint-disable react/prop-types */
import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getUserId, postUserBack, putUser } from "../../redux/Actions/Actions";

const Form = (props) => {
  let membershipId = props.idMembership
  membershipId = Number(membershipId)
  const dispatch = useDispatch()


  const user = useSelector((state) => state.user);
  const { uid, email, reloadUserInfo } = user; // correo  con el hash
  const password = reloadUserInfo?.passwordHash

  useEffect(() => {
    dispatch(getUserId(uid));
  }, [dispatch, uid]);
  const userId = useSelector((state)=> state.userId)

  const { register, formState:{errors}, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);
  //comprobamos si el usuario ya tiene una membresia
  if(userId){
    //logica al apretar el boton del formulario
    const onSubmit = (formData) => {
      //alert de confirmacion
      Swal.fire({
        title: 'Estas seguro de acualizar tu membresia?',
        showDenyButton: true,
        confirmButtonText: 'si',
        denyButtonText: `no`,
        icon:`question`,
      }).then((result) => {
        if (result.isConfirmed) {
          //llenamos el objeto "user" con todos los datos
          const newData = {
            ...formData,
            uid,
            password,
            email,
            membershipId
          };
  
          setData(JSON.stringify(newData)); // Guardar datos    
          dispatch(putUser(newData))      
        } else if (result.isDenied) {
          Swal.fire('No se guardaron los cambios', '', 'error')
        }
      })
    };
  
  
  
    return  (
      <div className="flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-lg w-96">
          <h1 className="text-2xl mb-4">¡Actualiza tu Membresía!</h1>
          <h1 className="text-xl mb-4">Ingrese su información personal</h1>
          <div className="mb-4">
            <label>Email de usuario:</label>
            <p>{user.email}</p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="name..."
              {...register("name", {
                required: true,
                maxLength: 12
              })}
              className="border border-gray-300 rounded p-2 w-full"
            />
            {errors.name?.type === "required" && <samp>Este campo es requerido!</samp>}
            {errors.name?.type === "maxLength" && <samp>Name menor a 12!</samp>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="surname..."
              {...register("surname", {
                required: true,
                maxLength: 12
              })}
              className="border border-gray-300 rounded p-2 w-full"
            />
            {errors.surname?.type === "required" && <samp>Este campo es requerido!</samp>}
            {errors.surname?.type === "maxLength" && <samp>Surname menor a 12!</samp>}
          </div>
          <input
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          />
        </form>
      </div>
    );  
  
  
  //el usuario no tiene membresia, formulario de compra.
  }else{

    //logica al apretar el boton del formulario
    const onSubmit = (formData) => {
      //alert de confirmacion
      Swal.fire({
        title: 'Seguro de realiazar la compra?',
        showDenyButton: true,
        confirmButtonText: 'si',
        denyButtonText: `no`,
        icon:`question`,
      }).then((result) => {
        if (result.isConfirmed) {
          //llenamos el objeto "user" con todos los datos
          const newData = {
            ...formData,
            uid,
            password,
            email,
            membershipId
          };
  
          setData(JSON.stringify(newData)); // Guardar datos    
          dispatch(postUserBack(newData))      
        } else if (result.isDenied) {
          Swal.fire('No se guardaron los cambios', '', 'error')
        }
      })
    };
  
  
  
  return   (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-xl mb-4">Ingrese su información personal</h1>
        <div className="mb-4">
          <label>Email de usuario:</label>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="name..."
            {...register("name", {
              required: true,
              maxLength: 12
            })}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.name?.type === "required" && <samp>Este campo es requerido!</samp>}
          {errors.name?.type === "maxLength" && <samp>Name menor a 12!</samp>}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="surname..."
            {...register("surname", {
              required: true,
              maxLength: 12
            })}
            className="border border-gray-300 rounded p-2 w-full"
          />
          {errors.surname?.type === "required" && <samp>Este campo es requerido!</samp>}
          {errors.surname?.type === "maxLength" && <samp>Surname menor a 12!</samp>}
        </div>
        <input
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        />
      </form>
    </div>
  );

  }
};
  
export default Form;