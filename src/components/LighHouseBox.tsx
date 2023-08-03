"use client";
import { shimmer, toBase64 } from "@/utils/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import { FadeLoader } from "react-spinners";
import Modal from "./Modal";

type LightBoxProps = {
  images: string[];
  imageToShow: string;
  hideLightBox: () => void;
};

const LightBox: React.FC<LightBoxProps> = ({
  images,
  imageToShow: displayImage,
  hideLightBox,
}) => {
  const [imageToShow, setImageToShow] = useState(displayImage);
  const [loading, setLoading] = useState(true);

  const showNext = (e: any) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      return;
    }
    const nextImage = images[currentIndex + 1];
    setImageToShow(nextImage);
  };

  const showPrev = (e: any) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      return;
    }
    const prevImage = images[currentIndex - 1];
    setImageToShow(prevImage);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const currentIndex = images.indexOf(imageToShow);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  if (!imageToShow) return null;

  return (
    <Modal
      className="bg-black/90 backdrop-blur-sm z-50 inset-0 min-h-screen flex items-center justify-center fixed px-4 overflow-hidden"
      onClick={hideLightBox}
      isOpen={!!imageToShow}
      disableBodyLock={false}
    >
      <button className="absolute top-5 right-5">
        <XMarkIcon
          className="w-6 h-6 text-white"
          onClick={() => {
            setImageToShow("");
            hideLightBox();
          }}
        />
      </button>
      <button
        disabled={!hasPrevious}
        onClick={showPrev}
        className={`icon-button absolute top-1/2 -translate-y-1/2 left-5 ${
          hasPrevious ? "" : "opacity-50 cursor-not-allowed"
        }`}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </button>
      {imageToShow && (
        <>
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/90">
              <FadeLoader color="#fff" />
            </div>
          )}
          <Image
            width={435}
            height={690}
            alt="lightbox-image"
            className="object-cover h-auto w-auto"
            src={imageToShow}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(435, 690)
            )}`}
            loading={loading ? "eager" : "lazy"} // Show the loader until the image is fully loaded
            onLoad={() => setLoading(false)} // Set loading to false when the image is fully loaded
            onLoadingComplete={() => setLoading(false)} // Set loading to false when the image has been loaded (added this line)
            onClick={(e) => e.stopPropagation()}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 70vw"
          />
        </>
      )}
      <button
        disabled={!hasNext}
        onClick={showNext}
        className={`icon-button absolute top-1/2 -translate-y-1/2 right-5 ${
          hasNext ? "" : "opacity-50 cursor-not-allowed"
        }`}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </button>
    </Modal>
  );
};

export default LightBox;
