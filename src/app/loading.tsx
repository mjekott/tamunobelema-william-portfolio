import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-50 flex justify-center items-center">
      <div>
        <FadeLoader color="#fff" />
      </div>
    </div>
  );
};

export default loading;
