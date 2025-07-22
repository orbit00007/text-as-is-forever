const MainContent = () => {
  return (
    <div className="space-y-8">
      {/* Greeting Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span>👋</span>
          <span>Hello there, I'm ORBiT!</span>
        </h2>
        
        <div className="space-y-3 text-foreground">
          <p className="flex items-start gap-2">
            <span>🎓</span>
            <span>I'm a graduate student from GBPIET Pauri.</span>
          </p>
          
          <p className="flex items-start gap-2">
            <span>🔬</span>
            <span>My research interests are in bridging machine learning and cybersecurity.</span>
          </p>
          
          <p className="flex items-start gap-2">
            <span>📚</span>
            <span>I'm currently working on projects related to MLOps and machine learning.</span>
          </p>
          
          <p className="flex items-start gap-2">
            <span>🤝</span>
            <span>I am also interested in Full stack Development and Music.</span>
          </p>
        </div>
      </div>

      {/* Selected Experience Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Selected Experience</h2>
        
        {/* Open Source Contributions */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>👑</span>
            <span>Open Source Contributions</span>
          </h3>
          
          <div className="space-y-3 text-foreground">
            <p>
              I have experience contributing to{" "}
              <a href="#" className="text-link-blue hover:underline">Arena Bench</a>{" "}
              a large open-source project for robotic obstacle avoidance using Deep Reinforcement Learning.
            </p>
            
            <p>
              Moreover, I have published a{" "}
              <a href="#" className="text-link-blue hover:underline">respective paper</a>{" "}
              at the IROS conference and in the Robotics and Automation Letters (RA-L) journal.
            </p>
            
            <p className="flex items-start gap-2">
              <span>📝</span>
              <span>Recently, I have submitted a second one.</span>
            </p>
          </div>
        </div>

        {/* Reimplementing and Reproducing Papers */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>📊</span>
            <span>Reimplementing and Reproducing Papers</span>
          </h3>
          
          <div className="space-y-3 text-foreground">
            <p>
              I have experience with independent research. I have implemented the Reward Constrained Policy Optimization paper into stable-baselines3 PPO and reproduced the original results by running and tracking experiments.
            </p>
            
            <p>
              To accompany this work, I have submitted a blog post to the{" "}
              <span className="font-semibold">ICLR</span> Blogposts Track communicating the paper's theory and my results.
            </p>
            
            <p>
              Feel free to look at my specific{" "}
              <a href="#" className="text-link-blue hover:underline">portfolio entry</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;