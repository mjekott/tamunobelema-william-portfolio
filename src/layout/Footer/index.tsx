"use client";
import { FooterLinks } from "@/assets/data/FooterLinks";
import userImage from "@/assets/images/userImage.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container p-4  mt-10  lg:mt-20">
      <div className="flex border-t border-b border-[#292929] py-10 lg:py-32">
        <div className="mr-6 md:mr-16 lg:mr-[120px] relative">
          <Image
            src={userImage}
            className="grayscale"
            height={264}
            width={264}
            alt="user-image"
            sizes="(min-width: 1280px) 264px, (min-width: 1040px) 99px, (min-width: 780px) 137px, (min-width: 680px) 162px, calc(26.11vw - 10px)"
          />
        </div>
        <p className="font-semibold text-2xl md:text-4xl lg:text-7xl  max-w-[800px] ">
          Let’s talk about an idea you may have or book a consultation.
        </p>
      </div>
      <div className=" py-10 lg:py-32 flex flex-wrap justify-between gap-x-8 gap-y-4">
        <div>
          <p className="text-gray-light text-xs md:text-sm mb-1">Email</p>
          <Link
            href="mailto:contact@tamunobelemawilliam.com"
            className=" text-xs md:text-lg"
          >
            contact@tamunobelemawilliam.com
          </Link>
        </div>

        <div>
          <p className="text-gray-light text-xs md:text-sm mb-1">
            WhatsApp Number
          </p>
          <Link
            href="https://wa.link/sewliw"
            target="__blank"
            rel="noopener noreferrer"
            className=" text-xs md:text-lg"
          >
            +234 (0) 806 354 3836
          </Link>
        </div>
        <div className="">
          <p className="text-gray-light text-xs md:text-sm mb-1">Socials</p>
          <ul className="flex flex-wrap  justify-start items-start  text-xs md:text-lg gap-x-4 gap-y-2">
            {FooterLinks.map(({ name, href }, idx) => {
              return (
                <li key={name} className="flex items-center">
                  {idx !== 0 && (
                    <div className="w-2 h-2 bg-white mr-2 md:mr-6" />
                  )}
                  <Link href={href} target="__blank" rel="noreferrer noopener">
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
