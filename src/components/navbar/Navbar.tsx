import React from "react";
import { Button } from "../button/Button";
import NavItem from "./NavItem";
import { FaShoppingBag } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav className="z-10 py-2 w-full border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between h-full px-4 mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-3 mr-3 sm:h-6"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Bwisa Store
            </span>
          </a>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavItem text="Home" routeHref="/" />
              <NavItem text="About" routeHref="/about" />
              <NavItem text="Store" routeHref="/store" />
              
            </ul>
            <Button type="iconRight" icon={<FaShoppingBag size="20"/> }/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
