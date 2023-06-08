import wave from "../assets/Banner/wave_bottom.png";

const CommonBanner = ({ headText }) => {
  return (
    <div>
      <div className="relative mb-32">
        <div className="w-full h-[450px] bg-gradient-to-b from-yellow-300 to-orange-400">
          <h2 className="font-nunito text-7xl font-extrabold text-center pt-36">
            { headText }
          </h2>
        </div>
        <img className="absolute bottom-0" src={wave} alt="" />
      </div>
    </div>
  );
};

export default CommonBanner;
