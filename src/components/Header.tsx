import { BsCart } from "react-icons/bs";
import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import Logo from "./Logo";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
function Header() {
  const { formattedTotalPrice, cartCount } = useShoppingCart();
  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 z-10 ">
        <div className="p-5 container mx-auto flex justify-between items-center">
          <Logo />
          <Link href="/cart" className="relative flex">
            <BsCart className="w-7 h-7 flex-shrink-0" />
            <p className="text-lg ">
              {formattedTotalPrice}
              <span className="text-sm text-gray-500 ">({cartCount})</span>
            </p>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
