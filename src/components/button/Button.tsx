import React from "react";

interface IProps {
  type:
  | "extraBig"
  | "iconRight"
  | "iconLeft"
  | "medium"
  | "table"
  | "mediumIconLeft";
  disabled?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  handleClick?: any;
  color?: React.ReactNode;
  additionalClasses?: string;
  buttonColor?: string;
  loading?: any;
}

export const Button = ({
  type,
  disabled,
  secondary,
  fullWidth,
  icon,
  children,
  loading,
  handleClick,
  color,
  buttonColor = "defaultGreen",
  additionalClasses = "",
  ...rest
}: IProps): any => {
  if (type === "iconRight")
    return (
        <div className="py-1 mt-0.5">
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className="relative text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-4 text-center flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <span>{children}</span>
          <div >{icon}</div>
          <div className="rounded-2xl bg-red-700 justify-center text-center text-white inline-flex items-center px-3 py-1 absolute bottom-0 top-8 right-1 w-6 h-6 translate-y-1/4 translate-x-1/4">3</div>
        </button>
        
        </div>
    );

  if (type === "iconLeft")
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        <button
          disabled={disabled ? true : false}
          onClick={handleClick}
          className={`${fullWidth ? "w-full" : ""
            } flex items-center justify-center gap-2 px-4 py-2 text-base font-medium leading-5 text-white transition-colors duration-150 ${disabled ? "cursor-default" : ""
            } ${secondary
              ? `bg-${color} text-defaultGreen active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500`
              : `bg-${color} text-defaultGreen`
            } focus:outline-none disabled:opacity-25`}
          {...rest}
        >
          <div className="ml-4">{icon}</div>
          <span>{children}</span>
        </button>
      </div>
    );
};