'use client';

import { UserNav } from '../common/user-nav';

export default function UserAppHeader() {
  return (
    <header>
      <nav className='flex items-center justify-between m-4'>
        <span className='font-extrabold'>
          re<span className='font-extralight'>Store</span>
        </span>

        <UserNav />
      </nav>
    </header>
  );
}
