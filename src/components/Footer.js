import React from "react";
import CenterMenu from "./CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer() {
  const socialStyle =
    "rounded-full border-2 border-white p-2 mr-[5rem] cursor-pointer hover:bg-gradient-to-bl from-[#f3071d] to-[#e600ff]";

  return (
    <section
      className="footer flex flex-col items-center justify-start px-[5rem] pt-[18rem] mt-[-10rem]
       h-[45rem] relative z-[0] bg-[#081730] "
    >
      <CenterMenu />
      {/* Social icons */}
      <section className="flex w-[100%] justify-center mt-14 z-[1]">
        <section className={`facebook  ${socialStyle}`}>
          <Facebook />
        </section>
        <section className={`twitter  ${socialStyle}`}>
          <Twitter />
        </section>
        <section className={`youtube  ${socialStyle}`}>
          <YouTube />
        </section>
        <section className={`linkedin  ${socialStyle}`}>
          <LinkedIn />
        </section>
      </section>
      {/* details */}
      <section className="detils flex justify-center">
        <span className="text-[1rem] text-gray-400 text-center mt-[4rem] px-[15rem]">
          Duis feugiat congue metus ultrices vulputate nibh viverra eget.
          Vestibulum ullamcorper volutpat <br /> varius
        </span>
      </section>
    </section>
  );
}

export default Footer;
