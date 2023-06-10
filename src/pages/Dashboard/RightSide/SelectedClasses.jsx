import Swal from "sweetalert2";
import SectionHeader from "../../../components/SectionHeader";
import useCart from "../../../hooks/useCart";
import axios from "axios";

const SelectedClasses = () => {
  const [cart, refetch] = useCart();
  console.log(cart);

  const handleDeleteButton = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/cart/${item._id}`)
          .then(data => {
            if (data.data.deletedCount > 0) {
              refetch()
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "The selected class has been deleted.",
                "success"
              );
            }
          })
          .catch(error => console.log(error.message))
        }
      });
  };

  return (
    <div className="mt-10">
      <SectionHeader sectionHeader="My Selected Classes"></SectionHeader>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
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
            {cart.map((item, i) => (
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
                <th>
                  <button className="btn bg-green-300 btn-xs mr-4">Pay</button>
                  <button
                    onClick={() => handleDeleteButton(item)}
                    className="btn bg-red-200 text-red-700 btn-xs"
                  >
                    Delete
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

export default SelectedClasses;
