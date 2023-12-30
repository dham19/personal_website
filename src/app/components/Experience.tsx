"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
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
        "something",
      ],
    ],
  ];

  const indexRange = Array.from(
    { length: work_experience.length },
    (_, index) => index
  );

  return (
    <div className="flex flex-col bg-white items-center ">
      <h1 className="mb-5 font-semibold">Where I've been . . . </h1>
      <div>
        {indexRange.map((index) => (
          <motion.div
            key={index}
            className={` bg-cover bg-center rounded-[20px]
          ${index === expandedIndex ? "expanded" : ""}`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
          >
            {index != expandedIndex && (
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src="/textron.png"
                  alt=""
                />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal textxs-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            )}
            {index === expandedIndex && (
              <div className="flex-col overflow-y-auto">
                <h1>Where I've been . . .</h1>
                {index === 0 && (
                  <div className="flex flex-row gap-5 mb-10 ml-5 mr-5">
                    <div className="flex-1 max-w-[33.34%]">
                      <img
                        src={`${work_experience[index][0][0]}`}
                        alt="job_image"
                      />
                    </div>
                    <div className="flex-1 max-w-[66.6%]">
                      <div className="flex-col">
                        <div className="flex flex-row justify-between">
                          <h3
                            id="company"
                            className="font-bold text-lg text-black"
                          >
                            {work_experience[index][1][0]}
                          </h3>
                          <h3
                            id="location"
                            className="font-bold text-lg text-black"
                          >
                            {work_experience[index][3][0]}
                          </h3>
                        </div>
                        <div className="flex flex-row justify-between">
                          <h3 className="italic text-black">
                            {work_experience[index][2][0]}
                          </h3>
                          <h3 className="italic text-black">
                            {work_experience[index][4][0]}
                          </h3>
                        </div>
                      </div>
                      <ul className="list-disc pl-6">
                        {work_experience[index][5].map((bullet) => (
                          <li className="mb-2">{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
            {/* {index != expandedIndex && (
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/textron.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          )} */}
          </motion.div>
        ))}
      </div>

      {/* {work_experience.map((item) => (
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/textron.png"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      ))} */}
    </div>
  );
}
