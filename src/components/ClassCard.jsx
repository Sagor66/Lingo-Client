const ClassCard = ({ classCard, handleSelectButton }) => {
  const {
    _id,
    class_name,
    image,
    instructor,
    price,
    available_seats,
    total_students,
  } = classCard;

  const courseName = class_name.split(" ")[0];
  const courseLevel = class_name.split(" ")[1];

  return (
    <div
      className={`shadow-2xl pb-8 rounded-lg hover:scale-110 transition-all ${
        available_seats === 0 ? "bg-red-200" : ""
      }`}
    >
      <div className="relative">
        <img
          className="w-96 h-96 object-cover rounded-t-xl"
          src={image}
          alt=""
        />
        <p className="font-nunito text-xl font-extrabold bg-gradient-to-r from-yellow-400 to-orange-400 w-fit px-3 py-1 absolute top-3 right-3 rounded-xl">
          {courseLevel}
        </p>
      </div>
      <div className="text-xl px-4">
        <h4 className="font-nunito text-2xl font-bold my-4 bg-gradient-to-r from-yellow-400 to-white p-2">
          {class_name}
        </h4>
        <div>
          <p>
            <span className="font-bold">Instructor:</span> {instructor}
          </p>
          <p>
            Total Students: <span className="font-bold">{total_students}</span>
          </p>
          <p
            className={`${
              available_seats === 0 ? "text-red-500" : "text-green-700"
            }`}
          >
            Available Seats:{" "}
            <span className="font-bold">{available_seats}</span>
          </p>
          <p className="text-orange-400 font-bold">Price: ${price}</p>
        </div>
        <button
          onClick={() => handleSelectButton(_id)}
          disabled={available_seats === 0}
          className={`rounded-xl w-full mt-6 ${
            available_seats === 0 ? "px-12 py-3 bg-gray-200" : "btn-primary"
          }`}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
