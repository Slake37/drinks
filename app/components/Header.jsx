import Image from "next/image";
import group1 from "../Group 1.png";
import bg from "../../app/landingPageBackground.jpg";

const Header = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 md:flex-row p-2 w-full mt-[3rem]"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-2 p-3">
        <h1 className="neon-text text-7xl md:text-[5rem] lg:text-[8rem] font-Pacifico">
          Drinks
        </h1>
        <p className="text-white w-full max-w-[80%] text-center md:text-left   md:text-xl lg:text-2xl">
          Ready to impress your guests? Start exploring our cocktail recipes
          today and become a mixology expert in no time!
        </p>
      </div>

      <Image
        src={group1}
        width={500}
        height={500}
        alt="Cocktail glass"
        className="w-full md:w-[250px] lg:w-[700px]"
      />
    </div>
  );
};
export default Header;
