/* eslint-disable no-case-declarations */
import {
  GET_ACTIVITIES,
  GET_EXTRA_ACTIVITIES,
  GET_MEMBERSHIP,
  GET_USERS,
  POST_ACTIVITIES,
  POST_USERS,
  FILTER_ACTIVITIES,
  FILTER_MEMBERSHIP,
  USER_FIREBASE,
  GET_USERID,
  PUT_USER,
  PUT_ACTIVITY,
  POST_USERFORM,
  GET_PAYMENT_ID_USER,
  POST_EXTRA_ACTIVITIES,
  DELETE_USER,
} from "../Actions/ActionsType";

let initialState = {
  allUsers: [],
  allActivities: [],
  allExtraActivities: [],
  allMemberships: [],
  user: {},
  userId: {},
  form: {},
  paymentIduser: {},
};

console.log(initialState?.filterExtraAct);

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, allUser: action.payload };
    case GET_EXTRA_ACTIVITIES:
      return {
        ...state,
        allExtraActivities: action.payload,
        filterExtraAct: action.payload,
      };
    case GET_ACTIVITIES:
      return { ...state, allActivities: action.payload };
    case GET_MEMBERSHIP:
      return { ...state, allMemberships: action.payload };
    case POST_USERS:
      return { ...state, allUsers: [...state.allUsers, action.payload] };
    case POST_ACTIVITIES:
      return {
        ...state,
        allActivities: [...state.allActivities, action.payload],
      };
    case POST_EXTRA_ACTIVITIES:
      return {
        ...state,
        allExtraActivities: [...state.allExtraActivities, action.payload],
      };
    case FILTER_ACTIVITIES:
      return { ...state, allActivities: action.payload };
    case FILTER_MEMBERSHIP:
      return { ...state, allMemberships: action.payload };
    case USER_FIREBASE:
      return { ...state, user: action.payload };
    case GET_USERID:
      return { ...state, userId: action.payload };
    case PUT_USER:
      return { ...state, allUsers: [...state.allUsers, action.payload] };
    case DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter((user) => user.id !== action.payload),
      };

    case PUT_ACTIVITY:
      return {
        ...state,
        allActivities: [...state.allActivities, action.payload],
      };
    case POST_USERFORM:
      return { ...state, form: action.payload };
    case GET_PAYMENT_ID_USER:
      return { ...state, paymentIduser: action.payload };
  }
  return state;
};

export default rootReducer;
