import { X } from "@phosphor-icons/react";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  const handleGoBack = () => {
    if (
      window.history.length > 1 &&
      document.referrer.indexOf(window.location.host) !== -1
    ) {
      router.back();
    } else {
      router.replace("/");
    }
  };
  return (
    <div className=" py-2 lg:py-4 flex justify-center items-center">
      <button onClick={handleGoBack}>
        <X size="32" />
      </button>
    </div>
  );
};

export default BackButton;
