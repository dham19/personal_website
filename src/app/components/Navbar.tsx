'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/solid';
import Dropdown from './Dropdown';

export default function Navbar() {
  return (
    <>
      <nav className='hidden md:flex md:justify-between'>
        <div>
          <Link className='text-black text-4xl' href='/'>
            Jake Jakub
          </Link>
          <p className='italic'>Certified Public Accountant</p>
        </div>
        <div className='flex '>
          <Link className='text-black mr-4' href='/resume.pdf' target='_blank'>
            Download CV
          </Link>
          <Link className='text-black mr-4' href='/#about'>
            About Me
          </Link>
          <Link className='text-black mr-4' href='#connect'>
            Connect
          </Link>
        </div>
        <div className='sm:hidden'></div>
      </nav>
      <nav className='flex flex-col md:hidden'>
        <div className='mb-10'></div>
        <Link className='flex text-black text-4xl' href='/'>
          Jake Jakub
        </Link>
        <p className='italic'>Certified Public Accountant</p>

        <div className='flex'>
          <Link
            className='text-black mr-4 border p-2 rounded'
            href='/resume.pdf'
            target='_blank'>
            Download CV
          </Link>
        </div>
      </nav>
    </>
  );
}
