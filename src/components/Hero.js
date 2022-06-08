import { useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };

  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };

  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };

  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <VisibilitySensor
      onChange={(Visibility) => setIsVisible(Visibility)}
      minTopValue={300}
    >
      <section
        className="wrapper bg-[#081720] flex items-center justify-between 
    px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[4]"
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
          <motion.img
            variants={bg}
            animate={`${isVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../image/backgraphics.png")}
            alt=""
            className="absolute top-[-8rem] left-[19rem]"
          />
          <img
            src={require("../image/p 1.png")}
            alt=""
            className="absolute h-[34rem] top-[-15rem] left-[13rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${isVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../image/p 2.png")}
            alt=""
            className="absolute w-[175px] top-[94px] left-[235px]"
          />
          <motion.img
            variants={rect}
            animate={`${isVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../image/p 3.png")}
            alt=""
            className="absolute w-[5rem] top-[12rem] left-[13rem]"
          />
          <motion.img
            variants={heart}
            animate={`${isVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={require("../image/p 4.png")}
            alt=""
            className="absolute w-[5rem] top-[12rem] left-[12.5rem]"
          />
        </section>
      </section>
    </VisibilitySensor>
  );
}

export default Hero;
