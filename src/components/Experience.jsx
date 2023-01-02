import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/Bootstrap.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import reactimg from "../assets/reactimg.png";
import github from "../assets/github.png";
import C from "../assets/C.png";
import C_plus_plus from "../assets/C_plus_plus.png";


const Experience = () => {
  const port = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: reactimg,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
    {
        id: 7,
        src: C,
        title: "C",
        style: "shadow-blue-800",
      },
      {
        id: 7,
        src: C_plus_plus,
        title: "C++",
        style: "shadow-blue-900",
      },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b  from-gray-800  to-black w-full h-full py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            {" "}
            Experience
          </p>
          <p className="py-6">I am quite familiar with these :</p>
        </div>

        {/* <div classname=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"> */}
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-12'>
          {port.map(({ id, style, title, src }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-8 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
// grid grid-cols-2 sm:grid-cols-3
