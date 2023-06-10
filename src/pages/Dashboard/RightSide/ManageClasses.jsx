import { useEffect } from "react";
import SectionHeader from "../../../components/SectionHeader";
import useClassesAll from "../../../hooks/useClassesAll";
import Swal from "sweetalert2";
import axios from "axios";

const ManageClasses = () => {
  const [newClasses, refetch] = useClassesAll();
  console.log(newClasses);

  const handleApproveButton = (item) => {
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
        confirmButtonText: "Yes, approve it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.patch(`http://localhost:5000/new-classes/approved/${item._id}`)
          .then(data => {
            console.log(data.data)
            if (data.data.modifiedCount > 0) {
              refetch()
              swalWithBootstrapButtons.fire(
                "Approved",
                "The selected class has been approved.",
                "success"
              );
            }
          })
          .catch(error => console.log(error.message))
        }
      });
  };

  const handleDenyButton = (item) => {
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
        confirmButtonText: "Yes, deny it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.patch(`http://localhost:5000/new-classes/deny/${item._id}`)
          .then(data => {
            console.log(data.data)
            if (data.data.modifiedCount > 0) {
              refetch()
              swalWithBootstrapButtons.fire(
                "Denied",
                "The selected class has been denied.",
                "success"
              );
            }
          })
          .catch(error => console.log(error.message))
        }
      });
  };

  return (
    <div>
      <div className="mt-10">
        <SectionHeader sectionHeader="Manage Classes"></SectionHeader>
        <div className="overflow-x-auto w-full">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>#</label>
                </th>
                <th>Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {newClasses.map((item, i) => (
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
                  <td className="text-center">{item.email}</td>
                  <td className="text-center">{item.available_seats}</td>
                  <td>${item.price}</td>
                  <td>{item.status}</td>
                  <th>
                    <button onClick={() => handleApproveButton(item)} className="btn bg-green-300 btn-xs mr-4">
                      Approve
                    </button>
                    <button onClick={() => handleDenyButton(item)} className="btn bg-red-200 text-red-700 btn-xs mr-4">
                      Deny
                    </button>
                    <button className="btn bg-gray-300 btn-xs">
                      Feedback
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
