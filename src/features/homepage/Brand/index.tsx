import Image from "next/image";
import Marquee from "react-fast-marquee";
import urlFor from "../../../../../sanity/config/urlFor";
import { IBrand } from "../../../../../types/HomePage";

const Brand = ({ brands }: BrandProps) => {
  return (
    <div className="container p-4   mb-10 md:mb-20">
      <Marquee gradientWidth="0px" speed={30} delay={3}>
        {brands.map((brand, idx) => (
          <Image
            src={urlFor(brand.image).url()}
            alt={brand.title}
            key={idx}
            width={50}
            height={70}
            className="w-auto mx-[30px]"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Brand;

type BrandProps = {
  brands: IBrand[];
};
