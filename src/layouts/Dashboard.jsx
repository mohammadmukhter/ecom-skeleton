import { FaHome, FaHouseUser, FaListAlt, FaPlusCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-200 text-gray-800 font-semibold uppercase">
          <li>
            <Link to="/dashboard/adminHome">
              <FaHouseUser> </FaHouseUser>Admin Home
            </Link>
          </li>

          <li>
            <Link to="/dashboard/addProduct">
              <FaPlusCircle></FaPlusCircle>Add Product
            </Link>
          </li>
          <li>
            <Link to="/dashboard/manageProducts">
              <FaListAlt></FaListAlt>Products
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome></FaHome>Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
