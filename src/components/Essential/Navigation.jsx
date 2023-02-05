import React from "react";
import Link from "next/link";
import { navigationItems } from "@/data";
const Navigation = () => {
  const navItems = () => {
    return navigationItems.map((item, index) => {
      return (
        <li key={index}>
          <Link
            href={item.route}
            className="flex items-center text-2xl py-3 px-8 my-1 hover:bg-background rounded-2xl w-64"
          >
            {item.icon}
            <span className="mx-2">{item.title}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <nav className="sticky mr-10 w-72 h-screen bg-white">
      <ul className="flex flex-col items-center">{navItems()}</ul>
    </nav>
  );
};

export default Navigation;
