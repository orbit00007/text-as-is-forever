import robotImage from "@/assets/robot-illustration.png";

const RobotIllustration = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-80 h-80 bg-primary rounded-lg flex items-center justify-center p-6">
        <img 
          src={robotImage} 
          alt="Cute robot with computer saying 'I see a cabin in the woods!'" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default RobotIllustration;