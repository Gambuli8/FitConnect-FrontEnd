import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getUser,
  getMembership,
} from "../../redux/Actions/Actions";
import Banner from "../../components/Banner/Banner";
import Membresias from "../Membresias/Membresias";

function Home() {
  const dispatch = useDispatch();
  // const allUsers = useSelector((state) => state.allUsers);
  // const allMemberships = useSelector((state) => state.allMemberships);
  // const allActivities = useSelector((state) => state.allActivities);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getMembership());
  }, [dispatch]);

  return (
    <div className='flex flex-col m-0 p-0'>
      <Banner />
      <section id="Membresia">
      <Membresias />
      </section>
    </div>
  );
}

export default Home;
