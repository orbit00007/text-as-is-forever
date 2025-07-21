import { MapPin } from "lucide-react";
import { FaEnvelope, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <span>Delhi, India</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🏢</span>
          <span>
            Govind Ballabh Pant Institute of Engineering and Techonolgy
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
        <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <FaLinkedin className="w-4 h-4" style={{ color: "#0077B5" }} />
          <span>LinkedIn</span>
        </a>
        <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <FaGithub className="w-4 h-4 text-black" />
          <span>Github</span>
        </a>
        <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <FaYoutube className="w-4 h-4" style={{ color: "#FF0000" }} />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
