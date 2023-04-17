import { X } from "@phosphor-icons/react";

const BackButton = ({ handleClose }: any) => {
  return (
    <div
      className=" py-2 lg:py-4  flex w-full absolute top-2 justify-center  z-10 items-center"
      id="back-button"
    >
      <button onClick={handleClose}>
        <X size="32" />
      </button>
    </div>
  );
};

export default BackButton;
