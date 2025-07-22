const Header = () => {
  return (
    <header className="w-full mb-8">
      <nav className="w-[95%] mx-auto bg-card border rounded-2xl px-8 py-4 shadow-sm">
        <div className="flex justify-center gap-8">
          <a
            href="/"
            className="font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
          >
            About
          </a>
          <a
            href="/skills"
            className="text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
          >
            Skills
          </a>
          <a
            href="/experience"
            className="text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
          >
            Experience
          </a>
          <a
            href="/education"
            className="text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted"
          >
            Education
          </a>
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
    </header>
  );
};

export default Header;
