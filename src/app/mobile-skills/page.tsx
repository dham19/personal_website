import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import data from '../data.json';

export default function MobileSkills() {
  const lower_content = data.lower_content;

  return (
    <>
      <Navbar />
      <Skills data={lower_content} />
    </>
  );
}
