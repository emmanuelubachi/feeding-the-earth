"use client";
import Link from "next/link";
import React from "react";

// import { AnimatePresence, motion } from "framer-motion";
// import { menuSlide } from "./anim";

const LeftSidebar = () => {
  return (
    <>
      <div
        className="fixed z-10 hidden h-screen flex-col overflow-hidden 
        bg-orange-50 p-6 
        shadow-2xl md:flex
        md:w-72 lg:w-[400px]"
      >
        <Link href="/">Back to Introduction </Link>
        <br />
        <Link href="/countries">Countries</Link>
        <br />
        <Link href="/heatmap">Heatmap</Link>
        <br />
        <Link href="/map">Map</Link>
      </div>
    </>
  );
};

export default LeftSidebar;
