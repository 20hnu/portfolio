import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-20">
            I'm a beginner.
          </h2>
          <p className="text-gray-500 py-2  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            labore, sint id soluta reiciendis quae laborum reprehenderit,
            cupiditate repellendus rem corrupti itaque voluptatum. Excepturi in
            ab vitae deserunt cumque maxime laborum tempore blanditiis debitis.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-2 my-4 flex items-center gap-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <Link to={"portfolio"} smooth={true} duration={100}>
                <span className="group-hover:rotate-90 duration-300">
                  <BiRightArrowAlt size={25} />
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-1/2 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
