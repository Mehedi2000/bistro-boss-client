import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { BiSolidFoodMenu } from "react-icons/bi";
import { AiFillShop } from "react-icons/ai";
import { FaPhoneFlip, FaStar, FaWallet } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

const UserHome = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: stats = {} } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user-stats/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl font-semibold uppercase mb-4">
        <span>hi, welcome back!</span>
      </h2>
      <div className="stats shadow flex gap-4">
        <div className="stat bg-violet-400 text-white px-10 py-8">
          <div className="stat-figure text-4xl">
            <BiSolidFoodMenu></BiSolidFoodMenu>
          </div>
          <div className="stat-title text-white font-semibold">MENU</div>
          <div className="stat-value">${stats?.menu}</div>
        </div>
        <div className="stat bg-yellow-600 text-white px-10 py-8">
          <div className="stat-figure text-4xl">
            <AiFillShop></AiFillShop>
          </div>
          <div className="stat-title text-white font-semibold">SHOP</div>
          <div className="stat-value">{stats?.cart}</div>
        </div>
        <div className="stat bg-red-400 text-white px-10 py-8">
          <div className="stat-figure text-4xl">
            <FaPhoneFlip></FaPhoneFlip>
          </div>
          <div className="stat-title text-white font-semibold">CONTACT</div>
          <div className="stat-value">+88 012345</div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-1/2 py-16 bg-pink-200 flex flex-col justify-center items-center">
          <p className="w-40 h-40 rounded-full text-white bg-white mb-6"></p>
          <h2 className=" uppercase font-medium text-2xl">
            {user.displayName}
          </h2>
        </div>
        <div className="w-1/2 bg-yellow-200 py-28">
          <h2 className="text-3xl font-medium uppercase text-center mb-4">
            your activities
          </h2>
          <div>
            <div className="flex items-center justify-center text-blue-600 text-lg">
              <FaShoppingCart className="mr-2"></FaShoppingCart>{" "}
              <p className="font-medium">ORDERS : {stats?.cart}</p>
            </div>
            <div className="flex items-center justify-center text-cyan-500 text-lg">
              <FaStar className="mr-2"></FaStar>
              <p className="font-medium">REVIEWS : {stats?.review}</p>
            </div>
            <div className="flex items-center justify-center text-yellow-500 text-lg">
              <IoWallet className="mr-2"></IoWallet>{" "}
              <p className="font-medium">PAYMENT : {stats?.payment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
