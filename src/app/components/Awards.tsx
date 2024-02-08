declare interface propsInterface {
  data: any;
}

export default function Awards({ data }: propsInterface) {
  const lower_content = data as string[][][];

  return (
    <div className='flex-column'>
      <ul className=' overflow-y-auto w-full'>
        {lower_content[0].map((item, i) => (
          <li key={i} className='flex flex-row justify-between mt-2'>
            <p className='ml-5 my-2'>{item[0]}</p>
            <p className='mr-5 italic'>{item[1]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
