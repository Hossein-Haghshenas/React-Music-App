import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <section
      className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem]
    pt-[18rem] mt-[-10rem] relative z-[3] rounded-b-[5rem]"
    >
      {/* tild icon */}
      <img src={require("../image/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <section className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </section>
      {/* feature  */}
      <section className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="For Live Music" />
        <Feature icon="music icon" title="For Daily Music" />
        <Feature icon="Group 4" title="For Artists" />
      </section>
    </section>
  );
}

export default Experience;
