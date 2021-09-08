import { FC } from "react";
import { classNames } from "../utils";

interface BlurbProps {
  className?: string;
  image?: string;
}

const Blurb: FC<BlurbProps> = ({ className = "", image, children }) => {
  return (
    <div className={classNames(className)}>
      <div className="flex py-8 justify-between">
        {children}
        {image && (
          <img src={image} alt="avatar" className="rounded-3xl h-1/5 w-1/5" />
        )}
      </div>
    </div>
  );
};

export default Blurb;
