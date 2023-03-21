import Image from "next/image";
import { ScrollButton } from "../index";
import { welcomeBlur } from "../../models/index";

function Welcome() {
  let profileImage =
    "https://res.cloudinary.com/da0mjatsk/image/upload/v1679356338/portfolio/Profile_xtysaq.jpg";

  return (
    <>
      <div className="py-24 px-32 mt-24 text-center flex flex-col justify-around md:flex-row">
        <h1 className="text-secondary font-sans font-bold text-5xl mt-24 w-1/3 ">
          Hello im Agustin Cristobo, a{" "}
          <span className="text-primary">Frontend developer</span>
        </h1>
        <Image
          src={profileImage}
          blurDataURL={welcomeBlur}
          priority
          width="300"
          height="300"
          alt="profile-image"
          className="mt-12 xl:mx-24"
        />
      </div>
      <ScrollButton />
    </>
  );
}

export default Welcome;
