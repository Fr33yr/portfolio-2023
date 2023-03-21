import Image from "next/image";

function App() {
  let profileImage =
    "https://res.cloudinary.com/da0mjatsk/image/upload/v1679356338/portfolio/Profile_xtysaq.jpg";

  return (
    <>
      <div className="py-24 px-32 mt-32 text-center flex flex-row justify-around">
        <h1 className="text-primary font-heading font-bold text-5xl mt-24 w-1/3">
          Hello im Agustin Cristobo, a Frontend developer
        </h1>
        <Image
          src={profileImage}
          width="300"
          height="300"
          alt="profile-image"
          className="mx-24"
        />
      </div>
    </>
  );
}

export default App;
