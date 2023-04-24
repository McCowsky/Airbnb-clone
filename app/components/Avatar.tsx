"use client";
import Image from "next/image";
import { FunctionComponent } from "react";

const Avatar: FunctionComponent = () => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="Avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
