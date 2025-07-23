const CV = () => {
  const experiences = [
    {
      company: "Smartbotics",
      position: "Software Development Intern",
      duration: "March 2025 – May 2025",
      location: "Remote",
      tasks: [
        "Developed full-stack features using React.js, JavaScript, and TypeScript for the company's AI-driven platform website",
        "Built and implemented AI chatbots to handle automated user inquiries and optimize customer interaction processes",
        "Dockerized application components to facilitate easier integration and scalable, portable deployment"
      ]
    },
    {
      company: "DRDO SAG",
      position: "Industrial Trainee",
      duration: "July 2024 – August 2024",
      location: "Delhi",
      tasks: [
        "Implemented Python-based modules with reusable components and clear logic to assess AI model robustness",
        "Developed modular code for different attack strategies to improve attack strength through ensemble techniques and iteration between attacks"
      ]
    },
    {
      company: "Kommunicate",
      position: "Software Engineering Intern",
      duration: "January 2024 – February 2024",
      location: "Remote",
      tasks: [
        "Created localized website systems using React-i18next, increasing multilingual support for various languages",
        "Worked on front-end and back-end projects to support languages across a range of browsers with right-to-left text support"
      ]
    },
    {
      company: "DRDO RAC",
      position: "Web Dev Trainee",
      duration: "January 2023 – February 2023",
      location: "Delhi",
      tasks: [
        "Developed secure PHP-based backend logic with emphasis on minimal-code APIs and streamlined validation procedures",
        "Built centralized document handling systems for improved workflow management"
      ]
    }
  ];

  const education = [
    {
      institution: "GB Pant Institute of Engineering and Technology",
      degree: "B.Tech in Computer Science",
      duration: "October 2021 – July 2025",
      location: "Pauri Garhwal, Uttarakhand",
      grade: "CGPA: 7.51/10"
    },
    {
      institution: "Bharatiya Vidya Bhavan's Mehta Vidyalaya",
      degree: "Senior Secondary, CBSE Board",
      duration: "July 2021",
      location: "Delhi",
      grade: "85%"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Curriculum Vitae</h1>
        <p className="text-lg text-muted-foreground">
          Complete academic and professional background
        </p>
      </div>

      {/* Summary */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Professional Summary
        </h2>
        <div className="bg-muted/30 rounded-lg p-6 border">
          <p className="text-foreground leading-relaxed">
            Computer Science graduate with expertise in backend development for scalable systems, 
            secure API integration, and adversarial robustness evaluation. Knowledgeable about MLOps 
            tools like DVC and MLflow, as well as Python, PHP, Docker, and Git. Currently developing 
            automation workflows and reproducible pipelines, with a keen interest in system reliability 
            and functional programming.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-6 border">
              <div className="space-y-3">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground">{exp.position}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-6 border">
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{edu.duration}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                <p className="text-foreground font-medium">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Technical Competencies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground mb-2">Programming Languages</h3>
              <p className="text-sm text-muted-foreground">Python, JavaScript, SQL, HTML, CSS, C++</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground mb-2">Frameworks & Libraries</h3>
              <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, React.js, Scikit-Learn</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-foreground mb-2">Tools & Technologies</h3>
              <p className="text-sm text-muted-foreground">Git, Docker, DVC, MLflow, Jupyter Notebook</p>
            </div>
            
            <div>
              <h3 className="font-medium text-foreground mb-2">Core Competencies</h3>
              <p className="text-sm text-muted-foreground">Research, Communication, Teamwork, Problem-Solving</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Contact Information
        </h2>
        
        <div className="bg-muted/30 rounded-lg p-6 border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-foreground"><strong>Email:</strong> gbhattbvb7@gmail.com</p>
              <p className="text-foreground"><strong>Phone:</strong> +91-9625442127</p>
            </div>
            <div>
              <p className="text-foreground"><strong>Location:</strong> Timarpur, Delhi</p>
              <p className="text-foreground"><strong>Institution:</strong> GB Pant Institute of Engineering and Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;