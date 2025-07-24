import Header from "@/components/Header";

const Experience = () => {
  const experiences = [
    {
      company: "Smartbotics",
      position: "Software Development Intern",
      duration: "March 2025 – May 2025",
      location: "Remote",
      tasks: [
        "React.js, JavaScript, and Typescript were used to develop full-stack features for the company's AI-driven platform website.",
        "AI chatbots were developed and put into use to manage automated user inquiries and optimize customer interaction processes.",
        "Dockerized application components facilitate easier integration and scalable, portable deployment."
      ]
    },
    {
      company: "DRDO SAG",
      position: "Industrial Trainee",
      duration: "Jul 2024 – Aug 2024",
      location: "Delhi",
      tasks: [
        "Python-based modules with reusable parts and clear logic were implemented to assess the robustness of AI models.",
        "Developed modular code for different attack strategies to improve the attack strength through ensemble techniques and iteration between attacks."
      ]
    },
    {
      company: "Kommunicate",
      position: "Software Engineering Intern",
      duration: "Jan 2024 – Feb 2024",
      location: "Remote",
      tasks: [
        "React-i18next was used to create localized website systems, increasing multilingual support for languages.",
        "Worked on front-end and back-end projects to support languages across a range of browsers from right to left."
      ]
    },
    {
      company: "DRDO RAC",
      position: "Web Dev Trainee",
      duration: "Jan 2023 – Feb 2023",
      location: "Delhi",
      tasks: [
        "Secure PHP-based backend logic was developed with an emphasis on minimal-code APIs and streamlined validation procedures for centralized document handling."
      ]
    },
    {
      company: "Kommunicate",
      position: "Web Development Intern",
      duration: "Jan 2023 – Feb 2023",
      location: "Bangalore",
      tasks: [
        "Researched support for multiple languages.",
        "Primarily worked on the website's front end using React.js and other JS tools."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Experience</h1>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">{exp.company}</h2>
                    <h3 className="text-lg text-primary font-medium">{exp.position}</h3>
                  </div>
                  <div className="text-muted-foreground text-sm md:text-right">
                    <div>{exp.duration}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;