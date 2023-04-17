import BackButton from "@/layout/BackButton";
import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { Portal } from "react-portal";

const Modal = ({ show, onClose, children }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? onClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  if (!show) return null;
  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        exit={{ opacity: 0 }}
        className="bg-black overflow-y-auto overflow-x-hidden inset-0 fixed h-full w-full z-50 min-h-screen"
      >
        <BackButton handleClose={onClose} />
        {children}
      </motion.div>
    </Portal>
  );
};

export default Modal;

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}
