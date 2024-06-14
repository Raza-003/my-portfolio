import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={"/"}>
          <Image src="/images/profile(white).png" width={50} height={50} alt=""/>
        </Link>

        <p className="text-slate-600">
          All rights reserved
          <Link href={"https://github.com/Raza-003"}> @Raza-003</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
