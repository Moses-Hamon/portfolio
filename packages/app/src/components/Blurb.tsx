import { FC } from "react";
import { classNames } from "../utils";

interface BlurbProps {
  className?: string;
}

const Blurb: FC<BlurbProps> = ({ className = "", children }) => {
  return <div className={classNames(className)}>{children}</div>;
};

export default Blurb;
