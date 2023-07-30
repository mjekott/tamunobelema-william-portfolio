"use client";
import { socialLinks } from "@/assets/data/socialLinks";
import Logo from "@/components/Logo";
import { cn } from "@/utils/cn";
import { List, X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const XIcon = motion(X);
const ListIcon = motion(List);

const MobileNavigation = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <div className="h-[10vh] sticky top-0 bg-[#111111] z-40 md:hidden  w-full p-0">
      <div className="text-base h-full container relative z-50 flex justify-between items-center px-4">
        <Link href="/">
          <Logo />
        </Link>
        <button
          onClick={() => {
            toggleNav();
          }}
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
      {showNav && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.3,
          }}
          className={cn(
            `z-40 fixed bottom-0  w-full   justify-center items-center flex-col flex  h-[90vh] bg-[#111111] `
          )}
        >
          <ul className="space-y-5 text-lg transform -translate-y-[50%] ">
            <li className="hover:opacity-75 text-center text-xl">
              <Link href="/articles" onClick={toggleNav}>
                Articles
              </Link>
            </li>
            <li className="hover:opacity-75 text-xl">
              <Link
                href="https://www.youtube.com/@tamunobelema"
                rel="noopener noreferrer"
                target="__blank"
                onClick={toggleNav}
              >
                Education
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-8 items-center mt-5 transform -translate-y-[100%]">
            {socialLinks.map(({ href, name, icon: Icon }) => (
              <li key={name} className="hover:opacity-75 cursor-pointer ">
                <Link
                  href={href}
                  rel="noopener noreferrer"
                  target="__blank"
                  onClick={toggleNav}
                >
                  <Icon size={28} />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavigation;
