"use client";
import Link from "next/link";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { menuSlide } from "./anim";

const LeftSidebar = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
          className="hidden h-screen flex-col overflow-hidden 
        bg-orange-50
        p-6 
        shadow-2xl md:flex
        md:w-72 lg:w-[400px]"
        >
          <Link href="/">Back to Introduction </Link>
          <br />
          <Link href="/countries">Countries</Link>
          <br />
          <Link href="/heatmap">Heatmap</Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default LeftSidebar;
