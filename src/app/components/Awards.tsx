declare interface propsInterface {
  data: any;
}

export default function Awards({ data }: propsInterface) {
  const lower_content = data as string[][][];

  return (
    <div className='flex-column'>
      <h1 className='md:hidden flex justify-center'>Awards</h1>
      <ul className=' overflow-y-auto w-full'>
        {lower_content[0].map((item, i) => (
          <li
            key={i}
            className='flex flex-row justify-between mt-2 items-center'>
            <p className='ml-5 my-2'>{item[0]}</p>
            <p className='mr-5 italic text-right'>{item[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
