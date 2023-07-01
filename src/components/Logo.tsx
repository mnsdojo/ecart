import React from "react";
import Image from "next/image";

import Link from "next/link";
function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.svg" alt="logo" width={42} height={42} />
      <span className="hidden sm:inline-block font-extrabold text-xl">
        ShopScoop
      </span>
    </Link>
  );
}

export default Logo;
