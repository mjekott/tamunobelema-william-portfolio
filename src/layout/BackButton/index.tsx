"use client";
import { X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      className=" py-2 right-0 left-0  flex w-full fixed top-2 justify-center  z-10 items-center"
      id="back-button"
    >
      <button aria-label="Close" onClick={() => router.push("/#projects")}>
        <X size="32" />
      </button>
    </div>
  );
};

export default BackButton;
