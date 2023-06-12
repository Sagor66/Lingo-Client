import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SectionHeader from "../../../components/SectionHeader";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);

  return (
    <div className="mt-10">
      <SectionHeader sectionHeader="My Payments"></SectionHeader>
      <div className="overflow-x-auto w-full bg-gradient-to-r from-yellow-100 to-orange-300 p-8 rounded-xl mb-40">
        <table className="table">
          {/* head */}
          <thead className="font-bold text-black">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Name</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>Date and Time Of Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments?.map((item, i) => (
              <tr key={item._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>{item.itemNames}</td>
                <td>{item.transactionId}</td>
                <td className="text-center">{item.price}</td>
                <td>${item.date}</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
