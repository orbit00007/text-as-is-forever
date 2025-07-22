const MainContent = () => {
  return (
    <div className="space-y-8">
      {/* Greeting Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span>👋</span>
          <span>Hello there, I'm Gaurav Bhatt!</span>
        </h2>
        
        <div className="space-y-3 text-foreground">
          <p className="flex items-start gap-2">
            <span>🎓</span>
            <span>Computer Science graduate from GB Pant Institute of Engineering and Technology.</span>
          </p>
          
          <p className="flex items-start gap-2">
            <span>🔬</span>
            <span>My research interests are in bridging machine learning and cybersecurity with expertise in adversarial robustness evaluation.</span>
          </p>
          
          <p className="flex items-start gap-2">
            <span>📚</span>
            <span>Currently developing automation workflows and reproducible pipelines using MLOps tools like DVC and MLflow.</span>
          </p>
          
          <p className="flex items-start gap-2">
            <span>🛠️</span>
            <span>Experienced in backend development for scalable systems, secure API integration, and full-stack development.</span>
          </p>
          
          <p className="flex items-start gap-2">
            <span>🎯</span>
            <span>Keen interest in system reliability, functional programming, and cybersecurity threat detection.</span>
          </p>
        </div>
      </div>

      {/* Selected Experience Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Recent Highlights</h2>
        
        {/* Research Work */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>🔬</span>
            <span>Research & Publications</span>
          </h3>
          
          <div className="space-y-3 text-foreground">
            <p>
              Currently working on the{" "}
              <span className="font-semibold text-primary">Combined Adversarial Attack (CoAA)</span>{" "}
              framework under 2nd review at IJMLC, Springer 2025.
            </p>
            
            <p>
              The research combines FGSM, PGD, HSJA, CW, and ZOO attacks to evaluate deep learning vulnerabilities with a unique evaluation pipeline.
            </p>
            
            <p className="flex items-start gap-2">
              <span>🏆</span>
              <span>Presented research at the 11th International Polish Scientific Conference in Turkey (June 2025).</span>
            </p>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>🏆</span>
            <span>Recent Achievements</span>
          </h3>
          
          <div className="space-y-3 text-foreground">
            <p>
              <span className="font-semibold text-primary">2nd Place at Cognizance 2024 (IIT Roorkee)</span> - 
              Cybersecurity Hackathon for developing a Cybersecurity Threat AI prototype using LLMs and GNNs.
            </p>
            
            <p>
              <span className="font-semibold text-primary">Winner at Thomso 2024 (IIT Roorkee)</span> - 
              Beatboxing Competition, showcasing diverse talents beyond technical skills.
            </p>
            
            <p>
              Solved <span className="font-semibold">150+ problems on LeetCode</span>, demonstrating strong 
              problem-solving abilities and algorithmic thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;