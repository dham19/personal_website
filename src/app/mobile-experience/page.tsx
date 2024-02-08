'use client';

import Experience from '../components/Experience';
import Navbar from '../components/Navbar';
import data from '../data.json';

export default function MobileExperience() {
  const theData = data.work_experience;

  return (
    <main>
      <Navbar />
      <Experience data={theData} />
    </main>
  );
}
