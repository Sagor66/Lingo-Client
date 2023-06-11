import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUser = () => {
  const [ axiosSecure ] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users")
    return res.data
  })

  const handleMakeAdmin = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        showCancelButton: true,
        confirmButtonText: "Yes, make Admin!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.patch(`http://localhost:5000/users/admin/${item._id}`)
          .then(data => {
            console.log(data.data)
            if (data.data.modifiedCount > 0) {
              refetch()
              swalWithBootstrapButtons.fire(
                "Admin",
                "User Successfully Made Admin",
                "success"
              );
            }
          })
          .catch(error => console.log(error.message))
        }
      });
  }


  const handleMakeInstructor = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        showCancelButton: true,
        confirmButtonText: "Yes, make Instructor!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.patch(`http://localhost:5000/users/instructor/${item._id}`)
          .then(data => {
            console.log(data.data)
            if (data.data.modifiedCount > 0) {
              refetch()
              swalWithBootstrapButtons.fire(
                "Admin",
                "User Successfully Made Instructor",
                "success"
              );
            }
          })
          .catch(error => console.log(error.message))
        }
      });
  }


  return (
    <div className="mt-10">
      <SectionHeader sectionHeader="Manage Users"></SectionHeader>
      <div className="overflow-x-auto w-full bg-gradient-to-r from-yellow-100 to-orange-300 p-8 rounded-xl mb-40">
        <table className="table">
          {/* head */}
          <thead className="font-bold text-black">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((item, i) => (
              <tr key={item._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <td className="text-center">{item.phone}</td>
                <td>{item.role}</td>
                <th>
                  <button onClick={() => handleMakeAdmin(item)} disabled={item.role === 'admin'} className="btn bg-green-300 btn-xs mr-4">Make Admin</button>
                  <button
                    onClick={() => handleMakeInstructor(item)}
                    disabled={item.role === 'instructor'}
                    className="btn bg-blue-300 text-blue-700 btn-xs"
                  >
                    Make Instructor
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
