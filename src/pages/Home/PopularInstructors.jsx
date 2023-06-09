import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import InstructorCard from "../../components/InstructorCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [topInstructors, setTopInstructors] = useState([]);
  const [topInstructorTotalStudent, setTopInstructorTotalStudent] = useState(
    []
  );

  useEffect(() => {
    fetch("../../../public/classes.json")
      .then((res) => res.json())
      .then((data) => {
        const instructorTotals = {};
        data.forEach((course) => {
          const { instructor, total_students } = course;
          if (instructor in instructorTotals) {
            instructorTotals[instructor] += total_students;
          } else {
            instructorTotals[instructor] = total_students;
          }
        });
        // console.log(instructorTotals)
        const sortedInstructors = Object.keys(instructorTotals).sort(
          (a, b) => instructorTotals[b] - instructorTotals[a]
        );
        const instructorTotalsArray = Object.entries(instructorTotals);

        const sortedInstructorsTotals = instructorTotalsArray.sort(
          (a, b) => b[1] - a[1]
        );

        const toppestInstructors = sortedInstructors.slice(0, 6);

        const topSixSortedInstructorsTotals = sortedInstructorsTotals.slice(
          0,
          6
        );
        setTopInstructors(toppestInstructors);
        setTopInstructorTotalStudent(topSixSortedInstructorsTotals);
      });
  }, []);

  // console.log(topInstructorTotalStudent);

  useEffect(() => {
    fetch("../../../public/instructors.json")
      .then((res) => res.json())
      .then((data) => {
        const top = [];
        topInstructors.forEach((topInstructor) => {
          data.map((instructor) => {
            if (instructor.name === topInstructor) {
              top.push(instructor);
            }
          });
        });
        setInstructors(top);
      });
  }, [topInstructors]);

  // console.log(instructors);

  return (
    <div className="max-w-7xl mx-auto mb-40">
      <SectionHeader sectionHeader={"Top Instructors"}></SectionHeader>
      <div className="grid grid-cols-3 gap-10">
        {instructors.map((instructor, i) => (
          <div key={i} className="flex shadow-2xl relative rounded-lg hover:scale-110 transition-all">
            <img
              className="h-60 w-60 object-cover bg-gradient-to-l from-yellow-400 to-white rounded-l-lg"
              src={instructor.image}
              alt=""
            />
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 w-full rounded-r-lg">
              <h4 className="font-nunito text-3xl font-extrabold pt-16 h-36">{instructor.name}</h4>
              <button className="font-nunito font-bold bg-white px-4 py-2 rounded-lg my-4 hover:bg-black hover:text-white">See Classes</button>
            </div>
            <p className="absolute top-0 right-0 font-bold bg-lime-500 px-4 py-1 rounded-se-lg rounded-es-lg">Students: {topInstructorTotalStudent[i][1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
