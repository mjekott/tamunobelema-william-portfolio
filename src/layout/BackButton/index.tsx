"use client";
import { cn } from "@/utils/cn";
import { X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const BackButton = ({ className }: { className?: String }) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        " py-2 right-0 left-0  flex w-full fixed top-2 justify-center  z-10 items-center",
        className
      )}
      id="back-button"
    >
      <button aria-label="Close" onClick={() => router.back()}>
        <X size="32" />
      </button>
    </div>
  );
};

export default BackButton;
