import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getUser,
  // getActivities,
  getMembership,
} from "../../redux/Actions/Actions";

function Home() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const allUsers = useSelector((state) => state.allUsers);
  // eslint-disable-next-line no-unused-vars
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
