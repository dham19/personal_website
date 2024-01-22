"use client";
// TODO:
// make expanded and contracted boxes dynamic widths, not fixed pixels
// Work experience: if no bullets, make if statement in JSX to render it so title is to the right and centered

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
      ["/pwc.png"],
      ["PwC"],
      ["General Tax Intern"],
      ["Charlotte, NC"],
      ["Summer 2023"],
      [
        "Analyzed and updated client and internal files, enabling our team to confirm the accuracy of client financial statements through my quarterly reviews, year-to-date and AETR analyses, and quarterly tie-outs.",
        "Created new networks with interns, associates, managers, and partners inside and outside my specific team, including ITP, Core tax, international tax, transfer pricing, and audit team members.",
        "Analyzed and prepared final 2022 tax returns for multiple clients, including adjusting temporary and permanent book-tax differences.",
        "Experimented and created robots with new technology such as UiPath, Alteryx, and PowerBI",
      ],
    ],
    // Job 2...
    [
      ["/textron.png"],
      ["Textron"],
      ["M&A Tax Intern"],
      ["Providence, RI"],
      ["Summer 2022"],
      [
        "Worked at global headquarters on multiple projects, including LIFO calculation, reviewing CFC balance sheets to determine the potential for cash repatriation, and preparing statements for Textron’s federal returns.",
        "Led nationwide team to first place at intern conference with a project on Bell APT 70 Government and commercial supply and demand analysis.",
        "Engaged with senior leadership to explore personal goals, M&A, and tax law concepts",
      ],
    ],
    [
      ["/lulu.png"],
      ["Lululemon"],
      ["Educator"],
      ["Clemson, SC"],
      ["Fall 2023"],
      [],
    ],

    [
      ["/nps.png"],
      ["National Park Service"],
      ["Ocean Lifeguard"],
      ["Sandy Hook, NJ"],
      ["Summer 2021"],
      [
        "Worked at global headquarters on multiple projects, including LIFO calculation, reviewing CFC balance sheets to determine the potential for cash repatriation, and preparing statements for Textron’s federal returns.",
        "Led nationwide team to first place at intern conference with a project on Bell APT 70 Government and commercial supply and demand analysis.",
        "Engaged with senior leadership to explore personal goals, M&A, and tax law concepts",
      ],
    ],

    [
      ["/doordash.png"],
      ["Doordash"],
      ["Independent Contractor"],
      ["Monmouth County, NJ"],
      ["Intermittant 2018-2021"],
      [],
    ],
    [
      ["/abc.png"],
      ["Atlantic Bagel Company"],
      ["Fry Cook"],
      ["Rumson, NJ"],
      ["Summer 2020"],
      [],
    ],
    [["/rcc.png"], ["Rumson Country Club"], ["Caddy"], ["Rumson, NJ"], [], []],
    [
      ["/country_club.png"],
      ["Country Club Services"],
      ["Valet Services"],
      [""],
      [],
      [],
    ],
    [
      ["/trll.png"],
      ["Two River Little League"],
      ["Umpire"],
      ["Monmouth County, NJ"],
      [],
      [],
    ],
    [
      ["bap.png"],
      ["Beta Alpha Psi - National Honor Society"],
      ["Chapter President"],
      [""],
      [""],
      [],
    ],
    [["spawn.png"], ["SPAWN"], ["Cohort 2 Fellow"], [""], [""], []],
  ];
  const education = [
    "education_image.png",
    "Education Title",
    "Clemson University",
    "Major",
    ["3.7", "Accounting"],
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
                          <div className="flex flex-row items-center gap-5 mb-10 ml-5 mr-5">
                            <div className="flex-shrink-0 max-w-[33.34%]">
                              <img
                                className="object-contain"
                                src={`${item[0]}`}
                                alt="job_image"
                              />
                            </div>
                            <div className="ml-10 flex-1 max-w-[66.6%]">
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
