import Education from '../components/Education';
import Navbar from '../components/Navbar';
import data from '../data.json';

export default function MobileEducation() {
  const education = data.education;

  return (
    <>
      <Navbar />
      <Education data={education} />
    </>
  );
}
