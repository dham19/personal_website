'use client';
// TODO:
// make json items each have a seld identifiable field

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';
import data from '../data.json';
import Experience from './Experience';
import Education from './Education';
import Awards from './Awards';
import Skills from './Skills';

export default function FlippingCard() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const largeScreen = useMediaQuery('(min-width:600px)');

  const handleCardClick = (index: any) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    sm_expanded: {
      width: '400px',
      height: '600px',
    },
    expanded: {
      width: '1500px',
      height: '500px',
    },
    collapsed: {
      width: '400px',
      height: '150px',
    },
  };

  const the_data = data;
  const titles1 = data.titles1;
  const work_experience = data.work_experience;
  const education = data.education;
  const titles2 = data.titles2;
  const lower_content = data.lower_content;

  return (
    <div className='py-1 px-1 pb-[300px] background-container w-full bg-fixed'>
      <section className='mt-40'>
        <div className='mt-12 flex flex-col md:flex-row items-center justify-center gap-5'>
          {[0, 1].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[150px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? 'sm_expanded' : ''
              } 
              md:${index === expandedIndex ? 'expanded' : ''}`}
              variants={cardVariants}
              initial='collapsed'
              animate={
                largeScreen
                  ? index === expandedIndex
                    ? 'expanded'
                    : 'collapsed'
                  : index === expandedIndex
                  ? 'sm_expanded'
                  : 'collapsed'
              }
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundColor: '#AC8080',
              }}>
              <div className='card-content h-full flex flex-col justify-start'>
                <div className='card-footer rounded-b-[20px] bg-white min-h-[100px] flex flex-col items-center justify-center'>
                  <h2
                    className={` ${
                      index == expandedIndex ? 'hidden' : ''
                    } text-xl font-semibold text-black text-center`}>
                    {titles1[index]}
                  </h2>
                  {index === expandedIndex && (
                    <div className='flex-col w-full h-full overflow-y-auto'>
                      {index === 0 && <Experience data={work_experience} />}
                      {index === 1 && <Education data={education} />}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className='mt-12 flex flex-col md:flex-row items-center justify-center gap-5'>
          {[2, 3].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[150px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? 'expanded' : ''
              }`}
              variants={cardVariants}
              initial='collapsed'
              animate={
                largeScreen
                  ? index === expandedIndex
                    ? 'expanded'
                    : 'collapsed'
                  : index === expandedIndex
                  ? 'sm_expanded'
                  : 'collapsed'
              }
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundColor: '#AC8080',
              }}>
              <div className='card-content h-full flex flex-col justify-start'>
                <div className='card-footer rounded-b-[20px] bg-white  min-h-[100px] flex flex-col items-center justify-center'>
                  <h2 className='text-xl font-semibold text-black text-center'>
                    {titles2[index]}
                  </h2>
                  {index === expandedIndex && (
                    <div className='overflow-y-auto w-full'>
                      {index === 2 && <Awards data={lower_content} />}
                      {index === 3 && <Skills data={lower_content} />}
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
