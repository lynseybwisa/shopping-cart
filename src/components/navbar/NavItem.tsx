import React from "react";

interface IProps {
    text: string;
  }

const NavItem = ({ text }: IProps) => {
  return (
    <div>
      <li>
        <a
          href="#"
          className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
          aria-current="page"
        >
          {text}
        </a>
      </li>
    </div>
  );
};

export default NavItem;
