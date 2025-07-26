import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashboardSectionTitle from "../../../Component/DashboardSectionTitle/DashboardSectionTitle";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted.`,
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <DashboardSectionTitle
        subHeading="---My Cart---"
        heading="Wanna add more?"
      ></DashboardSectionTitle>
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold">TOTAL ORDERS : {cart.length}</h2>
        <h2 className="text-2xl font-semibold">TOTAL PRICE : ${totalPrice}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn bg-yellow-600 text-white">PAY</button>
          </Link>
        ) : (
          <button disabled className="btn bg-yellow-600 text-white">
            PAY
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="bg-yellow-600 text-white">
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
