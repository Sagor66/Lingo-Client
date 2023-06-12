import wave from "../../assets/Extra/wave-haikei.png";
import wavereverse from "../../assets/Extra/wave-reverse.png";
import CountDown from "../../components/CountDown";

const Timing = () => {
  return (
    <div className="max-w-[1366px] h-[500px] mx-auto relative bg-gradient-to-r from-orange-400 to-yellow-400 mb-40">
      <div className="pt-8 lg:pt-24">
        <h2 className="font-nunito text-2xl lg:text-6xl font-black uppercase text-black bg-gradient-to-r from-white to-yellow-400 w-fit px-10 mx-auto">
          BootCamp starts in
        </h2>
        <CountDown targetDate={new Date("2023-12-30T23:59:59")}></CountDown>
      </div>
      <img className="absolute top-0 left-0 h-full" src={wave} alt="" />
      <img className="absolute top-0 right-0 h-full" src={wavereverse} alt="" />
    </div>
  );
};

export default Timing;
