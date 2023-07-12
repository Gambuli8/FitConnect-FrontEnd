import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getUser,
  getMembership,
} from "../../redux/Actions/Actions";

function Home() {
  const dispatch = useDispatch();
  // const allUsers = useSelector((state) => state.allUsers);
  // const allMemberships = useSelector((state) => state.allMemberships);
  // const allActivities = useSelector((state) => state.allActivities);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getMembership());
  }, [dispatch]);

  return <div className="flex flex-col">
    <h1>Home</h1>
    <p>aca faltaria la seccion de 2 o 3 actividades y la seccion de membresias</p>
  </div>;
}

export default Home;
