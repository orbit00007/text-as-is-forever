import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/publications", label: "Publications" },
    { path: "/projects", label: "Projects" },
    { path: "/cv", label: "CV" },
  ];

  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-foreground">
            Gaurav Bhatt
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;