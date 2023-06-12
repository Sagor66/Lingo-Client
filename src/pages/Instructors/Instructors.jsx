import { useEffect, useState } from "react";
import CommonBanner from "../../components/CommonBanner";
import InstructorCard from "../../components/InstructorCard";
import { Helmet } from "react-helmet";

const Instructors = () => {

  const [instructors, setInstructors] = useState([])

  useEffect(() => {
    fetch('https://b7a12-summer-camp-server-side-sagor66.vercel.app/instructors')
    .then(res => res.json())
    .then(data => setInstructors(data))
  }, [])

  return (
    <div className="px-2">
      <Helmet>
        <title>Lingo | Instructors</title>
      </Helmet>
      <CommonBanner headText={"Our Instructors"}></CommonBanner>
      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto gap-10 my-32">
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