import React from "react";
import secondBannerImage from"../assets/secondBannerImage.jpg"

const SecondBanner = () => {
  return (
    <section
      className="w-full mx-auto flex pt-12 md:pt-0 md:items-center bg-cover bg-rigth"
      style={{ maxWidth: "1600px ", height: "32rem" ,backgroundImage:`url(${secondBannerImage})`}}
    >
      <div className="container mx-auto">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 ">
        <h1 className="text-2xl my-4 text-white font-semibold ">
          Stripy Zig Zag jigsaw video and team
        </h1>
        <a
                    href="#"
                    className="text-xl inline-block no-underline border-b-1 border-gray-600 hover:text-indigo-500 hover:border-black mb-2 text-white"
                  >
                    view pricing
                  </a>
      </div>
      </div>
    </section>
  );
};

export default SecondBanner;
