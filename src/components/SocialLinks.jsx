import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { ImFilePdf } from "react-icons/im";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      name: "Facebook",
      icon: <BsFacebook size={30} />,
      href: "https://www.facebook.com/bishnudbadu.143",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      name: "Gmail",
      icon: <CgMail size={30} />,
      href: "mailto:bishnudattbadu77@gmail.com",
    },
    {
      id: 3,
      name: "Github",
      icon: <BsGithub size={30} />,
      href: "https://github.com/20hnu",
    },
    {
      id: 4,
      name: "Resume",
      icon: <ImFilePdf size={30} />,
      href: "./resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  // const link = [
  //   {
  //     id: 1,
  //     name: "Facebook",
  //     icon: <BsFacebook size={30} />,
  //     href: "https://www.facebook.com/bishnudbadu.143",
  //     style: "rounded-tl-md",
  //   },
  //   {
  //     id: 2,
  //     name: "Gmail",
  //     icon: <CgMail size={30} />,
  //     href: "mailto:bishnudattbadu77@gmail.com",
  //     style: "rounded-bl-md",
  //   },
  // ];
  return (
    <>
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, name, icon, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ml-[-100px] ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                
                  {name} {icon}
                
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="hidden lg:flex flex-col top-[35%] right-0 fixed">
        <ul>
          {link.map(({ id, name, icon, href, style, download }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 hover:mr-[-10px] hover:rounded-md duration-300 bg-gray-500 mr-[-100px] ${style}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                  {icon} {name}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default SocialLinks;
