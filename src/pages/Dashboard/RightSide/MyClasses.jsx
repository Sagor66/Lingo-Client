import SectionHeader from "../../../components/SectionHeader";
import useClasses from "../../../hooks/useClasses";

const MyClasses = () => {

  const [ newClasses, refetch ] = useClasses()

  return (
    <div className="mt-10">
      <SectionHeader sectionHeader="My Classes"></SectionHeader>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Enrolled Students</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th className="text-center">Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {newClasses.map((item, i) => (
              <tr key={item._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.instructor}</td>
                <td className="text-center">{item.total_students}</td>
                <td className="text-center">{item.available_seats}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
                <td>{item.feedback ? item.feedback : "N/A"}</td>
                
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
