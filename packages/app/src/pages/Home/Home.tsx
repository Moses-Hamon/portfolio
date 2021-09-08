import { FC } from "react";
import { classNames } from "../../utils";

import avatar from "../../assets/avatar-moses.jpg";
import avatar2 from "../../assets/avatar-scarlett-moses.jpg";
import avatar3 from "../../assets/avatar-moses-ariyah.jpg";
import Blurb from "../../components/Blurb";
import Header from "../../components/Header";

const Home: FC<{ className?: string }> = ({ className = "", children }) => {
  return (
    <div className={classNames(className, "container bg-gray-50 px-24")}>
      <Header title="About Me" />
      <h2 className="text-4xl mt-8">Moses Hamon - Fullstack Developer</h2>
      <Blurb className="" image={avatar}>
        <p className="">
          <strong>Background</strong> - Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda possimus aperiam voluptates veritatis
          iusto temporibus esse delectus dolorum, ea fuga ab tenetur, sequi
          itaque corporis fugiat deserunt aut vero exercitationem.{" "}
        </p>
      </Blurb>
      <div className="flex">
        <img src={avatar2} alt="avatar" className="rounded-3xl h-1/5 w-1/5" />
        <Blurb className="w-2/3" />
      </div>
      <div className="flex">
        <Blurb className="w-2/3" />
        <img src={avatar3} alt="avatar" className="rounded-3xl h-1/5 w-1/5" />
      </div>
    </div>
  );
};

export default Home;
