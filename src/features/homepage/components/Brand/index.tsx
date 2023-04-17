import Image from "next/image";

const Brand = () => {
  return (
    <div className="container p-4  py-4 ">
      <div className="flex pl-4 lg:justify-center items-center overflow-x-auto py-4  flex-nowrap overflow-hidden gap-x-8 gap-y-10 ">
        {new Array(6).fill("").map((el, idx) => (
          <Image
            src={require(`./images/${idx + 1}.png`)}
            alt="testimonial-images"
            key={idx}
            width={50}
            height={70}
            className="w-auto h-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Brand;
