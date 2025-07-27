import {
  FaBook,
  FaCalendar,
  FaHome,
  FaListUl,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LuBookImage } from "react-icons/lu";
import { MdOutlineMenu, MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/*Dashboard side bar*/}
      <div className="w-64 min-h-screen bg-yellow-600">
        <ul className="menu">
          <a className=" text-xl font-bold text-center py-12">
            BISTRO BOSS
            <div className="text-sm text-center space-x-1">
              <span>R</span>
              <span>E</span>
              <span>S</span>
              <span>T</span>
              <span>A</span>
              <span>U</span>
              <span>R</span>
              <span>A</span>
              <span>N</span>
              <span>T</span>
            </div>
          </a>
          {isAdmin ? (
            <>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="text-lg"></FaHome>
                  ADMIN HOME
                </NavLink>
              </li>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils className="text-lg"></FaUtensils> ADD ITEMS
                </NavLink>
              </li>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/manageItems">
                  <FaListUl className="text-lg"></FaListUl> MANAGE ITEMS
                </NavLink>
              </li>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/allUsers">
                  <FaUsers className="text-lg"></FaUsers> ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/userHome">
                  <FaHome className="text-lg"></FaHome> USER HOME
                </NavLink>
              </li>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/paymentHistory">
                  <FaCalendar className="text-lg"></FaCalendar> PAYMENT HISTORY
                </NavLink>
              </li>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart className="text-lg"></FaShoppingCart>MY CART(
                  {cart.length})
                </NavLink>
              </li>
              <li className="font-semibold mb-2">
                <NavLink to="/dashboard/addReview">
                  <MdReviews className="text-lg"></MdReviews> ADD REVIEW
                </NavLink>
              </li>
            </>
          )}

          {/*Shared nav links*/}
          <div className="">------------------------------------------</div>
          <li className="font-semibold my-2">
            <NavLink to="/">
              <FaHome className="text-lg"></FaHome> HOME
            </NavLink>
          </li>
          <li className="font-semibold mb-2">
            <NavLink to="/menu">
              <MdOutlineMenu className="text-lg"></MdOutlineMenu> MENU
            </NavLink>
          </li>
          <li className="font-semibold mb-2">
            <NavLink to="/order/salad">
              <FaShoppingBag className="text-lg"></FaShoppingBag> SHOP
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/contactUs">
              <IoMdMail className="text-lg"></IoMdMail> CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
      {/*Dashboard content*/}
      <div className="flex-1 px-8 py-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
