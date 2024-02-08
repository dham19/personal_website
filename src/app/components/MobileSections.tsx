import Link from 'next/link';

export default function MobileSections() {
  return (
    <div className='flex flex-col place-items-center text-2xl text-gray-500 background-container bg-fixed'>
      <Link className='my-3' href='/mobile-experience'>
        Experience
      </Link>
      <Link className='my-3' href='/mobile-education'>
        Education
      </Link>
      <Link className='my-3' href='/mobile-awards'>
        Awards & Accolades
      </Link>
      <Link className='my-3' href='/mobile-skills'>
        Skills & Hobbies
      </Link>
    </div>
  );
}
