import React from "react";
import Logo from "./Logo";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Logo />
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 ShopScoop —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @shopscoop
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <BsFacebook />
            </a>
            <a className="ml-3 text-gray-500">
              <BsTwitter />
            </a>
            <a className="ml-3 text-gray-500">
              <BsInstagram />
            </a>
            <a className="ml-3 text-gray-500">
              <GrLinkedinOption />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
