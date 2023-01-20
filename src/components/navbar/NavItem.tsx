import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  text: string;
  routeHref: string;
}

const NavItem = ({ text, routeHref }: IProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <li>
        <Link to={routeHref}>
          <a
            href="#"
            className={`block py-2 pl-3 pr-4 text-white ${(routeHref) ? "bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" : ""}`}
            aria-current="page"
          >
            {text}
          </a>
        </Link>
      </li>
    </div>
  );
};

export default NavItem;
