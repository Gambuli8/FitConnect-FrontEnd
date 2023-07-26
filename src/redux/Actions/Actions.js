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
  FILTER_EXTRA_ACTIVITIES,
  FILTER_EXTRA_ACTIVITIES_ORDER,
  SEARCH_ACTIVITIES,
  USER_FIREBASE,
  PUT_USER,
  PUT_ACTIVITY,
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
      dispatch({ type: GET_ACTIVITIES, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getExtraActivities = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/extra");
      dispatch({ type: GET_EXTRA_ACTIVITIES, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getMembership = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/membership");
      dispatch({ type: GET_MEMBERSHIP, payload: response.data });
    } catch (error) {
      alert(error.message);
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
      alert("Error al crear el usuario:", error);
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
      const response = await axios.post("http://localhost:3001/extra", payload);
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
        `http://localhost:3001/activitie?filter=${filter}&&order=${order}`
      );
      dispatch({ type: FILTER_ACTIVITIES, payload: response.data });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const filterActivitiesForCAtegori = (filters) => {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_EXTRA_ACTIVITIES_ORDER, payload: filters });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const FilterExtraAct = (order) => {
  return async function (dispatch) {
    try {
      dispatch({ type: FILTER_EXTRA_ACTIVITIES, payload: order });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const searchActivities = (name) => {
  return async function (dispatch) {
    try {
      dispatch({ type: SEARCH_ACTIVITIES, payload: name });
    } catch (error) {
      alert(error.message);
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
      alert(error.message);
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
      alert(error.message);
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
