import { useState } from "react";
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import MainContent from "@/components/MainContent";
import RobotIllustration from "@/components/RobotIllustration";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="flex gap-8">
          {/* Left sidebar with profile - fixed width */}
          <div className="w-64 flex-shrink-0">
            <ProfileSection />
          </div>
          
          {/* Main content area - flexible width */}
          <div className="flex-1 max-w-2xl">
            <MainContent activeSection={activeSection} />
          </div>
          
          {/* Right sidebar with illustration - fixed width */}
          <div className="w-80 flex-shrink-0 flex justify-center items-start pt-8">
            <RobotIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
