"use client";
// TODO:
// make expanded and contracted boxes dynamic widths, not fixed pixels
// Work experience: if no bullets, make if statement in JSX to render it so title is to the right and centered

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { join } from "node:path/posix";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FlippingCard() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const largeScreen = useMediaQuery("(min-width:600px)");

  const handleCardClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    sm_expanded: {
      width: "400px",
      height: "600px",
    },
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
      [
        "Ability to connect with customers in a meaningful way, creating a relatable desire to own our product",
        "Consistently met or exceeded sales targets, including what the manager believes to be the most pairs of mens pants single-handedly sold in one day",
        "Remain calm, relaxed, and adaptable in all situations",
        "Speak clearly, communicate effectively, and always smile!",
      ],
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
    [
      ["vector.jpeg"],
      ["Vector Marketing"],
      ["Field Sales Representative"],
      ["Eatontown, NJ"],
      ["Apr 2018 - Aug 2018"],
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
  ];
  const education = [
    [
      ["clemson"],
      ["clemson1.jpeg"],
      ["Clemson University"],
      ["Location", "major", "grad date"],
      ["Accounting", "Business tech", "financial analysis"],
      [
        "During my time at Clemson University, one of the greatest lessons I learned was the value of collaboration and diverse perspectives. Engaging in group projects and participating in various campus activities exposed me to individuals with different backgrounds, beliefs, and ideas. ",
      ],
      [
        "D1 Cross Country/Track Athlete",
        "Clemson Blockchain Treasurer",
        "Beta Alpha Psi - Accounting and Finance Honor Society Chapter President",
      ],
    ],
    [
      ["cba"],
      ["cba1.jpeg"],
      ["Christian Brothers Academy"],
      ["basic stufff"],
      ["Math", "Physics", "CS"],
      ["Brotherhood."],
      ["Cross Country", "Track"],
    ],
  ];

  const titles2 = ["", "", "Awards & Accolades", "Skills & Hobbies"];

  // name then description
  const lower_content = [
    [
      [
        "Beta Alpha Psi - National Honor Society Chapter President",
        "Fall 2021 - Spring 2023",
      ],
      [
        "Clemson University Cryptocurrency Club - Investment Director & Treasurer",
        "Spring 2022 - Spring 2023",
      ],
      [
        "Clemson University President’s List, Dean’s List, and/or Honor Roll",
        "Spring 2020 – Spring 2023",
      ],
      ["Clemson University Wrestling Club", "Fall 2021 – Spring 2023"],
      [
        "Clemson University - NCAA Division 1 Track and Field",
        "Aug. 2019 - Spring 2021",
      ],
      ["ACC All-Academic Student-Athlete", "Spring 2020 - Spring 2021"],
    ],
    [
      // Skills
      [
        "Microsoft Office",
        "Alteryx",
        "PowerIB",
        "SQL",
        "Python",
        "UiPath",
        "Public Speaking & Presenting",
        "Tax Research",
        "Business negotiations",
      ],
      // Hobbies
      [
        ["Volunteer Work", "100+ years since 2018"],
        ["Triathalons", ""],
        ["Investment Analysis", ""],
        ["Reading", ""],
        ["Blockchain", ""],
        ["Entrepreneurship", ""],
      ],
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
                index === expandedIndex ? "sm_expanded" : ""
              } 
              md:${index === expandedIndex ? "expanded" : ""}`}
              variants={cardVariants}
              initial="collapsed"
              animate={
                largeScreen
                  ? index === expandedIndex
                    ? "expanded"
                    : "collapsed"
                  : index === expandedIndex
                  ? "sm_expanded"
                  : "collapsed"
              }
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundColor: "#AC8080",
              }}
            >
              <div className="card-content h-full flex flex-col justify-start">
                <div className="card-footer rounded-b-[20px] bg-white min-h-[100px] flex flex-col items-center justify-center">
                  <h2
                    className={` ${
                      index == expandedIndex ? "hidden" : ""
                    } text-xl font-semibold text-black text-center`}
                  >
                    {titles1[index]}
                  </h2>
                  {index === expandedIndex && (
                    <div className="flex-col w-full h-full overflow-y-auto">
                      {index === 0 &&
                        work_experience.map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col md:flex-row items-center gap-5 mb-10 ml-5 mr-5"
                          >
                            <div className="flex-shrink-0 w-full md:max-w-[33.34%]">
                              <img
                                className="object-contain"
                                src={`${item[0]}`}
                                alt="job_image"
                              />
                            </div>
                            <div className="ml-10 flex-1 w-full mr-10 md:max-w-[66.6%] md:mr-0">
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
                                {item[5].map((bullet, j) => (
                                  <li key={j} className="mb-2">
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      {index === 1 && (
                        <>
                          {/* CLEMSON */}
                          <div className="flex flex-col place-items-center  w-full mb-5">
                            <div
                              className={`${education[0][0]}-background flex flex-col items-center justify-center w-full h-full p-24`}
                            >
                              <h1 className="text-black text-5xl font-normal ml-10 mr-10">
                                {education[0][2]}
                              </h1>
                            </div>

                            {/* Header Information  */}
                            <div className="flex flex-col md:w-2/3 p-0 mt-2">
                              <div className="flex flex-row justify-between p-0 w-full italic">
                                <p className="ml-10">
                                  Bachelor of Science in Accounting
                                </p>
                                <p className="mr-10">Graduation May 2023</p>
                              </div>
                              <div className="flex flex-row justify-between w-full italic">
                                <p className="ml-10">Master of Accountancy</p>
                                <p className="mr-10">Graduation August 2024</p>
                              </div>
                            </div>
                            <div className="flex flex-col md:w-2/3 p-0 mt-10 border-b">
                              <div className="flex flex-row justify-between w-full">
                                <p className="ml-10">Cumulative GPA: 3.7/4.0</p>
                              </div>

                              <p className="mx-2 my-4 md:my-0 md:ml-10 md:mr-10">
                                Extracurriculars:{" "}
                                {/* Makes a comma-separated list */}
                                {education[0][6].map((e, j) => (
                                  <span key={j}>
                                    {j > 0 && ", "}
                                    {<i>{e}</i>}
                                  </span>
                                ))}
                              </p>
                            </div>

                            {/* Favorite Classes Div  */}
                            <div className="flex flex-col md:flex-row w-full">
                              <div className="hidden md:flex md:w-1/4 " />
                              <div className="flex w-full p-2 md:p-0 md:w-1/2 flex-col">
                                <h2 className="text-gray-500">
                                  Favorite Classes
                                </h2>
                                <ul className="list-disc pl-6 ml-10">
                                  {education[0][4].map((c, k) => (
                                    <li key={k}>{c}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex flex-col items-center md:flex-row w-full">
                              <div className="hidden md:flex md:w-1/4 " />
                              <div className="flex w-full p-2 md:p-0 md:w-1/2 flex-col">
                                <h2 className="text-gray-500">
                                  Biggest Lesson Learned:
                                </h2>
                                <p className="ml-10 mr-10 pl-6">
                                  {education[0][5]}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* CBA */}
                          <div className="flex flex-col place-items-center w-full">
                            <div
                              className={`${education[1][0]}-background flex items-center justify-center h-full w-full p-24`}
                            >
                              <h1 className="text-black text-5xl font-normal ml-10 mr-10">
                                {education[1][2]}
                              </h1>
                            </div>

                            {/* Header Information  */}
                            <div className="flex flex-col p-2 md:w-2/3 md:p-0">
                              <div className="flex flex-row justify-between p-0 w-full italic mb-10 mt-2">
                                <p className=" ml-10">Catholic Prep School</p>
                                <p className=" mr-10">Graduation May 2019</p>
                              </div>

                              {/* <div className="flex flex-row justify-between w-full">
                                <p className="ml-10">Cumulative GPA: 3.7/4.0</p>
                              </div> */}

                              <div className="border-b">
                                <p className="md:mx-10">
                                  Extracurriculars:{" "}
                                  {/* Makes a comma-separated list */}
                                  {education[1][6].map((e, l) => (
                                    <span key={l}>
                                      {l > 0 && ", "}
                                      {<i>{e}</i>}
                                    </span>
                                  ))}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-col md:flex-row w-full">
                              <div className="hidden md:flex md:w-1/4 " />
                              <div className="flex w-full p-2 md:p-0 md:w-1/2 flex-col">
                                <h2 className="text-gray-500">
                                  Favorite Classes
                                </h2>
                                <ul className="list-disc pl-6 ml-10">
                                  {education[1][4].map((c, k) => (
                                    <li key={k}>{c}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex flex-col items-center md:flex-row w-full">
                              <div className="hidden md:flex md:w-1/4 " />
                              <div className="flex w-full p-2 md:p-0 md:w-1/2 flex-col">
                                <h2 className="text-gray-500">
                                  Biggest Lesson Learned:
                                </h2>
                                <p className="ml-10 mr-10 pl-6">
                                  {education[1][5]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
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
              animate={
                largeScreen
                  ? index === expandedIndex
                    ? "expanded"
                    : "collapsed"
                  : index === expandedIndex
                  ? "sm_expanded"
                  : "collapsed"
              }
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
                    <div className="overflow-y-auto w-full">
                      {index === 2 && (
                        // AWARDS
                        <div className="flex-column">
                          <ul className=" overflow-y-auto w-full">
                            {lower_content[0].map((item, i) => (
                              <li
                                key={i}
                                className="flex flex-row justify-between mt-2"
                              >
                                <p className="ml-5 my-2">{item[0]}</p>
                                <p className="mr-5 italic">{item[1]}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {index === 3 && (
                        // SKILLS AND HOBBIES
                        <div className="flex-column">
                          <h2 className="text-xl font-bold text-black text-center border-b">
                            Skills
                          </h2>
                          <ul className=" overflow-y-auto w-full">
                            {lower_content[1][0].map((item, j) => (
                              <div
                                key={j}
                                className="mb-5 grid place-items-center"
                              >
                                <li>{item}</li>
                              </div>
                            ))}
                          </ul>
                          <h2 className="text-xl font-bold text-black text-center border-b">
                            Hobbies
                          </h2>
                          <ul className="grid place-items-center overflow-y-auto w-full">
                            {lower_content[1][1].map((item, l) => (
                              <div
                                key={l}
                                className="mb-5 grid place-items-center"
                              >
                                <li className="flex justify-between">
                                  <p>{item[0]}</p>
                                  <p>{item[1]}</p>
                                </li>
                              </div>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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
