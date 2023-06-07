import { useEffect, useState } from "react";
import wave from "../../assets/Banner/wave_bottom.png";
import ClassCard from "../../components/ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("../../../public/classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <div className="relative mb-32">
        <div className="w-full h-[450px] bg-gradient-to-b from-yellow-300 to-orange-400">
          <h2 className="font-nunito text-7xl font-extrabold text-center pt-36">
            Our Classes
          </h2>
        </div>
        <img className="absolute bottom-0" src={wave} alt="" />
      </div>
      <div className="grid lg:grid-cols-3 justify-items-center mb-32 gap-10 max-w-7xl mx-auto">
        {classes.map((classCard, i) => (
          <ClassCard key={i} classCard={classCard}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
