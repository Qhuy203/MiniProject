import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Flame, Compass, Tv, Heart } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-center bg-[#1e1e2a] text-white text-[13px] fixed bottom-0 left-0 w-full space-x-2 lg:flex-col lg:justify-center lg:items-center lg:space-y-2 lg:space-x-0 lg:left-3 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-auto z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center px-2 py-2 ${
            isActive ? "text-white" : "text-gray-500 hover:text-white hover:scale-110"
          } transition-all duration-200`
        }
      >
        <Home size={19} className="mb-2" />
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) =>
          `flex flex-col items-center px-2 py-2 ${
            isActive ? "text-white" : "text-gray-500 hover:text-white hover:scale-110"
          } transition-all duration-200`
        }
      >
        <Flame size={19} className="mb-2" />
        <span className="text-xs">Trending</span>
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          `flex flex-col items-center px-2 py-2 ${
            isActive ? "text-white" : "text-gray-500 hover:text-white hover:scale-110"
          } transition-all duration-200`
        }
      >
        <Compass size={19} className="mb-2" />
        <span className="text-xs">Explore</span>
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          `flex flex-col items-center px-2 py-2 ${
            isActive ? "text-white" : "text-gray-500 hover:text-white hover:scale-110"
          } transition-all duration-200`
        }
      >
        <Tv size={19} className="mb-2" />
        <span className="text-xs">Movies</span>
      </NavLink>
      <NavLink
        to="/favorite"
        className={({ isActive }) =>
          `flex flex-col items-center px-2 py-2 ${
            isActive ? "text-white" : "text-gray-500 hover:text-white hover:scale-110"
          } transition-all duration-200`
        }
      >
        <Heart size={19} className="mb-2" />
        <span className="text-xs">Favorite</span>
      </NavLink>
    </nav>
  );
};

export default Sidebar;
