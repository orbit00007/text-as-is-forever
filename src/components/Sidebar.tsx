import { MapPin, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaOrcid } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGooglescholar } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="p-8 pt-12">
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
          <img
            src="/orbitimage.jpg"
            alt="Gaurav Bhatt"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Bio */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Gaurav Bhatt</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Computer Science graduate with expertise in machine learning, cybersecurity, 
          and full-stack development. Passionate about adversarial robustness evaluation 
          and MLOps automation.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>Timarpur, Delhi</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <span className="text-gray-500">🏢</span>
          <span>GB Pant Institute of Engineering and Technology</span>
        </div>
        
        <div className="flex items-center gap-3 text-sm">
          <Mail className="w-4 h-4 text-gray-500" />
          <a 
            href="mailto:gbhattbvb7@gmail.com"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Email
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-2">
        <a
          href="https://www.linkedin.com/in/gaurav-bhatt-293596224/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          <FaLinkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
        
        <a
          href="https://github.com/gbhatt7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          <FaGithub className="w-4 h-4" />
          <span>GitHub</span>
        </a>
        
        <a
          href="https://leetcode.com/u/gbhatt7/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          <SiLeetcode className="w-4 h-4" />
          <span>LeetCode</span>
        </a>
        
        <a
          href="#"
          className="flex items-center gap-3 text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          <SiGooglescholar className="w-4 h-4" />
          <span>Google Scholar</span>
        </a>
        
        <a
          href="#"
          className="flex items-center gap-3 text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          <FaOrcid className="w-4 h-4" />
          <span>ORCID</span>
        </a>
        
        <a
          href="#"
          className="flex items-center gap-3 text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          <FaXTwitter className="w-4 h-4" />
          <span>X</span>
        </a>
        
        <a
          href="#"
          className="flex items-center gap-3 text-sm text-blue-600 hover:text-blue-800 hover:underline"
        >
          <FaInstagram className="w-4 h-4" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;