import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <section
      className="download flex flex-col items-center justify-start
       px-[5rem] py-[18rem] mt-[-10rem] h-[48rem] rounded-b-[5rem]
     relative z-[1]  bg-[#020917]"
    >
      {/* tild icon */}
      <img src={require("../image/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <section className="headline flex flex-col items-center mt-7 text-[2rem]">
        <span>Download The Best Music</span>
        <span>
          <b>App Now!</b>
        </span>
        <span className="text-[1rem] text-gray-400 text-center mt-[1rem] pt-[1rem]">
          Duis feugiat congue metus ultrices vulputate nibh viverra eget.
          Vestibulum ullamcorper volutpat <br /> varius
        </span>
      </section>
      {/* download ads */}
      <section className="mt-14">
        <DownloadAds />
      </section>
    </section>
  );
}

export default Download;
