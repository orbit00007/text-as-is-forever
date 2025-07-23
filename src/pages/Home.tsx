const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome to my Academic Portfolio
        </h1>
        <p className="text-lg text-muted-foreground">
          Computer Science graduate with expertise in Machine Learning, Full Stack Development, and MLOps
        </p>
      </div>

      {/* About Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          About Me
        </h2>
        
        <div className="prose max-w-none">
          <p className="text-foreground leading-relaxed mb-4">
            I am a Computer Science graduate from GB Pant Institute of Engineering and Technology 
            with expertise in backend development for scalable systems, secure API integration, and 
            adversarial robustness evaluation. I am knowledgeable about MLOps tools like DVC and MLflow, 
            as well as Python, PHP, Docker, and Git.
          </p>
          
          <p className="text-foreground leading-relaxed mb-4">
            Currently, I am developing automation workflows and reproducible pipelines, with a keen 
            interest in system reliability and functional programming. My research focuses on bridging 
            machine learning and cybersecurity, particularly in adversarial robustness evaluation.
          </p>
          
          <p className="text-foreground leading-relaxed">
            I have practical experience in full-stack development, AI chatbot implementation, and 
            cybersecurity threat detection. My work has been recognized at prestigious competitions 
            including IIT Roorkee's Cognizance and Thomso events.
          </p>
        </div>
      </div>

      {/* Research Interests */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Research Interests
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Machine Learning & AI</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Adversarial Machine Learning</li>
              <li>Deep Learning Robustness</li>
              <li>Neural Network Security</li>
              <li>MLOps and Automation</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground">Cybersecurity</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Threat Detection Systems</li>
              <li>Adversarial Attack Frameworks</li>
              <li>Security in AI Systems</li>
              <li>Network Anomaly Detection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Highlights */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Recent Highlights
        </h2>
        
        <div className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-foreground mb-2">
              🏆 2nd Place - Cognizance 2024 (IIT Roorkee)
            </h3>
            <p className="text-sm text-muted-foreground">
              Cybersecurity Hackathon for developing a Cybersecurity Threat AI prototype using LLMs and GNNs
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-foreground mb-2">
              📝 Combined Adversarial Attack (CoAA) Framework
            </h3>
            <p className="text-sm text-muted-foreground">
              Under 2nd review at IJMLC, Springer 2025 - Research combining FGSM, PGD, HSJA, CW, and ZOO attacks
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-medium text-foreground mb-2">
              🎤 Winner - Thomso 2024 (IIT Roorkee)
            </h3>
            <p className="text-sm text-muted-foreground">
              Beatboxing Competition, showcasing diverse talents beyond technical skills
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;