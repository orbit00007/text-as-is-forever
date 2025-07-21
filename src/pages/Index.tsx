import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import MainContent from "@/components/MainContent";
import RobotIllustration from "@/components/RobotIllustration";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left sidebar with profile */}
          <div className="lg:col-span-1">
            <ProfileSection />
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-1">
            <MainContent />
          </div>
          
          {/* Right sidebar with illustration */}
          <div className="lg:col-span-1 flex justify-center items-start pt-16">
            <RobotIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
