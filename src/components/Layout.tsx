import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex">
          {/* Sidebar - Fixed width */}
          <div className="w-80 min-h-screen border-r border-gray-200 bg-gray-50/30">
            <Sidebar />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;