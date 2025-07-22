import { MapPin } from "lucide-react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-start mb-8">
      <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
        <img
          src="/orbitimage.jpg"
          alt="Gaurav Bhatt"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-xl font-bold mb-1">Gaurav Bhatt</h1>
      <p className="text-sm text-muted-foreground mb-4">
        Machine Learning | Full Stack | MLOps
      </p>

      <div className="space-y-1 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Timarpur, Delhi</span>
        </div>
        <div className="flex items-center gap-2">
          <span>📞</span>
          <span>+91-9625442127</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🏢</span>
          <span>
            GB Pant Institute of Engineering and Technology
          </span>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <a
          href="mailto:gbhattbvb7@gmail.com?subject=Hello%20there!"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <FaEnvelope className="w-4 h-4 text-gray-600" />
          <span>Email</span>
        </a>
        <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <FaXTwitter className="w-4 h-4 text-black" />
          <span>X</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/gaurav-bhatt-293596224/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <FaLinkedin className="w-4 h-4" style={{ color: "#0077B5" }} />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/gbhatt7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <FaGithub className="w-4 h-4 text-black" />
          <span>Github</span>
        </a>
        <a 
          href="https://leetcode.com/u/gbhatt7/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <SiLeetcode className="w-4 h-4" style={{ color: "#FFA116" }} />
          <span>LeetCode</span>
        </a>
        <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <FaInstagram className="w-4 h-4" style={{ color: "#E4405F" }} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
