import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./component/TopBar";
import AllCar from "./component/AllCar";
import Prenotazione from "./component/Prenotazione";
import Profilo from "./component/Profilo";
import LoginPage from "./component/LoginPage";
import Amministrazione from "./component/amministrazione";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/all-cars"} element={<AllCar />} />
        <Route path={"/prenotazione"} element={<Prenotazione />} />
        <Route path={"/profilo"} element={<Profilo />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/amministrazione"} element={<Amministrazione />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
