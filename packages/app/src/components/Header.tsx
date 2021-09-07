import { FC } from "react";
import { classNames } from "../utils";

const Header: FC<{ className?: string; title?: string }> = ({
  className = "",
  children,
}) => {
  return (
    <div className={classNames(className, "w-full")}>
      <div className="w-full flex h-10 mt-4 mb-6 justify-center text-5xl ">
        <span>About Me</span>
      </div>
      {children}
    </div>
  );
};

export default Header;
