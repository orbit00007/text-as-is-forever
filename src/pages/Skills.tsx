import Header from "@/components/Header";

const Skills = () => {
  const skills = {
    languages: ["Python", "JavaScript", "SQL", "HTML", "CSS", "C++"],
    frameworks: ["TensorFlow", "PyTorch", "React.js", "Scikit-Learn"],
    tools: ["Git", "Docker", "DVC", "MLflow", "Jupyter Notebook"],
    softSkills: ["Research", "Communication", "Teamwork", "Problem-Solving"]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Skills</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>💻</span>
                  Programming Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>🔧</span>
                  Tools & Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>🚀</span>
                  Frameworks & Libraries
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((framework, index) => (
                    <span key={index} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>🤝</span>
                  Soft Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill, index) => (
                    <span key={index} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span>🏆</span>
              Achievements
            </h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span><strong>Cognizance 2024 (IIT Roorkee):</strong> 2nd Place – Cybersecurity Hackathon</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span><strong>Thomso 2024 (IIT Roorkee):</strong> Winner – Beatboxing Competition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">•</span>
                <span><strong>LeetCode:</strong> Solved 150+ problems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;