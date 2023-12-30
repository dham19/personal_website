"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="py-1 px-1 pb-[300px] background-container w-full bg-fixed">
      <div className="mt-20 ml-5 mr-5">
        <h1 className="text-gray-600 text-center border-b">About Me</h1>
        <p className="mt-5 mb-2 ">
          I am someone deeply passionate about unlocking the potential within
          myself and others. Driven by curiosity and a thirst for knowledge, I
          thrive on exploring diverse interests that range from the intricacies
          of technology to the depths of human psychology. My journey has been a
          tapestry woven with experiences, each contributing to my growth and
          shaping my perspective. I find solace in creativity, whether through
          crafting code that brings ideas to life or in the expressive strokes
          of a paintbrush on canvas.
        </p>
        <p className="">
          My approach to life is anchored in a blend of determination and
          adaptability. I believe in the power of resilience, constantly
          evolving to meet challenges head-on and embracing change as an
          opportunity for growth. Empathy forms the cornerstone of my
          interactions, fostering connections that transcend boundaries. Beyond
          my pursuits, I find joy in the simple moments—a captivating book, the
          melody of a piano, or the tranquility of nature—that fuel my spirit
          and remind me of the beauty in life's tapestry.
        </p>
      </div>
    </div>
  );
}
