import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl shadow-2xl rounded-xl mx-auto bg-white bg-gradient-to-t from-yellow-100 to-orange-100 my-10"
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
              {...register("name", { required: true })}
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
                {...register("seats", { required: true })}
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
              {...register("instructor", { required: true })}
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
