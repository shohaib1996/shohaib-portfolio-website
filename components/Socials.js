
import Link from "next/link";
import { RiYoutubeLine, RiFacebookLine, RiLinkedinLine, RiInstagramLine } from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine className="text-xl" />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine className="text-xl" />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine className="text-xl" />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine className="text-xl" />
      </Link>
    </div>
  )
};

export default Socials;
