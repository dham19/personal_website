declare interface propsInterface {
  data: any;
}

export default function Skills({ data }: propsInterface) {
  const lower_content = data as string[][][];

  return (
    <div className='flex-column'>
      <h2 className='text-xl font-bold text-black text-center border-b'>
        Skills
      </h2>
      <ul className=' overflow-y-auto w-full mt-4'>
        {lower_content[1][0].map((item, j) => (
          <div
            key={j}
            className='mb-5 grid place-items-center bg-gray-200 border-gray-400 rounded-lg mx-2 md:bg-white md:border-white min-h-20 md:min-h-0'>
            <li className='mx-4 md:mx-32 text-lg md:text-base font-semibold'>
              {item}
            </li>
          </div>
        ))}
      </ul>
      <h2 className='text-xl font-bold text-black text-center border-b'>
        Hobbies
      </h2>
      <ul className='grid place-items-center overflow-y-auto w-full mt-4'>
        {lower_content[1][1].map((item, l) => (
          <div
            key={l}
            className='mb-5 grid place-items-center bg-gray-200 border-gray-400 rounded-lg mx-2 p-3 md:bg-white md:border-white min-h-10 min-w-64 md:min-h-0'>
            <li className='flex justify-between'>
              <p>{item[0]}</p>
              <p>{item[1]}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
