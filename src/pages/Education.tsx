import Header from "@/components/Header";

const Education = () => {
  const education = [
    {
      institution: "GB Pant Institute of Engineering and Technology, Uttarakhand",
      degree: "B.Tech in Computer Science",
      duration: "Oct 2021 – Jul 2025",
      location: "Pauri Garhwal, Uttarakhand",
      grade: "CGPA: 7.51/10"
    },
    {
      institution: "Bharatiya Vidya Bhavan's Mehta Vidyalaya",
      degree: "Senior Secondary, CBSE Board",
      duration: "Jul 2021",
      location: "Delhi",
      grade: "85%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Education</h1>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2">{edu.institution}</h2>
                    <h3 className="text-lg text-primary font-medium mb-2">{edu.degree}</h3>
                    <div className="text-muted-foreground">{edu.location}</div>
                  </div>
                  <div className="text-muted-foreground text-sm md:text-right">
                    <div className="font-medium">{edu.duration}</div>
                    <div className="text-primary font-semibold mt-1">{edu.grade}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Academic Background</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-foreground leading-relaxed">
                Computer Science graduate with expertise in backend development for scalable systems, secure API integration, and
                adversarial robustness evaluation. Knowledgeable about MLOps tools like DVC and MLflow, as well as Python, PHP,
                Docker, and Git. Presently developing automation workflows and reproducible pipelines, with a keen interest in system
                reliability and functional programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;