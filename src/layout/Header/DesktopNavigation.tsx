import { socialLinks } from "@/assets/data/socialLinks";
import Logo from "@/components/Logo";
import Link from "next/link";

const DesktopNavigation = () => {
  return (
    <div className="h-[10vh] hidden md:flex  top-0 w-full ">
      <div className="container p-4 text-base h-full flex justify-between items-center">
        <ul className="flex items-center space-x-8">
          <li className="hover:opacity-75 ">
            <Link href="/articles">Articles</Link>
          </li>
          <li className="hover:opacity-75 ">
            <Link
              href="https://www.youtube.com/channel/UCf-slgSVQTTjezx5IPbyBxA"
              rel="noopener noreferrer"
              target="__blank"
            >
              Education
            </Link>
          </li>
        </ul>
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex space-x-8 items-center">
          {socialLinks.map(({ href, name, icon: Icon }) => (
            <li key={name} className="hover:opacity-75 cursor-pointer ">
              <Link href={href} rel="noopener noreferrer" target="__blank">
                <Icon size={22} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavigation;
