import axios from "axios";
import {
  GET_USERS,
  GET_ACTIVITIES,
  GET_MEMBERSHIP,
  POST_USERS,
} from "../Actions/ActionsType";

export const getUser = () => {
  return async (dispatch) => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return dispatch({ type: GET_USERS, payload: response.data });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    const response = await axios("https://jsonplaceholder.typicode.com/photos");
    console.log(response);
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
