declare interface propsInterface {
  data: any;
}

export default function Experience({ data }: propsInterface) {
  const work_experience = data as string[][][];

  return (
    <>
      {work_experience.map((item, i) => (
        <div
          key={i}
          className='flex flex-col md:flex-row items-center gap-5 mb-10 ml-5 mr-5'>
          <div className='flex-shrink-0 w-full md:max-w-[33.34%]'>
            <img
              className='object-contain'
              src={`${item[0]}`}
              alt='job_image'
            />
          </div>
          <div className='ml-10 flex-1 w-full mr-10 md:max-w-[66.6%] md:mr-0'>
            <div className='flex-col'>
              <div className='flex flex-row justify-between'>
                <h3 id='company' className='font-bold text-lg text-black'>
                  {item[1][0]}
                </h3>
                <h3 id='location' className='font-bold text-lg text-black'>
                  {item[3][0]}
                </h3>
              </div>
              <div className='flex flex-row justify-between'>
                <h3 className='italic text-black'>{item[2][0]}</h3>
                <h3 className='italic text-black'>{item[4][0]}</h3>
              </div>
            </div>
            <ul className='list-disc pl-6'>
              {item[5].map((bullet, j) => (
                <li key={j} className='mb-2'>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
