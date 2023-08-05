"use client";
import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

function BlurImage({ src, className, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt={alt}
      src={src}
      className={cn(
        "duration-700 ease-in-out",
        className,
        isLoading ? "grayscale blur-2xl scale-105" : ""
      )}
      onLoadingComplete={() => setLoading(false)}
      {...props}
    />
  );
}

export default BlurImage;
