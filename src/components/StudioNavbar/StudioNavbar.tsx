import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
const StudioNavbar = (props: any) => {
  return (
    <>
      <div className="flex items-center justify-between p-5 bg-black">
        <Link href="/" className="text-white flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6  mr-2" />
          Go To Landing Page
        </Link>
      </div>
      {props.renderDefault(props)}
    </>
  );
};

export default StudioNavbar;
