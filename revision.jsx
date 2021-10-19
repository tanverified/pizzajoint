import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const elementVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const hoverVarients = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

<>
  <h1>make motion element</h1>
  <motion.div></motion.div>

  <h1>attributes to JSX/motion element</h1>
  <motion.div></motion.div>

  <h1>Motion attributes</h1>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1.5 }}
  ></motion.div>

  <h1>Varients</h1>

  <motion.div
    variants={elementVarients}
    initial="hidden"
    animate="visible"
  ></motion.div>

  <h1>Hover</h1>
  <motion.div whileHover="hover" varients="hoverVarients"></motion.div>

  <h1>keyframe</h1>
  <motion.div
    animate={{ x: [0, 20, 0, 20, 0, 20, 0] }}
    transition={{ delay: 2 }}
  ></motion.div>
  <h1>AnimatePresence</h1>
  <AnimatePresence>
    <motion.div exit={{y: -1000}}></motion.div>
  </AnimatePresence>
</>;

// ***********Notes**************
// if initial and animate attribute name are same for parent and child
// we can remove child attributes
