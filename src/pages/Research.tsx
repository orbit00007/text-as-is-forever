import Header from "@/components/Header";

const Research = () => {
  const research = [
    {
      title: "Combined Adversarial Attack (CoAA)",
      status: "Under 2nd Review – IJMLC, Springer 2025",
      description: [
        "Create the CoAA (Combined Adversarial Attack) framework to evaluate deep learning vulnerabilities by combining FGSM, PGD, HSJA, CW, and ZOO attacks.",
        "Developed a unique evaluation pipeline to rank attack strategies based on F1 Score, adversarial accuracy, L2 norm, and attack time.",
        "Using IBM ART toolbox and TensorFlow, experiments were carried out on CIFAR-10, with batch sizes and computational efficiency optimized."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-8">Research</h1>
          
          <div className="space-y-8">
            {research.map((paper, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-foreground mb-2">{paper.title}</h2>
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                    {paper.status}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {paper.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Research Interests</h2>
            <div className="bg-card p-6 rounded-lg border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span>🔬</span>
                    Primary Focus
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Machine Learning & Cybersecurity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Adversarial Robustness Evaluation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Deep Learning Vulnerabilities</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span>🛠️</span>
                    Technical Areas
                  </h3>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>MLOps & Automation Workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>System Reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Functional Programming</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;