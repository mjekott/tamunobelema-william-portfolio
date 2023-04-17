import { socialLinks } from "@/assets/data/socialLinks";
import Logo from "@/components/Logo";
import useOnClickOutside from "@/utils/useClickOutside";
import { List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const XIcon = motion(X);
const ListIcon = motion(List);

const MobileNavigation = () => {
  const [showNav, setShowNav] = useState(false);
  const mobileRef = useRef<any>();
  useOnClickOutside(mobileRef, () => {
    setShowNav(false);
  });
  return (
    <div className="h-[10vh] lg:hidden  w-full py-4" ref={mobileRef}>
      <div className="container flex flex-col">
        <div className="text-base h-full flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>
          <button
            onClick={() => setShowNav((prev) => !prev)}
            className="text-white"
          >
            {!showNav ? (
              <ListIcon
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0 }}
                size={32}
              />
            ) : (
              <XIcon
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0 }}
                size={32}
              />
            )}
          </button>
        </div>
        <div
          className={` p-5 z-40 bg-[#111111] border border-gray-light mt-5 w-full rounded  ${
            !showNav && "hidden opacity-0"
          }`}
        >
          <ul className="space-y-5 text-lg ">
            <li className="hover:opacity-75 ">
              <Link href="/articles">Articles</Link>
            </li>
            <li className="hover:opacity-75 ">
              <Link href="/#" rel="noopener noreferrer" target="__blank">
                Education
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-8 items-center mt-5">
            {socialLinks.map(({ href, name, icon: Icon }) => (
              <li key={name} className="hover:opacity-75 cursor-pointer ">
                <Link href={href} rel="noopener noreferrer" target="__blank">
                  <Icon size={22} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
