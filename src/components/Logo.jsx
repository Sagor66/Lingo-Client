import { FaLanguage } from "react-icons/fa";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link
        to="/"
        className="font-nunito font-black text-4xl flex items-center gap-2"
      >
        Lingo
        <FaLanguage className="text-6xl text-orange-400"></FaLanguage>
      </Link>
    </>
  );
};

export default Logo;
