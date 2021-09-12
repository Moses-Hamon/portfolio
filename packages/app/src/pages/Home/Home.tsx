import { FC } from "react";
import { classNames } from "../../utils";

import avatar from "../../assets/avatar-moses.jpg";
import avatar2 from "../../assets/avatar-scarlett-moses.jpg";
import avatar3 from "../../assets/avatar-moses-ariyah.jpg";
import Blurb from "../../components/Blurb";
import Header from "../../components/Header";

const Home: FC<{ className?: string }> = ({ className = "", children }) => {
  return (
    <div
      className={classNames(className, "container bg-gray-50 px-24 mx-auto")}
    >
      <Header title="About Me" />
      <h2 className="text-4xl mt-8 text-center">
        Moses Hamon - Fullstack Web Developer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <Blurb className="" title="Background">
          I am a full stack web developer with 2 years commercial experience.
        </Blurb>
        <img
          src={avatar}
          alt="avatar"
          className="rounded-3xl w-full sm:w-1/3"
        />
        <img src={avatar2} alt="avatar" className="rounded-3xl w-1/3" />
        <Blurb title="Hobbies" className="">
          I am a proud dad of two amazing daughters. My interests include
          programming, camping, fishing, kayaking and spending time with family
          and friends.
        </Blurb>
        <Blurb title="Goals" className="">
          I am keen to further developing my skills with software development
          with the help of study, personal projects, work and learning from
          fellow colleagues. I want to be able tackle problems and efficiently
          provide solutions.
        </Blurb>
        <img src={avatar3} alt="avatar" className="rounded-3xl w-1/3" />
      </div>
    </div>
  );
};

export default Home;
