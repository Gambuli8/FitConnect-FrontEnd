import axios from "axios";
import {
  GET_USERS,
  GET_ACTIVITIES,
  GET_MEMBERSHIP,
  POST_USERS,
  POST_ACTIVITIES,
} from "../Actions/ActionsType";

export const getUser = () => {
  return async (dispatch) => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    return dispatch({ type: GET_USERS, payload: response.data });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    const response = await axios("https://jsonplaceholder.typicode.com/photos");
    return dispatch({ type: GET_ACTIVITIES, payload: response.data });
  };
};

export const getMembership = () => {
  return async (dispatch) => {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/comments"
    );
    return dispatch({ type: GET_MEMBERSHIP, payload: response.data });
  };
};

export const postUser = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
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
      console.error("Error al crear el usuario:", error);
    }
  };
};

export const postActivity = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        payload
      );
      if (response.status === 201) {
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
