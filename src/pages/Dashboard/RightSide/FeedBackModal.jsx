import axios from "axios";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

const FeedBackModal = ({ item, onFeedBackButtonClick }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // console.log(item._id)

  const onSubmit = (data) => {
    axios
    .patch(`https://b7a12-summer-camp-server-side-sagor66.vercel.app/new-classes/feedback/${item._id}`)
    .then((data) => {
      console.log(data.data);
      if (data.data.modifiedCount > 0) {
        console.log('added')
      }
    })
    .catch((error) => console.log(error.message));
    console.log(data);
    reset();
  };

  const openModal = () => {
    onFeedBackButtonClick(item)
    const modal = document.getElementById("my_modal_1");
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    modal.close();
  };

  

  return (
    <div>
      <button onClick={openModal} className="btn bg-gray-300 btn-xs">
        Feedback
      </button>
      <dialog id="my_modal_1" className="modal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="dialog"
          className="modal-box"
        >
          <div className="modal-action">
            <button className="btn rounded-full mb-5" onClick={closeModal}>
              <RxCross2></RxCross2>
            </button>
          </div>
          <div className="form-control font-normal">
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Feedback"
              {...register("feedback", { required: true })}
            ></textarea>
          </div>
          <input
            className="btn-primary my-5 w-full"
            type="submit"
            value="submit"
          />
        </form>
      </dialog>
    </div>
  );
};

export default FeedBackModal;
