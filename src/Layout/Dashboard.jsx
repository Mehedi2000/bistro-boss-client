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
      <div className="w-64 min-h-screen bg-yellow-500">
        <ul className="menu">
          <a className=" text-xl font-bold text-center py-8">
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
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaListUl></FaListUl> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers className="text-lg"></FaUsers> ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaCalendar></FaCalendar> PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>MY CART({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdReviews></MdReviews> ADD REVIEW
                </NavLink>
              </li>
            </>
          )}

          {/*Shared nav links*/}
          <div className="">------------------------------------------</div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdOutlineMenu></MdOutlineMenu> MENU
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag></FaShoppingBag> SHOP
            </NavLink>
          </li>
          <li>
            <NavLink>
              <IoMdMail></IoMdMail> CONTACT
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
