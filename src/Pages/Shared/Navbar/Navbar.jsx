import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import logoImg from "../../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "User LogOut Successfully",
        icon: "success",
        draggable: true,
      });
      navigate("/");
    });
    // .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
        <Link to="/">HOME</Link>
      </li>
      <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
        <Link to="/contactUs">CONTACT US</Link>
      </li>
      <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
        <Link to="/order/salad">OUR SHOP</Link>
      </li>
      {user && isAdmin && (
        <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
          <Link to="/dashboard/adminHome">DASHBOARD</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
          <Link to="/dashboard/userHome">DASHBOARD</Link>
        </li>
      )}

      {user ? (
        <>
          <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
            <Link onClick={handleLogOut}>LOG OUT</Link>
          </li>
        </>
      ) : (
        <>
          <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
            <Link to="/login">LOGIN</Link>
          </li>
          <li className="font-medium text-[16px] hover:border-b-4 border-yellow-600">
            <Link to="/signup">SIGN UP</Link>
          </li>
        </>
      )}
      <li className="ml-2">
        <button className="btn">
          <FaShoppingCart className="text-xl"></FaShoppingCart>
          <div className="bg-yellow-600 py-1 px-2 border rounded-full text-lg text-white">
            +{cart.length}
          </div>
        </button>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex gap-2">
            <img className="h-7 md:h-11" src={logoImg} alt="" />
            <a className="text-[13px] md:text-xl font-bold">
              BISTRO BOSS
              <div className="text-[8px] md:text-sm text-center space-x-1">
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
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
