import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllCars, fetchGetAllRents } from "../redux/actions";

const Amministrazione = () => {
  const allCars = useSelector((state) => state.data.cars);
  const allRents = useSelector((state) => state.data.rents);
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAllCars(token));
    dispatch(fetchGetAllRents(token));
  }, []);
  return;
};
export default Amministrazione;
