import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SectionHeader from "../../../components/SectionHeader";


const EnrolledClasses = () => {

  const [ classes, setClasses ] = useState([])
  const [ enrolledClasses, setEnrolledClasses ] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setClasses(data))
  }, [user])

  useEffect(() => {
    classes.map(item => {
    setEnrolledClasses(item)
  })
  }, [classes])

  console.log(enrolledClasses)

  

  return (
    <div className="mt-10">
      <SectionHeader sectionHeader="My Enrolled Classes"></SectionHeader>
      <div className="overflow-x-auto w-full bg-gradient-to-r from-yellow-100 to-orange-300 p-8 rounded-xl mb-40">
        <table className="table">
          {/* head */}
          <thead className="font-bold text-black">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enrolledClasses?.map((item, i) => (
              <tr key={item._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.instructor}</td>
                <td className="text-center">{item.available_seats}</td>
                <td>${item.price}</td>
                {/* <th>
                  <Link to={`/dashboard/payment/${item._id}`}><button className="btn bg-green-300 btn-xs mr-4">Pay</button></Link>
                  <button
                    onClick={() => handleDeleteButton(item)}
                    className="btn bg-red-200 text-red-700 btn-xs"
                  >
                    Delete
                  </button>
                </th> */}
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;