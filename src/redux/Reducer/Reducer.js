import {
  GET_ACTIVITIES,
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
  GET_EXTRA_ACTIVITIES,
  POST_EXTRA_ACTIVITIES,
} from "../Actions/ActionsType";

let initialState = {
  allUsers: [],
  allActivities: [],
  allMemberships: [],
  allExtraActivities: [],
  user: {},
  userId: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, allUser: action.payload };
    case GET_EXTRA_ACTIVITIES:
      return { ...state, allExtraActivities: action.payload };
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
    case PUT_ACTIVITY:
      return {
        ...state,
        allActivities: [...state.allActivities, action.payload],
      };
  }
  return state;
};

export default rootReducer;
