import { socialLinks } from "@/assets/data/socialLinks";
import Logo from "@/components/Logo";
import useOnClickOutside from "@/utils/useClickOutside";
import { List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const XIcon = motion(X);
const ListIcon = motion(List);

const MobileNavigation = () => {
  const [showNav, setShowNav] = useState(false);
  const mobileRef = useRef<any>();
  useOnClickOutside(mobileRef, () => {
    setShowNav(false);
  });

  const handleIconClick = () => {
    setTimeout(() => {
      setShowNav((prev) => !prev);
    }, 1000);
  };

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.add("no-scroll");
    }
  }, [showNav]);
  return (
    <div className="h-[10vh] lg:hidden py-4  w-full p-0" ref={mobileRef}>
      <div className=" flex flex-col container p-0">
        <div className="text-base h-full  flex justify-between items-center px-4">
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
          className={` z-40 flex justify-center items-center flex-col  h-[90vh] overflow-hidden bg-[#111111]  mt-5 w-full rounded  ${
            !showNav && "hidden opacity-0"
          }`}
        >
          <ul
            className="space-y-5 text-lg transform -translate-y-[50%] "
            onClick={handleIconClick}
          >
            <li className="hover:opacity-75 text-center ">
              <Link href="/articles">Articles</Link>
            </li>
            <li className="hover:opacity-75 ">
              <Link
                href="https://www.youtube.com/channel/UCf-slgSVQTTjezx5IPbyBxA"
                rel="noopener noreferrer"
                target="__blank"
              >
                Education
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-8 items-center mt-5 transform -translate-y-[100%]">
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
