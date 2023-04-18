import Image from "next/image";
import urlFor from "../../../../../sanity/config/urlFor";
import { IBrand } from "../../../../../types/HomePage";

const Brand = ({ brands }: BrandProps) => {
  return (
    <div className="container p-4  py-4 ">
      <div className="flex pl-4 lg:justify-center items-center overflow-x-auto py-4  flex-nowrap overflow-hidden gap-x-8 gap-y-10 ">
        {brands.map((brand, idx) => (
          <Image
            src={urlFor(brand.image).url()}
            alt={brand.title}
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

type BrandProps = {
  brands: IBrand[];
};
