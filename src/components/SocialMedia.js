import React from "react";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <div className="container mx-auto text-center flex gap-5 justify-center items-center mt-5 -mb-6 text-white ">
        <a href="https://www.instagram.com/kaustubh.mishra.777/">
          <div className="fa-instagram icons text-2xl hover:text-red-600 transition-all duration-300">
            <FaInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/kaustubh2701/">
          <div className="fa-linkedin icons text-2xl hover:text-red-600 transition-all duration-300">
            <FaLinkedin/>
          </div>
        </a>
        <a href="https://github.com/KaustubhMishra27/">
          <div className="fa-github icons text-2xl hover:text-red-600 transition-all duration-300">
            <FaGithub/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
