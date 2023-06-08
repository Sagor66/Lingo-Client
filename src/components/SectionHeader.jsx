

const SectionHeader = ({ sectionHeader }) => {
  return (
    <div className="text-center">
      <h2 className="font-nunito text-6xl font-extrabold text-gradient bg-gradient-to-r from-yellow-400 to-orange-400 mb-16">{sectionHeader}</h2>      
    </div>
  );
};

export default SectionHeader;