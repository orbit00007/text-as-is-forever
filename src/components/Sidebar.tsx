import { MapPin, Mail, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm border">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-muted">
          <img
            src="/orbitimage.jpg"
            alt="Gaurav Bhatt"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Gaurav Bhatt</h1>
        <p className="text-muted-foreground">
          Computer Science Graduate
        </p>
      </div>

      {/* Bio */}
      <div className="mb-6 text-sm text-muted-foreground">
        <p>
          Machine Learning | Full Stack | MLOps specialist with expertise in 
          adversarial robustness evaluation and scalable system development.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span>Timarpur, Delhi</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <span className="text-muted-foreground">🏢</span>
          <span>GB Pant Institute of Engineering and Technology</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <a 
            href="mailto:gbhattbvb7@gmail.com"
            className="text-primary hover:underline"
          >
            gbhattbvb7@gmail.com
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground mb-3">Connect</h3>
        
        <a
          href="https://www.linkedin.com/in/gaurav-bhatt-293596224/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaLinkedin className="w-4 h-4" style={{ color: "#0077B5" }} />
          <span>LinkedIn</span>
          <ExternalLink className="w-3 h-3 ml-auto" />
        </a>
        
        <a
          href="https://github.com/gbhatt7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          <span>GitHub</span>
          <ExternalLink className="w-3 h-3 ml-auto" />
        </a>
        
        <a
          href="https://leetcode.com/u/gbhatt7/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <SiLeetcode className="w-4 h-4" style={{ color: "#FFA116" }} />
          <span>LeetCode</span>
          <ExternalLink className="w-3 h-3 ml-auto" />
        </a>
        
        <a
          href="#"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaXTwitter className="w-4 h-4" />
          <span>X (Twitter)</span>
          <ExternalLink className="w-3 h-3 ml-auto" />
        </a>
        
        <a
          href="#"
          className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaInstagram className="w-4 h-4" style={{ color: "#E4405F" }} />
          <span>Instagram</span>
          <ExternalLink className="w-3 h-3 ml-auto" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;