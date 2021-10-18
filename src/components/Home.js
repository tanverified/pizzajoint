import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVarient = {
  hover:{
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity
    }
  }
}

const Home = () => {
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay: 1.5, duration: 1.5}}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVarient}
          whileHover="hover"
        >Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
