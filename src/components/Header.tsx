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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-16 px-4">
          <div className="w-80 border-r border-gray-200 pr-4">
            <Link to="/" className="text-lg font-medium text-gray-900">
              Gaurav Bhatt / Computer Scientist
            </Link>
          </div>
          
          <nav className="flex-1 flex items-center space-x-8 pl-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? "text-blue-600 font-medium"
                    : "text-gray-700"
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