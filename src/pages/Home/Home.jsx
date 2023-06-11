import { Helmet } from "react-helmet";
import Banner from "./Banner";
import PopularClasses from "./PopularClasses";
import PopularInstructors from "./PopularInstructors";
import Timing from "./Timing";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lingo | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Timing></Timing>
    </div>
  );
};

export default Home;