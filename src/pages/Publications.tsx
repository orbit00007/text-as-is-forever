const Publications = () => {
  const publications = [
    {
      title: "Combined Adversarial Attack (CoAA) Framework for Deep Learning Vulnerability Assessment",
      status: "Under 2nd Review",
      journal: "IJMLC, Springer 2025",
      description: "Created the CoAA framework to evaluate deep learning vulnerabilities by combining FGSM, PGD, HSJA, CW, and ZOO attacks. Developed a unique evaluation pipeline to rank attack strategies based on F1 Score, adversarial accuracy, L2 norm, and attack time.",
      keywords: ["Adversarial Machine Learning", "Deep Learning Security", "Attack Evaluation", "TensorFlow", "IBM ART"],
    }
  ];

  const presentations = [
    {
      title: "Map-To-Image Translation Using Pix2Pix GAN",
      event: "11th International Polish Scientific Conference",
      location: "Erzurum, Turkey",
      date: "June 20-21, 2025",
      description: "Presented research on creating realistic satellite images from abstract map renderings utilizing Generative Adversarial Networks (GANs), specifically Pix2Pix.",
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">Publications & Research</h1>
        <p className="text-lg text-muted-foreground">
          My research focuses on adversarial machine learning and cybersecurity applications
        </p>
      </div>

      {/* Publications Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Publications
        </h2>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-6 border">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">{pub.title}</h3>
                
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                    {pub.status}
                  </span>
                  <span className="bg-secondary/10 text-secondary-foreground px-2 py-1 rounded">
                    {pub.journal}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pub.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Keywords:</p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword, idx) => (
                      <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conference Presentations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Conference Presentations
        </h2>
        
        <div className="space-y-6">
          {presentations.map((pres, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-6 border">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">{pres.title}</h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>📍 {pres.event}</span>
                  <span>🌍 {pres.location}</span>
                  <span>📅 {pres.date}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pres.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Areas */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
          Research Areas
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Primary Focus</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>🔬</span>
                <span>Adversarial Machine Learning and Attack Evaluation</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🛡️</span>
                <span>Cybersecurity Threat Detection using AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🤖</span>
                <span>Deep Learning Model Robustness</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Technical Areas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>⚙️</span>
                <span>MLOps and Automation Workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔧</span>
                <span>System Reliability and Performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📊</span>
                <span>Data Pipeline Engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;