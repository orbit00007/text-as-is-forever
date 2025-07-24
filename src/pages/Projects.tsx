import Header from "@/components/Header";

const Projects = () => {
  const projects = [
    {
      title: "Map-To-Image Translation Using Pix2Pix GAN",
      tech: "Pix2Pix, GAN",
      date: "Jun 2024",
      description: [
        "Create realistic satellite images from abstract map renderings by utilizing Generative Adversarial Networks (GANs), in particular Pix2Pix.",
        "Execute and refine the Pix2Pix GAN design. Use common metrics for image quality to assess performance.",
        "Showcase usefulness in applications related to urban planning.",
        "Presented it at the 11th International Polish Scientific Conference in Erzurum, Turkey, June 20–21, 2025."
      ]
    },
    {
      title: "Cybersecurity Threat AI (Prototype)",
      tech: "LLMs, GNNs",
      date: "Mar 2024",
      description: [
        "Large language models and graph-based threat modeling were combined to enable real-time detection.",
        "Placed second in the 2024 Cognizance competition at IIT Roorkee."
      ]
    },
    {
      title: "VANET Anomaly Detection",
      tech: "GRU, PyTorch",
      date: "Jun 2024",
      description: [
        "PyTorch, GRU High recall for anomaly classification in vehicular networks is achieved by a trained GRU-based system."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Projects</h1>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-2">{project.title}</h2>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full">
                        {project.tech}
                      </span>
                      <span className="text-muted-foreground">{project.date}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{desc}</span>
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

export default Projects;