import classNames from "classnames";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
}

const DefaultLayout: FC<Props> = ({ className = "", children }) => {
  return (
    <div className={classNames(className, "bg-blue-50")}>
      <div className="flex w-full sticky top-0 justify-center items-center bg-gray-100 h-16">
        <NavLink exact to="/" activeClassName="font-bold" className="mr-24">
          About Me
        </NavLink>
        <NavLink
          exact
          to="/projects"
          activeClassName="font-bold"
          className="mr-24"
        >
          Projects
        </NavLink>
        <NavLink
          exact
          to="/education"
          activeClassName="font-bold"
          className="mr-24"
        >
          Education
        </NavLink>
        <NavLink
          exact
          to="/contact"
          activeClassName="font-bold"
          className="mr-24"
        >
          Contact
        </NavLink>
      </div>
      <div className="container mx-auto h-screen ">{children}</div>
    </div>
  );
};

export default DefaultLayout;
