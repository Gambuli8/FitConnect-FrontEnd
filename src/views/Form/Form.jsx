/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getMembership, getUserId, postUserForm } from "../../redux/Actions/Actions";
import axios from 'axios';

const Form = (props) => {
  let membershipId = Number(props.idMembership)
  membershipId = Number(membershipId)
  const dispatch = useDispatch()


  const user = useSelector((state) => state.user);
  const { uid, email, reloadUserInfo } = user; // correo  con el hash
  const password = reloadUserInfo?.passwordHash

  useEffect(() => {
    dispatch(getUserId(uid));
    dispatch(getMembership());
  }, [dispatch, uid]);
  const userId = useSelector((state)=> state.userId)
  const allMemberships = useSelector((state)=> state.allMemberships)

  const { register, formState:{errors}, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data);
  //comprobamos si el usuario ya tiene una membresia
  if(userId){
    const onSubmit =  async (formData) => {
      //llenamos el objeto "user" con todos los datos
      const newData = {
        ...formData,
        uid,
        password,
        email,
        membershipId
      };

        setData(JSON.stringify(newData)); // Guardar datos    
        dispatch(postUserForm(newData))      
        const response =  await axios.get(`https://fitconnect-r5gr.onrender.com/paystore?idMembership=${membershipId}&uid=${userId.uid}&email=${newData.email}&name=${userId.name}&surname=${userId.surname}&password=${userId.password}&put=${true}`)
        window.location.href = response.data.url;
  };

  const membresiaActual = allMemberships?.find(a=>a.idMembership===userId?.membershipId)
return   (
  <div className="flex justify-center">
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-lg w-96">
      <h1 className="text-xl mb-4">¿Deseas actualizar tu subscripción?</h1>
      <div className="mb-4">
        <label>Usuario:<p>{user.email}</p></label>
      </div>
      <div className="mb-4">
        <label>Datos actuales</label>
        <p>Tu membresia:{membresiaActual?.levelMembership||undefined}</p>
        <p>Inicio: {userId?.entry_date}</p>
        <p>Vencimiento: {userId?.expire_date}</p>
      </div>
        <h3>Estado de tu membresia:</h3>
        {userId?.userStatus==true?<h2 className="text-xl font-bold text-green-600 mb-4">vigente ✓</h2>
        :<h2 className="text-xl font-bold text-red-500 mb-4">vencida ❌</h2>}
      <input
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        value="Ir a pagar"
      />
    </form>
  </div>
);

  
  //el usuario no tiene membresia, formulario de compra.
  }else{

    //logica al apretar el boton del formulario
    const onSubmit =  async (formData) => {
        //llenamos el objeto "user" con todos los datos
        const newData = {
          ...formData,
          uid,
          password,
          email,
          membershipId
        };
  
          setData(JSON.stringify(newData)); // Guardar datos    
          dispatch(postUserForm(newData))      
          const response =  await axios.get(`https://fitconnect-r5gr.onrender.com/paystore?idMembership=${membershipId}&uid=${newData.uid}&email=${newData.email}&name=${formData.name}&surname=${formData.surname}&password=${newData.password}&put=${false}`)
          window.location.href = response.data.url;
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