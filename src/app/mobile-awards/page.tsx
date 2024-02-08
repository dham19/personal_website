import Awards from '../components/Awards';
import Navbar from '../components/Navbar';
import data from '../data.json';

export default function MobileAwards() {
  const lower_content = data.lower_content;
  console.log('lower content', lower_content);

  return (
    <>
      <Navbar />
      <Awards data={lower_content} />
    </>
  );
}
