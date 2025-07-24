const Header = () => {
  return (
    <header className="w-full py-6 mb-8">
      <nav className="flex gap-8">
        <a href="/" className="font-medium text-foreground hover:text-muted-foreground transition-colors">
          Boris's Homepage
        </a>
        <a href="/cv" className="text-muted-foreground hover:text-foreground transition-colors">
          CV
        </a>
        <a href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
          Portfolio
        </a>
        <a href="/publications" className="text-muted-foreground hover:text-foreground transition-colors">
          Publications
        </a>
      </nav>
    </header>
  );
};

export default Header;