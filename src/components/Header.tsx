import { useState } from "react";

interface HeaderProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const Header = ({ activeSection = "about", setActiveSection }: HeaderProps) => {
  return (
    <header className="w-full mb-8 space-y-4">
      {/* Main Navigation */}
      <nav className="w-[95%] mx-auto bg-card border rounded-2xl px-8 py-4 shadow-sm">
        <div className="flex justify-center gap-8">
          <a
            href="/home"
            className="font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
          >
            Home
          </a>
          <button
            onClick={() => setActiveSection?.("about")}
            className={`transition-colors px-4 py-2 rounded-lg hover:bg-muted ${
              activeSection === "about" ? "font-medium text-foreground" : "text-muted-foreground hover:text-primary"
            }`}
          >
            About
          </button>
          <a
            href="/projects"
            className="text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
          >
            Projects
          </a>
          <a
            href="/research"
            className="text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
          >
            Research
          </a>
        </div>
      </nav>

      {/* Section Navigation - only show on main page */}
      {window.location.pathname === "/" && setActiveSection && (
        <nav className="w-[95%] mx-auto bg-card border rounded-2xl px-8 py-3 shadow-sm">
          <div className="flex justify-center gap-6">
            <button
              onClick={() => setActiveSection("skills")}
              className={`transition-colors px-4 py-2 rounded-lg hover:bg-muted text-sm ${
                activeSection === "skills" ? "font-medium text-foreground" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveSection("experience")}
              className={`transition-colors px-4 py-2 rounded-lg hover:bg-muted text-sm ${
                activeSection === "experience" ? "font-medium text-foreground" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection("education")}
              className={`transition-colors px-4 py-2 rounded-lg hover:bg-muted text-sm ${
                activeSection === "education" ? "font-medium text-foreground" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Education
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
