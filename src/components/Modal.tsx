"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CustomModal = ({
  children,
  className,
  onClick,
  isOpen = true,
  disableBodyLock = true,
}: ModalProps): React.ReactPortal | null | any => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (disableBodyLock) {
      document.body.style.overflow = modalOpen ? "hidden" : "auto";

      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [disableBodyLock, modalOpen]);

  if (!modalOpen) return null;

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && onClick) {
      onClick(e);
    }
  };

  return createPortal(
    <motion.div
      key="hello"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "bg-[#111111] overflow-y-auto inset-0 fixed h-full w-full z-50 min-h-screen",
        className
      )}
      onClick={handleModalClick}
    >
      {children}
    </motion.div>,
    document.body
  );
};

export default CustomModal;

type ModalProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isOpen?: boolean;
  disableBodyLock?: boolean;
};
