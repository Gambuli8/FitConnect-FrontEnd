import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser, getMembership, getActivities } from "../../redux/Actions/Actions";
import Banner from "../../components/Banner/Banner";
import Membresias from "../Membresias/Membresias";
import ActividadesEj from "../ActividadesEj/ActividadesEj";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getMembership());
    dispatch(getActivities())
  }, [dispatch]);

  return (
    <div className="flex flex-col m-0 p-0">
      <Banner />

      <ActividadesEj />

      <section id="Membresia">
        <Membresias />
      </section>
    </div>
  );
}

export default Home;
