import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import RobotIllustration from "@/components/RobotIllustration";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        
        <div className="flex gap-8">
          {/* Left sidebar with profile */}
          <div className="w-64 flex-shrink-0">
            <ProfileSection />
          </div>
          
          {/* Main content area */}
          <div className="flex-1 max-w-2xl">
            <div className="bg-card rounded-2xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-6 text-center">Welcome to My Portfolio</h2>
              <div className="prose prose-sm text-muted-foreground">
                <p className="mb-4">
                  Hi! I'm Gaurav Bhatt, a Computer Science graduate with expertise in backend development, 
                  machine learning, and MLOps. I'm passionate about building scalable systems and exploring 
                  the intersection of AI and software engineering.
                </p>
                <p className="mb-4">
                  Currently, I'm working on automation workflows and reproducible pipelines, with a keen 
                  interest in system reliability and functional programming. I have experience with various 
                  technologies including Python, JavaScript, Docker, and modern ML frameworks.
                </p>
                <p>
                  Feel free to explore my skills, experience, education, projects, and research using the 
                  navigation above. You can also connect with me through the social links on the left.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right sidebar with illustration */}
          <div className="w-80 flex-shrink-0 flex justify-center items-start pt-8">
            <RobotIllustration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;