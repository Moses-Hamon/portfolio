import { FC } from "react";
import Header from "../../ components/Header";
import { classNames } from "../../utils";

const Home: FC<{ className?: string }> = ({ className = "", children }) => {
  return (
    <div className={classNames(className, "container")}>
      <Header title="About Me" />
      <div className="">
        <h2 className="text-4xl">Moses Hamon - Web Developer</h2>
      </div>
      <div className="flex">
        <div></div>
        <img src="" />
      </div>
    </div>
  );
};

export default Home;
