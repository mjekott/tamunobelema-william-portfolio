"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

function BlurImage({ src, className, ...props }: any) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt="photo"
      {...props}
      src={src}
      className={cn(
        "duration-700 ease-in-out",
        className,
        isLoading ? "grayscale blur-2xl scale-105" : ""
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;
