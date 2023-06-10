import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending"
    data.total_students = 0
    axios
      .post("http://localhost:5000/new-classes", data)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          toast.success("Successfully Added!");
          console.log("added");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="mt-10">
        <SectionHeader sectionHeader="Add A Class"></SectionHeader>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl shadow-2xl rounded-xl mx-auto bg-white bg-gradient-to-t from-yellow-100 to-orange-100 mt-10"
      >
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("class_name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="image"
              className="input input-bordered"
              {...register("image", { required: true })}
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="text"
                placeholder="seats"
                className="input input-bordered"
                {...register("available_seats", { required: true })}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="price $"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder="instructor"
              className="input input-bordered"
              defaultValue={user?.displayName}
              {...register("instructor", { required: true })}
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              defaultValue={user?.email}
              {...register("email", { required: true })}
              readOnly
            />
          </div>

          <div className="form-control my-8">
            <input className="btn-primary" type="submit" value="ADD" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
