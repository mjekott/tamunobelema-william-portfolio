import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function BlurImage({ src, className, alt, ...props }: any) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}
      className={cn(
        "duration-700 ease-in-out",
        isLoading ? "grayscale blur-2xl scale-110" : "",
        className
      )}
      alt={alt}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;
