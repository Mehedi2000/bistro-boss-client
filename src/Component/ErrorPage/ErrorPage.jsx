import errorPage from "../../assets/404.gif";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={errorPage} alt="" />
        <Link to="/" className="flex justify-center items-center">
          <button className="btn bg-yellow-700 text-white text-[16px]">
            Back To Home <MdHome className="text-[24px]"></MdHome>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
