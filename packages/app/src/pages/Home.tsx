import { FC } from "react";
import { classNames } from "../utils";

const Home: FC<{ className?: string }> = ({ className = "", children }) => {
  return <div className={classNames(className, "w-9/12")}>Content</div>;
};

export default Home;
