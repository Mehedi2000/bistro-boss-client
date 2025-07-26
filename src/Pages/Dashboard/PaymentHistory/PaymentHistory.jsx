import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashboardSectionTitle from "../../../Component/DashboardSectionTitle/DashboardSectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <DashboardSectionTitle
        subHeading="---At a Glance!---"
        heading="PAYMENT HISTORY"
      ></DashboardSectionTitle>
      <h2 className="text-2xl font-semibold uppercase mb-4">
        Total Payments : {payments.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="bg-yellow-600 text-white">
              <th>#</th>
              <th>EMAIL</th>
              <th>PRICE</th>
              <th>TRANSACTION ID</th>
              <th>PAYMENT DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>${payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
