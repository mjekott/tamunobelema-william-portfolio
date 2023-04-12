import { FooterLinks } from "@/assets/data/FooterLinks";
import Image from "next/image";
import Link from "next/link";
import userImage from "../../assets/images/userImage.png";

const Footer = () => {
  return (
    <footer className="container p-4 mt-auto">
      <div className="flex border-t border-b border-[#292929] py-10 lg:py-32">
        <div className="mr-6 md:mr-16 lg:mr-[120px] relative">
          <Image
            src={userImage}
            className="grayscale"
            height={264}
            alt="user-image"
            sizes="(max-width: 768px) 264px,
            (max-width: 1024px) 264px,
            264px
            "
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
