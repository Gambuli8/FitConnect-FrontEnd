import Swal from "sweetalert2";
import {
  GET_USERS,
  GET_ACTIVITIES,
  GET_EXTRA_ACTIVITIES,
  GET_MEMBERSHIP,
  GET_USERID,
  POST_USERS,
  POST_ACTIVITIES,
  POST_USERSBACK,
  POST_EXTRA_ACTIVITIES,
  FILTER_ACTIVITIES,
  FILTER_MEMBERSHIP,
  USER_FIREBASE,
  PUT_USER,
  PUT_ACTIVITY,
  POST_USERFORM,
  GET_PAYMENT_ID_USER,
  DELETE_USER,
} from "../Actions/ActionsType";
import axios from "axios";

export const getUser = () => {
  return async (dispatch) => {
    const response = await axios("https://fitconnect-r5gr.onrender.com/user");
    return dispatch({ type: GET_USERS, payload: response.data });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    try {
      const response = await axios(
        "https://fitconnect-r5gr.onrender.com/activitie"
      );
      console.log(response);
      dispatch({ type: GET_ACTIVITIES, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getExtraActivities = () => {
  return async function (dispatch) {
    try {
      const response = await axios(
        "https://fitconnect-r5gr.onrender.com/extra"
      );
      dispatch({ type: GET_EXTRA_ACTIVITIES, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getMembership = () => {
  return async function (dispatch) {
    try {
      const response = await axios(
        "https://fitconnect-r5gr.onrender.com/membership"
      );
      dispatch({ type: GET_MEMBERSHIP, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const postUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://fitconnect-r5gr.onrender.com/user",
        payload
      );
      // Verificar si el usuario fue creado exitosamente
      if (response.status === 201) {
        alert("El usuario ha sido creado exitosamente");
        dispatch({ type: POST_USERS, payload: response.data });
      } else {
        throw new Error("Hubo un problema al crear el usuario");
      }
    } catch (error) {
      alert("Error al crear el usuario:", error);
    }
  };
};

export const postActivity = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://fitconnect-r5gr.onrender.com/activitie",
        payload
      );
      if (response.status === 200) {
        alert("La actividad ha sido creada exitosamente");
        dispatch({ type: POST_ACTIVITIES, payload: response.data });
      } else {
        throw new Error("Hubo un problema al crear la actividad");
      }
    } catch (error) {
      alert("Error al crear la actividad:", error);
    }
  };
};

export const postExtraActivity = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://fitconnect-r5gr.onrender.com/extra",
        payload
      );
      console.log(response.data);
      if (response.status === 200) {
        alert("La actividad ha sido creada exitosamente");
        dispatch({ type: POST_EXTRA_ACTIVITIES, payload: response.data });
      } else {
        throw new Error("Hubo un problema al crear la actividad");
      }
    } catch (error) {
      console.error("Error al crear la actividad:", error);
    }
  };
};
export const filterActivities = (filters) => {
  const filter = filters.filter;
  const order = filters.order;
  return async function (dispatch) {
    try {
      const response = await axios(
        `https://fitconnect-r5gr.onrender.com/activitie?filter=${filter}&&order=${order}`
      );
      dispatch({ type: FILTER_ACTIVITIES, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const filterMembership = (filter) => {
  return async function (dispatch) {
    try {
      const response = await axios(
        `https://fitconnect-r5gr.onrender.com/membership?filter=${filter}`
      );
      dispatch({ type: FILTER_MEMBERSHIP, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const postUserBack = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://fitconnect-r5gr.onrender.com/user",
        payload
      );
      // Verificar si el usuario fue creado exitosamente
      Swal.fire({
        icon: "success",
        title: "Your user has been created",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: POST_USERSBACK, payload: response.data });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema al crear el usuario!",
        footer: `<p>Es posible que ya tengas una cuenta con el email ${payload.email}</p>`,
      });
    }
  };
};

export const userFirebase = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_FIREBASE, payload: user });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getUserId = (id) => {
  return async (dispatch) => {
    const response = await axios(
      `https://fitconnect-r5gr.onrender.com/user/${id}`
    );
    return dispatch({ type: GET_USERID, payload: response.data });
  };
};

export const putUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        "https://fitconnect-r5gr.onrender.com/user",
        payload
      );
      // Verificar si el usuario fue actualizado exitosamente
      Swal.fire({
        icon: "success",
        title: "Has been modified!",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: PUT_USER, payload: response.data });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "A problem ocurred!",
        footer: `Detalles del error ${error.message}`,
      });
    }
  };
};

export const putActivity = (payload, id) => {
  return async (dispatch) => {
    try {
      console.log("Request payload:", payload); // Add this line to log the request payload
      console.log("Activity ID:", id);
      const response = await axios.put(
        `https://fitconnect-r5gr.onrender.com/activitie/put/${id}`,
        payload
      );

      console.log("Response:", response.data);
      Swal.fire({
        icon: "success",
        title: "The Activity has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response.data);
      dispatch({ type: PUT_ACTIVITY, payload: response.data });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema al actualizar la actividad",
        footer: `Error details: ${error.message}`,
      });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://fitconnect-r5gr.onrender.com/${userId}`);
      dispatch({ type: DELETE_USER, payload: userId });
      Swal.fire({
        icon: "success",
        title: "El usuario ha sido eliminado exitosamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al eliminar el usuario",
        footer: `Detalles del error: ${error.message}`,
      });
      console.log(error);
    }
  };
};

export const postUserForm = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: POST_USERFORM, payload: payload });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPaymentIdUser = (idUser) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://fitconnect-r5gr.onrender.com/paystore/last/${idUser}`
    );
    return dispatch({ type: GET_PAYMENT_ID_USER, payload: response.data });
  };
};
