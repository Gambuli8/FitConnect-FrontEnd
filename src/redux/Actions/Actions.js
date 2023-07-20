import Swal from "sweetalert2";
import {
  GET_USERS,
  GET_ACTIVITIES,
  GET_MEMBERSHIP,
  POST_USERS,
  POST_ACTIVITIES,
  FILTER_ACTIVITIES,
  FILTER_MEMBERSHIP,
  POST_USERSBACK,
  USER_FIREBASE,
  GET_USERID,
  PUT_USER,
  PUT_ACTIVITY,
  POST_USERFORM,
} from "../Actions/ActionsType";
import axios from "axios";

export const getUser = () => {
  return async (dispatch) => {
    const response = await axios("http://localhost:3001/user");
    return dispatch({ type: GET_USERS, payload: response.data });
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/activitie");
      console.log(response);
      dispatch({ type: GET_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMembership = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/membership");
      dispatch({ type: GET_MEMBERSHIP, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/user", payload);
      // Verificar si el usuario fue creado exitosamente
      if (response.status === 201) {
        alert("El usuario ha sido creado exitosamente");
        dispatch({ type: POST_USERS, payload: response.data });
      } else {
        throw new Error("Hubo un problema al crear el usuario");
      }
    } catch (error) {
      console.error("Error al crear el usuario:", error);
    }
  };
};

export const postActivity = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/activitie",
        payload
      );
      console.log(response.status);
      if (response.status === 200) {
        alert("La actividad ha sido creada exitosamente");
        dispatch({ type: POST_ACTIVITIES, payload: response.data });
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
        `http://localhost:3001/activitie?filter=${filter}&&order=${order}`
      );
      dispatch({ type: FILTER_ACTIVITIES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterMembership = (filter) => {
  return async function (dispatch) {
    try {
      const response = await axios(
        `http://localhost:3001/membership?filter=${filter}`
      );
      dispatch({ type: FILTER_MEMBERSHIP, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUserBack = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/user", payload);
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
      console.log(error);
    }
  };
};

export const getUserId = (id) => {
  return async (dispatch) => {
    const response = await axios(`http://localhost:3001/user/${id}`);
    return dispatch({ type: GET_USERID, payload: response.data });
  };
};

export const putUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put("http://localhost:3001/user", payload);
      // Verificar si el usuario fue actualizado exitosamente
      Swal.fire({
        icon: "success",
        title: "Your membership has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: PUT_USER, payload: response.data });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema al actualizar la membresia!",
        footer: `<p>Es posible que haya problemas con tu pago</p>`,
      });
    }
  };
};

export const putActivity = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/activitie",
        payload
      );
      Swal.fire({
        icon: "success",
        title: "The Activity has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch({ type: PUT_ACTIVITY, payload: response.data });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un problema al actualizar la actividad",
      });
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
