import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Home = () => {
  const [text, setText] = useState('');
  const name = "Akshay Negi";
  const roles = ["Mobile App Developer", "Flutter Expert", "UI/UX Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(name.substring(0, index));
      index++;
      if (index > name.length) {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black min-h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{text}</span>
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl mb-8 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {roles[roleIndex]}
        </motion.p>
        <motion.p 
          className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Crafting innovative mobile solutions and pushing the boundaries of user experience.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            View Projects
          </Link>
          <Link to="/contact" className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition duration-300">
            Contact Me
          </Link>
        </motion.div>
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <a href="https://github.com/akshubawa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/akshay-negi-86b617252/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://medium.com/@akshubawa70" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
            <FaMedium size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;