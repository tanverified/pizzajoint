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

const containerVarients ={
  hidden:{opacity: 0 },
  visible:{
    opacity: 1 ,
    transition:{delay: 1.5, duration: 1.5}
  },
  exit:{
    x:'-100vw',
    transition: {ease:"easeInOut"}
  }
}



const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit="exit"
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
