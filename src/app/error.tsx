"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Error = (props: any) => {
  console.log(props);
  const router = useRouter();
  return (
    <div className="bg-[#111111] flex justify-center items-center flex-col min-h-screen">
      <h2 className="text-white text-3xl my-5 text-center">
        Opps something went wrong !!
      </h2>
      <Link
        href="/"
        className="mt-5 px-6 border border-black text-white transition duration-300 ease-in-out hover:bg-white hover:text-black px-6 py-2"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
