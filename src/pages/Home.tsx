const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Academic Pages is a ready-to-fork GitHub Pages template for academic personal websites
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-6">
            This is the front page of a website that is powered by the{" "}
            <a href="https://github.com/academicpages/academicpages.github.io" className="text-blue-600 hover:underline">
              Academic Pages template
            </a>{" "}
            and hosted on GitHub pages. GitHub pages is a free service in which websites are built and 
            hosted from code and data stored in a GitHub repository, automatically updating when a new 
            commit is made to the repository.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            You can fork{" "}
            <a href="https://github.com/academicpages/academicpages.github.io" className="text-blue-600 hover:underline">
              this template
            </a>{" "}
            right now, modify the configuration and Markdown files, add your own PDFs and other content, 
            and have your own site for free, with no ads!
          </p>
        </div>
      </div>

      {/* A data-driven personal website */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          A data-driven personal website
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-6">
            Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate 
            the website's content from its form. The content & metadata of your website are in 
            structured Markdown files, while various other files constitute the theme, specifying 
            how to transform that content & metadata into HTML pages.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            You keep these various Markdown (.md), YAML (.yml), HTML, and CSS files in a public 
            GitHub repository. Each time you commit and push an update to the repository, the{" "}
            <a href="https://pages.github.com/" className="text-blue-600 hover:underline">
              GitHub pages
            </a>{" "}
            service creates static HTML pages based on these files, which are hosted on GitHub's 
            servers free of charge.
          </p>
          
          <p className="text-lg leading-relaxed">
            Many of the features of dynamic content management systems (like Wordpress) can be 
            achieved in this fashion, using a fraction of the computational resources and with 
            far less vulnerability to hacking and DDoSing. You can also modify the theme to your 
            heart's content without touching the content of your site.
          </p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          About Gaurav Bhatt
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-lg leading-relaxed mb-6">
            I am a Computer Science graduate from GB Pant Institute of Engineering and Technology 
            with expertise in backend development for scalable systems, secure API integration, and 
            adversarial robustness evaluation. I am knowledgeable about MLOps tools like DVC and MLflow, 
            as well as Python, PHP, Docker, and Git.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Currently, I am developing automation workflows and reproducible pipelines, with a keen 
            interest in system reliability and functional programming. My research focuses on bridging 
            machine learning and cybersecurity, particularly in adversarial robustness evaluation.
          </p>
          
          <p className="text-lg leading-relaxed">
            I have practical experience in full-stack development, AI chatbot implementation, and 
            cybersecurity threat detection. My work has been recognized at prestigious competitions 
            including IIT Roorkee's Cognizance and Thomso events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;