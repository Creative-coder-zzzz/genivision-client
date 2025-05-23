import { RiImageCircleFill } from 'react-icons/ri';
import { BiBot } from "react-icons/bi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-4 mt-20 border-t  ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-black hover:opacity-80 transition">
          <RiImageCircleFill className="text-2xl" />
          <h3 className="text-2xl tracking-widest font-bold">Genivision</h3>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-500 text-center md:text-left max-sm:hidden">
          © {new Date().getFullYear()} Sandesh Adhikari. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://sandeshnewportfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="text-black hover:text-red-400  text-3xl hover:scale-125 transform transition duration-300"
          >
            <BiBot />
          </a>

          <a
            href="https://www.linkedin.com/in/sandesh-adhikari-5258822a5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-black text-3xl hover:scale-125 hover:text-blue-800  transform transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Creative-coder-zzzz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-black text-3xl hover:scale-125 hover:text-orange-800 transform transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
