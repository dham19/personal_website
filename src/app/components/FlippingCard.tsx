"use client";
// TODO:
// make expanded and contracted boxes dynamic widths, not fixed pixels
// downloadable CV
// Make Work experience and education dynamic

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function FlippingCard() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "1500px",
      height: "500px",
    },
    collapsed: {
      width: "400px",
      height: "150px",
    },
  };
  //   Upper content
  //   WIll probably have to make a different data structure for each if theyre so different
  const titles1 = ["Work Experience", "Education"];
  const work_experience = [
    // Job 1
    [
      ["/textron.png"],
      ["Textron"],
      ["M&A Tax Intern"],
      ["Providence, RI"],
      ["Summer 2022"],
      [
        "Conducted comprehensive financial data analysis, identifying discrepancies and proposing corrective measures, contributing to a 15% reduction in accounting errors within the audit department",
        "Collaborated with cross-functional teams to streamline audit processes, resulting in the implementation of new software tools, improving operational efficiency by 20%",
        "Assisted in the preparation of audit reports and presentations for senior management, effectively communicating complex financial findings and recommendations for process enhancements.",
      ],
    ],
    // Job 2...
    [
      ["/nps.png"],
      ["National Park Service"],
      ["Surf Lifeguard"],
      ["Sandy Hook National Park, NJ"],
      ["Summer 2021"],
      [
        "Performed 20+ ocean rescues and enforced safety protocols with ~ 60 guard team at Gateway National Recreation Area, a top tourist destination of the NJ shore attracting up to 30,000 visitors a day with upwards of 700 rescues a season",
        "CPR certified",
        "",
      ],
    ],
  ];
  const education = [
    "education_image.png",
    "Education Title",
    "School",
    "Major",
    ["GPA", "Major"],
  ];

  const titles2 = ["", "", "Awards & Accolades", "Skills & Hobbies"];

  // name then description
  const lower_content = [
    [
      [
        "ACC All Academic Student Athlete",
        "As an athlete of Clemson University, I pride myself in running ",
      ],
      ["award 2", "desc"],
      ["award 3", "desc"],
    ],
    [
      ["Hobby 1", "desc"],
      ["Hobby 2", "desc"],
      ["Hobby 3", "desc"],
    ],
  ];

  return (
    <div className="py-1 px-1 pb-[300px] background-container w-full bg-fixed">
      <section className="mt-40">
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5">
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[150px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundColor: "#AC8080",
              }}
            >
              <div className="card-content h-full flex flex-col justify-start">
                <div className="card-footer rounded-b-[20px] bg-white min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold text-black text-center">
                    {titles1[index]}
                  </h2>
                  {index === expandedIndex && (
                    <div className="flex-col overflow-y-auto">
                      {index === 0 &&
                        work_experience.map((item) => (
                          <div className="flex flex-row gap-5 mb-10 ml-5 mr-5">
                            <div className="flex-1 max-w-[33.34%]">
                              <img src={`${item[0]}`} alt="job_image" />
                            </div>
                            <div className="flex-1 max-w-[66.6%]">
                              <div className="flex-col">
                                <div className="flex flex-row justify-between">
                                  <h3
                                    id="company"
                                    className="font-bold text-lg text-black"
                                  >
                                    {item[1][0]}
                                  </h3>
                                  <h3
                                    id="location"
                                    className="font-bold text-lg text-black"
                                  >
                                    {item[3][0]}
                                  </h3>
                                </div>
                                <div className="flex flex-row justify-between">
                                  <h3 className="italic text-black">
                                    {item[2][0]}
                                  </h3>
                                  <h3 className="italic text-black">
                                    {item[4][0]}
                                  </h3>
                                </div>
                              </div>
                              <ul className="list-disc pl-6">
                                {item[5].map((bullet) => (
                                  <li className="mb-2">{bullet}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      {index === 1 && <h1>hello</h1>}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5">
          {[2, 3].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[150px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundColor: "#AC8080",
              }}
            >
              <div className="card-content h-full flex flex-col justify-start">
                <div className="card-footer rounded-b-[20px] bg-white  min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold text-black text-center">
                    {titles2[index]}
                  </h2>
                  {index === expandedIndex && (
                    // <p className="mt-2 text-gray-300 text-center">
                    //   {cardDescriptions[index]}{" "}
                    // </p>
                    <ul className="grid place-items-center overflow-y-auto w-full">
                      {lower_content[index - 2].map((item) => (
                        <div className="mb-5 grid place-items-center">
                          <li className="font-bold text-black "> {item[0]}</li>
                          <li className=" text-black italic"> {item[1]}</li>
                        </div>
                        // <li className="p-5">
                        //   <p className="font-bold text-white ">{item[0]}</p>
                        //   <p className="text-white">{item[1]}</p>
                        // </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
