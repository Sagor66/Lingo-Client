

const InstructorCard = ({ instructorCard }) => {

  const { name, image, email, classes_taken, class_names } = instructorCard

  return (
    <div className="shadow-2xl bg-gradient-to-br from-yellow-400 to-orange-400 relative pb-20 rounded-lg hover:scale-110 transition-all">
      <img className="w-96 h-96 object-cover rounded-lg" src={image} alt="" />
      <div className="px-4">
        <h4 className="font-nunito text-2xl font-extrabold my-4">{name}</h4>
        <div className="space-y-2">
          <p className="font-bold">Email: {email}</p>
          <ul>
            {
              class_names.map((classes, i) => (
                <li key={i} className="px-5 bg-gradient-to-r from-orange-500 to-yellow-500 w-60 mb-2 py-1 font-bold">{classes}</li>
              ))
            }
          </ul>
          <p className="px-5 bg-gradient-to-r from-white to-yellow-500 w-60 mb-2 py-1 font-bold">Classes Taken: {classes_taken}</p>
        </div>
        
      </div>
      <button className="font-nunito text-xl font-extrabold px-12 py-3 bg-gradient-to-b from-orange-500 to-yellow-500 text-white tracking-wide hover:from-orange-600 hover:to-yellow-600 w-full rounded-b-lg absolute bottom-0">See Classes</button>
    </div>
  );
};

export default InstructorCard;