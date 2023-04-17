import { X } from "@phosphor-icons/react";

const BackButton = ({ handleClose }: any) => {
  return (
    <div
      className=" py-2 right-0 left-0  flex w-full fixed top-2 justify-center  z-10 items-center"
      id="back-button"
    >
      <button onClick={handleClose}>
        <X size="32" />
      </button>
    </div>
  );
};

export default BackButton;
