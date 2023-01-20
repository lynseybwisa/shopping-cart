import React from "react";
import Navbar from "../navbar/Navbar";

type IProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <div className="flex h-screen bg-backgroundGrey">
        <div className="flex flex-col flex-1 w-full">
          <Navbar />
          <div className="h-full pb-16 overflow-y-auto">
            <div className="grid px-6 mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
