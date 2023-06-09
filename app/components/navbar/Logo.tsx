"use client";

import { FunctionComponent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface LogoProps {}

const Logo: FunctionComponent<LogoProps> = () => {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/images/logo.png"
    />
  );
};

export default Logo;
