import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLaptopCode,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-fsblack text-fswhite min-h-screen sm:w-1/3 2xl:w-1/5">
      <div className="logo container flex text-xl p-8">
        <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`{`}</p>
        <h1 className="font-bold">Formula Studio</h1>
        <p className="font-black bg-green-gradient bg-clip-text text-transparent">{`}`}</p>
      </div>

      <nav className="flex flex-col h-[48rem] p-8 justify-between">
        <ul className="space-y-8 text-xl font-bold">
          <li className="hover:translate-x-3 transition-transform">
            <Link href="/dashboard/" className="flex">
              <FontAwesomeIcon icon={faHouse} className="w-6 mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="hover:translate-x-3 transition-transform">
            <Link href="/dashboard/editor" className="flex">
              <FontAwesomeIcon icon={faLaptopCode} className="w-6 mr-3" />
              <span>Editor</span>
            </Link>
          </li>
          <li className="flex cursor-pointer hover:translate-x-3 transition-transform">
            <FontAwesomeIcon icon={faFolderOpen} className="w-6 mr-3" />
            <span>Projects</span>
          </li>
          <div className="flex cursor-pointer hover:translate-x-3 transition-transform">
          <FontAwesomeIcon icon={faGear} className="w-6 mr-3" />
          <Link href='/dashboard/settings' className="text-xl font-bold">Settings</Link>
        </div>
        </ul>
        
      </nav>
    </div>
  );
};

export default Sidebar;
