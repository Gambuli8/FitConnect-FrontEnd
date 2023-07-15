import Swal from 'sweetalert2'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getMembership, postUserBack } from "../../redux/Actions/Actions";

const Form = () => {
  const membershipId = 3

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMembership());
  }, [dispatch]);
  const allMemberships = useSelector((state) => state.allMemberships);
  console.log(allMemberships);

  
  const { register, formState:{errors}, handleSubmit } = useForm();
  const [data, setData] = useState("");

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
        const { uid, email, reloadUserInfo } = user; // correo  con el hash
        const password = reloadUserInfo.passwordHash
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



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Ingrese su informacion personal</h1>
      <div>
      <label>Email de usuario:</label>
      <p>{user.email}</p>
      </div>
      <div>
        <input type="text" placeholder="name..."{...register("name",{
          required: true,
          maxLength: 12
        })} />
        {errors.name?.type==="required" && <samp>Este campo es requerido!</samp>}
        {errors.name?.type==="maxLength" && <samp>Name menor a 12!</samp>}
      </div>
      <div>
        <input type="text" placeholder="surname..."{...register("surname",{
          required: true,
          maxLength: 12
        })} />
        {errors.surname?.type==="required" && <samp>Este campo es requerido!</samp>}
        {errors.surname?.type==="maxLength" && <samp>Surname menor a 12!</samp>}
      </div>
      <input type="submit" />
      <p>{data}</p>
    </form>
  );
};

export default Form;