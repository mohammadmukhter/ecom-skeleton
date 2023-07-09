import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Main = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
