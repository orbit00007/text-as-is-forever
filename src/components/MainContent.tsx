interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case "skills":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
            
            <div className="grid gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "SQL", "HTML", "CSS", "C++"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "React.js", "Scikit-Learn"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "DVC", "MLflow", "Jupyter Notebook"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Research", "Communication", "Teamwork", "Problem-Solving"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
        
      case "experience":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="text-lg font-semibold">Software Development Intern</h3>
                <p className="text-sm text-muted-foreground">Smartbotics • March 2025 – May 2025 • Remote</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed full-stack features using React.js, JavaScript, and TypeScript</li>
                  <li>Built AI chatbots for automated user inquiries and customer interaction</li>
                  <li>Dockerized application components for scalable deployment</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="text-lg font-semibold">Industrial Trainee</h3>
                <p className="text-sm text-muted-foreground">DRDO SAG • Jul 2024 – Aug 2024 • Delhi</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Implemented Python modules to assess AI model robustness</li>
                  <li>Developed modular code for attack strategies using ensemble techniques</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="text-lg font-semibold">Software Engineering Intern</h3>
                <p className="text-sm text-muted-foreground">Kommunicate • Jan 2024 – Feb 2024 • Remote</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Created localized website systems using React-i18next</li>
                  <li>Enhanced multilingual support for various browsers</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="text-lg font-semibold">Web Dev Trainee</h3>
                <p className="text-sm text-muted-foreground">DRDO RAC • Jan 2023 – Feb 2023 • Delhi</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Developed secure PHP backend with streamlined validation</li>
                  <li>Built centralized document handling systems</li>
                </ul>
              </div>
            </div>
          </div>
        );
        
      case "education":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            
            <div className="space-y-6">
              <div className="border border-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold">B.Tech in Computer Science</h3>
                <p className="text-primary font-medium">GB Pant Institute of Engineering and Technology</p>
                <p className="text-sm text-muted-foreground">Oct 2021 – Jul 2025 • Pauri Garhwal, Uttarakhand</p>
                <p className="text-sm mt-2"><strong>CGPA:</strong> 7.51/10</p>
              </div>
              
              <div className="border border-muted rounded-lg p-6">
                <h3 className="text-lg font-semibold">Senior Secondary (CBSE)</h3>
                <p className="text-primary font-medium">Bharatiya Vidya Bhavan's Mehta Vidyalaya</p>
                <p className="text-sm text-muted-foreground">Jul 2021 • Delhi</p>
                <p className="text-sm mt-2"><strong>Percentage:</strong> 85%</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary">🏆</span>
                  <div>
                    <p className="font-medium">Cognizance 2024 (IIT Roorkee)</p>
                    <p className="text-sm text-muted-foreground">2nd Place - Cybersecurity Hackathon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">🎤</span>
                  <div>
                    <p className="font-medium">Thomso 2024 (IIT Roorkee)</p>
                    <p className="text-sm text-muted-foreground">Winner - Beatboxing Competition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">💻</span>
                  <div>
                    <p className="font-medium">LeetCode Problem Solving</p>
                    <p className="text-sm text-muted-foreground">Solved 150+ problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default: // "about"
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
    }
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-sm border">
      {renderContent()}
    </div>
  );
};

export default MainContent;