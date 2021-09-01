import { FC } from "react";
import Header from "../../ components/Header";
import { classNames } from "../../utils";

const Home: FC<{ className?: string }> = ({ className = "", children }) => {
  return (
    <div className={classNames(className, "w-9/12")}>
      <Header title="About Me" />
    </div>
  );
};

export default Home;
