import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  getActivities,
  getMembership,
} from "../../redux/Actions/Actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

function Home() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);
  const allMemberships = useSelector((state) => state.allMemberships);
  // const allActivities = useSelector((state) => state.allActivities);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getMembership());
    // dispatch(getActivities());
  }, [dispatch]);

  return <div>Home</div>;
}

export default Home;
