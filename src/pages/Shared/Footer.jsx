import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import Logo from "../../components/Logo";
import reverse_wave from "../../assets/Footer/reverse_wave_bottom.png";

const Footer = () => {
  return (
    <div>
      <img className="absolute" src={reverse_wave} alt="" />
      <div className="grid lg:grid-cols-7 bg-gradient-to-b from-yellow-300 to-orange-400 px-16 lg:px-32 pt-40 pb-20 justify-between space-y-10 lg:space-y-0">
        <div className="col-span-3">
          <Logo></Logo>
          <p>Foreign Language Learning Academy</p>
          <p>Providing high quality education since 1992</p>
        </div>
        <div className="col-span-2">
          <h4 className="font-nunito text-xl font-extrabold mb-4">Address</h4>
          <p>23 Elm Street, Anytown, XYZ</p>
          <p>12345, Fictionland</p>
          <h4 className="font-nunito text-xl mt-4">Find Us On</h4>
          <div className="flex items-center gap-4 mt-2">
            <FaTwitter className="text-2xl"></FaTwitter>
            <FaFacebook className="text-2xl"></FaFacebook>
            <FaInstagram className="text-2xl"></FaInstagram>
          </div>
        </div>
        <div className="col-span-2">
          <h4 className="font-nunito text-xl font-extrabold mb-4">
            Contact Info
          </h4>
          <p className="flex items-center gap-4 mb-2">
            <FaPhone className="text-xl"></FaPhone>
            (555) 123-4567
          </p>
          <p className="flex items-center gap-4 mb-2">
            <MdEmail className="text-xl"></MdEmail>
            info@maplewoodhighschool.com
          </p>
          <p className="flex items-center gap-4 mb-2">
            <CgWebsite className="text-xl"></CgWebsite>
            www.maplewoodhighschool.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
