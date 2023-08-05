"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({
  children,
  className,
  onClick,
  isOpen = true,
  disableBodyLock = true,
}: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    const handleScroll = (event: any) => {
      if (modalOpen) {
        event.preventDefault();
      }
    };

    // Add the event listener to disable body scroll when the modal is open
    if (disableBodyLock) {
      document.body.style.overflow = modalOpen ? "hidden" : "auto";

      // Remove the event listener when the modal is closed
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [disableBodyLock, modalOpen]);

  if (!modalOpen) return null;

  return createPortal(
    <motion.div
      key="hello"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "bg-[#111111] overflow-y-auto   inset-0 fixed h-full w-full z-50 min-h-screen",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>,
    document.body
  );
};

export default Modal;

type ModalProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  isOpen?: boolean;
  disableBodyLock?: boolean;
};
