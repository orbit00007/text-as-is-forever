import { Mail, Twitter, Linkedin, Github, Youtube, MapPin } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-start mb-8">
      <div className="w-24 h-24 rounded-full mb-4 overflow-hidden">
        <img 
          src="/lovable-uploads/29b3f164-8417-4271-8a40-c96f3c1f5853.png" 
          alt="Boris Meinardus" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-xl font-bold mb-1">Boris Meinardus</h1>
      <p className="text-sm text-muted-foreground mb-4">Multi-Modal Learning</p>
      
      <div className="space-y-1 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Berlin, Germany</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🏢</span>
          <span>Fraunhofer Heinrich Hertz Institute</span>
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <Mail className="w-4 h-4" />
          <span>Email</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <Twitter className="w-4 h-4" />
          <span>Twitter</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <Linkedin className="w-4 h-4" />
          <span>LinkedIn</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <Github className="w-4 h-4" />
          <span>Github</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <Youtube className="w-4 h-4" />
          <span>YouTube</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;