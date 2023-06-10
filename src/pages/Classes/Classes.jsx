import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";
import CommonBanner from "../../components/CommonBanner";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  
  const handleSelectButton = (id) => {
    console.log(id)
  }

  return (
    <div>
      <CommonBanner headText={"Our Classes"}></CommonBanner>
      <div className="grid lg:grid-cols-3 justify-items-center mb-32 gap-10 max-w-7xl mx-auto">
        {classes.map((classCard, i) => (
          <ClassCard key={i} classCard={classCard} handleSelectButton={handleSelectButton}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
