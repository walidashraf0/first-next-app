import Image from "next/image";
import MyLogo from "../../../../public/mylogo.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-8">
      <div className="flex flex-col items-start gap-5">
        <h2 className="text-8xl font-extrabold text-blue-600 mb-4">Hero Page</h2>
        <p className="text-gray-700 mt-4 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          exercitationem architecto sequi ratione iste dolorem consequuntur quia
          dolorum suscipit! Unde?
        </p>
      </div>
      <div>
        <Image src={MyLogo} width={500} height={500} alt="logo" />
      </div>
    </div>
  );
};

export default Hero;
