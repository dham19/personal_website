"use client";

import React, { useState, useEffect } from "react";

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        id="about"
        className="flex flex-col place-items-center background-container bg-fixed md:px-10 md:py-10"
      >
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex w-full p-4 md:w-1/3 md:ml-24 md:mr-10 md:p-0">
            <img
              className="object-contain"
              src="louis_hype.jpeg"
              alt="louis_image"
            />
          </div>
          <div className="flex flex-col w-full p-2 md:p-0 md:w-2/3 md:mr-24">
            <h2 className="flex text-gray-700 mb-5 text-2xl">My Story</h2>
            {children}
            {/* <i>
              Successful leadership is not about being tough or soft, sensitive
              or assertive, but about a set of attributes. First and foremost is
              character. --- John Wooden
            </i> */}
          </div>
        </div>
      </div>
    </>

    // <div
    //   id="about"
    //   className="py-1 px-1 pb-[300px] background-container w-full bg-fixed"
    // >
    //   <div className="mt-20 ml-5 mr-5">
    //     <h1 className="text-gray-600 text-center border-b">About Me</h1>
    //     <p className="mt-5 mb-2 ">
    //       I am someone deeply passionate about unlocking the potential within
    //       myself and others. Driven by curiosity and a thirst for knowledge, I
    //       thrive on exploring diverse interests that range from the intricacies
    //       of technology to the depths of human psychology. My journey has been a
    //       tapestry woven with experiences, each contributing to my growth and
    //       shaping my perspective. I find solace in creativity, whether through
    //       crafting code that brings ideas to life or in the expressive strokes
    //       of a paintbrush on canvas.
    //     </p>
    //     <p className="">
    //       My approach to life is anchored in a blend of determination and
    //       adaptability. I believe in the power of resilience, constantly
    //       evolving to meet challenges head-on and embracing change as an
    //       opportunity for growth. Empathy forms the cornerstone of my
    //       interactions, fostering connections that transcend boundaries. Beyond
    //       my pursuits, I find joy in the simple moments—a captivating book, the
    //       melody of a piano, or the tranquility of nature—that fuel my spirit
    //       and remind me of the beauty in life's tapestry.
    //     </p>
    //   </div>
    // </div>
  );
}
