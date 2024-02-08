declare interface propsInterface {
  data: any;
}

export default function Education({ data }: propsInterface) {
  const education = data as string[][][];

  return (
    <>
      {/* CLEMSON */}
      <div className='flex flex-col place-items-center  w-full mb-5'>
        <div
          className={`${education[0][0]}-background flex flex-col items-center justify-center w-full h-full p-24`}>
          <h1 className='text-black text-5xl font-normal ml-10 mr-10'>
            {education[0][2]}
          </h1>
        </div>

        {/* Header Information  */}
        <div className='flex flex-col md:w-2/3 p-0 mt-2'>
          <div className='flex flex-row justify-between p-0 w-full italic'>
            <p className='ml-10'>{education[0][3][1]}</p>
            <p className='mr-10'>{education[0][3][2]}</p>
          </div>
          <div className='flex flex-row justify-between w-full italic'>
            <p className='ml-10'>{education[0][3][0]}</p>
            <p className='mr-10'>{education[0][3][3]}</p>
          </div>
        </div>
        <div className='flex flex-col md:w-2/3 p-0 mt-10 border-b'>
          <div className='flex flex-row justify-between w-full'>
            <p className='ml-10'>{education[0][3][4]}</p>
          </div>

          <p className='mx-2 my-4 md:my-0 md:ml-10 md:mr-10'>
            Extracurriculars: {/* Makes a comma-separated list */}
            {education[0][6].map((e, j) => (
              <span key={j}>
                {j > 0 && ', '}
                {<i>{e}</i>}
              </span>
            ))}
          </p>
        </div>

        {/* Favorite Classes Div  */}
        <div className='flex flex-col md:flex-row w-full'>
          <div className='hidden md:flex md:w-1/4 ' />
          <div className='flex w-full p-2 md:p-0 md:w-1/2 flex-col'>
            <h2 className='text-gray-500'>Favorite Classes</h2>
            <ul className='list-disc pl-6 ml-10'>
              {education[0][4].map((c, k) => (
                <li key={k}>{c}</li>
              ))}
            </ul>
            <i>{education[0][5]}</i>
          </div>
        </div>

        <div className='flex flex-col items-center md:flex-row w-full'>
          <div className='hidden md:flex md:w-1/4 ' />
          <div className='flex w-full p-2 md:p-0 md:w-1/2 flex-col'>
            <h2 className='text-gray-500'>Biggest Lesson Learned:</h2>
            <p className='ml-10 mr-10 pl-6'>{education[0][7]}</p>
          </div>
        </div>
      </div>

      {/* CBA */}
      <div className='flex flex-col place-items-center w-full'>
        <div
          className={`${education[1][0]}-background flex items-center justify-center h-full w-full p-24`}>
          <h1 className='text-black text-5xl font-normal ml-10 mr-10'>
            {education[1][2]}
          </h1>
        </div>

        {/* Header Information  */}
        <div className='flex flex-col p-2 md:w-2/3 md:p-0'>
          <div className='flex flex-row justify-between p-0 w-full italic mb-10 mt-2'>
            <p className=' ml-10'>Catholic Prep School</p>
            <p className=' mr-10'>Graduation May 2019</p>
          </div>

          {/* <div className="flex flex-row justify-between w-full">
                                <p className="ml-10">Cumulative GPA: 3.7/4.0</p>
                              </div> */}

          <div className='border-b'>
            <p className='md:mx-10'>
              Extracurriculars: {/* Makes a comma-separated list */}
              {education[1][6].map((e, l) => (
                <span key={l}>
                  {l > 0 && ', '}
                  {<i>{e}</i>}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row w-full'>
          <div className='hidden md:flex md:w-1/4 ' />
          <div className='flex w-full p-2 md:p-0 md:w-1/2 flex-col'>
            <h2 className='text-gray-500'>Favorite Classes</h2>
            <ul className='list-disc pl-6 ml-10'>
              {education[1][4].map((c, k) => (
                <li key={k}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center md:flex-row w-full mb-7'>
          <div className='hidden md:flex md:w-1/4 ' />
          <div className='flex w-full p-2 md:p-0 md:w-1/2 flex-col'>
            <h2 className='text-gray-500'>Biggest Lesson Learned:</h2>
            <p className='ml-10 mr-10 pl-6'>{education[1][5]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
