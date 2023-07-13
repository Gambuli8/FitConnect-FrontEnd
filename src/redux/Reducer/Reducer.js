import {
  GET_ACTIVITIES,
  GET_MEMBERSHIP,
  GET_USERS,
  POST_ACTIVITIES,
  POST_USERS,
  FILTER_ACTIVITIES
} from "../Actions/ActionsType";

let initialState = {
  allUsers: [],
  allActivities: [],
  allMemberships: [],
};

console.log(initialState.allActivities);

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, allUser: action.payload };
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
    case FILTER_ACTIVITIES:
      return { ...state, allActivities: action.payload };
  }
  return state;
};

export default rootReducer;
