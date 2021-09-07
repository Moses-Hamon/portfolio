import { FC } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
}

const DefaultLayout: FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
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
      <div className="flex w-full justify-center h-screen bg-gray-50">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
