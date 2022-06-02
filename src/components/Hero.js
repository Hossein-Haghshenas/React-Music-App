import React from "react";
import DownloadAds from "./DownloadAds";

function Hero() {
  return (
    <section
      className="wrapper bg-[#081720] flex items-center justify-between 
    px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]"
    >
      {/* left side */}
      <section className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
        <span>Experience The</span>
        <span>
          <b>Best Qulaity Music</b>
        </span>
        <span className="text-[15px] text-[#525d6e]">
          Donce laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
          <br />
          Suspendisse in leo non risus tincidunt lobortis.
        </span>
        {/* download ads */}
        <section>
          <span className="text-[13px]">Download now on IOS and Android</span>
          <DownloadAds />
        </section>
      </section>
      {/* right side */}
      <section className="images relative w-[50%]">
        <img
          src={require("../image/backgraphics.png")}
          alt=""
          className="absolute top-[-8rem] left-[19rem]"
        />
        <img
          src={require("../image/p 1.png")}
          alt=""
          className="absolute h-[34rem] top-[-15rem] left-[13rem]"
        />
        <img
          src={require("../image/p 2.png")}
          alt=""
          className="absolute w-[175px] top-[94px] left-[235px]"
        />
        <img
          src={require("../image/p 3.png")}
          alt=""
          className="absolute w-[5rem] top-[12rem] left-[13rem]"
        />
        <img
          src={require("../image/p 4.png")}
          alt=""
          className="absolute w-[5rem] top-[12rem] left-[12.5rem]"
        />
      </section>
    </section>
  );
}

export default Hero;
