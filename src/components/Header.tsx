import React from 'react';
import { Menu, Bell, User, Search, Award } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  showMenuButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, showMenuButton = false }) => {
  return (
    <header className="gov-header">
      <div className="bg-blue-800 text-white py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-4">
              <span>📞 Helpline: 1800-123-4567</span>
              <span>📧 support@pminternship.gov.in</span>
            </div>
            <div className="text-right">
              <span>Last Updated: December 9, 2024</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-4 py-3 md:px-6 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-4">
          {showMenuButton && (
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
          
          <div className="flex items-center space-x-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Government of India"
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold gov-text-primary">
                Prime Minister's Internship Scheme
              </h1>
              <p className="text-sm gov-text-secondary">Government of India</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-50 border border-gray-300 rounded-md px-3 py-2">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm w-64 text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Notifications */}
          <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium gov-text-primary">John Doe</p>
              <p className="text-xs gov-text-secondary">Student ID: PM2024001</p>
            </div>
            <button className="p-2 rounded-full bg-blue-800 text-white">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;