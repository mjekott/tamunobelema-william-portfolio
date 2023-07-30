"use client";
import { useEffect } from "react";

const LockBodyScroll = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    () => {
      document.body.classList.add("no-scroll");
    };
  });

  return null;
};

export default LockBodyScroll;
