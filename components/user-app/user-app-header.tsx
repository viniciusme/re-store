"use client";

import { UserNav } from "../common/user-nav";

export default function UserAppHeader() {
  return (
    <header>
      <nav className="m-4 flex items-center justify-between">
        <span className="font-extrabold">
          re<span className="font-extralight">Store</span>
        </span>

        <UserNav />
      </nav>
    </header>
  );
}
