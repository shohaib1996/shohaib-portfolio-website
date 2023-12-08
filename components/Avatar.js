import Image from "next/image";

import avatar_img from "../public/avatar.png"
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={avatar_img}
        alt="avatar"
        width={550}
        height={450}
        className="translate-z-0 w-full h-full"
         />
  
    </div>
  )
};

export default Avatar;
