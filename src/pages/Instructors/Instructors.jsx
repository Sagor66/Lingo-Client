import { useEffect, useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import InstructorCard from "../../components/InstructorCard";

const Instructors = () => {

  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    fetch('../../../public/instructors.json')
    .then(res => res.json())
    .then(data => setInstructors(data))
  }, [])

  return (
    <div>
      <CommonBanner headText={"Our Instructors"}></CommonBanner>
      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-10 my-32">
        {
          instructors.map((instructorCard, i) => (
            <InstructorCard key={i} instructorCard={instructorCard}></InstructorCard>
          ))
        }
      </div>
    </div>
  );
};

export default Instructors;