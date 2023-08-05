"use client";
import getBase64 from "@/lib/getLocalBase64";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProjectImageCard = ({ image, onClick }: ProjectImageCardProps) => {
  const [blurDataUrl, setBlurDataUrl] = useState("");

  useEffect(() => {
    getBase64(image).then((data) => setBlurDataUrl(data as string));
  }, [image]);

  console.log(blurDataUrl);

  return (
    <div className="relative lg:h-[530px] h-[269px]">
      <Image
        onClick={onClick}
        src={image}
        fill
        alt="other images"
        className="grayscale hover:grayscale-0 object-cover cursor-pointer"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ProjectImageCard;

type ProjectImageCardProps = {
  image: string;
  onClick: () => void;
};
