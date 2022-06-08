import MusicPlayer from "./MusicPlayer";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Search() {
  const [isVisible, setIsVisible] = useState(false);

  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };

  const redImg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };

  const musicImg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  return (
    <section
      className="search relative h-[65rem] bg-[#081730]
     px-[5rem] pt-[18rem] pb-[10rem] mt-[-15rem] z-[2] 
     flex items-center justify-between rounded-b-[5rem]"
    >
      {/* left side */}
      <section className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${isVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../image/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={require("../image/d1.png")}
          alt=""
          className="absolute top-[26rem] w-[16rem]"
        />
        <motion.img
          variants={redImg}
          animate={`${isVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../image/d2.png")}
          alt=""
          className="absolute top-[32.7rem] left-[7rem] w-[9rem]"
        />
        <motion.img
          variants={musicImg}
          animate={`${isVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../image/d3.png")}
          alt=""
          className="absolute top-[33rem] left-[17rem] w-[9rem]"
        />
        <motion.img
          variants={musicImg}
          animate={`${isVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          src={require("../image/d4.png")}
          alt=""
          className="absolute top-[50rem] left-[2rem] w-[17rem]"
        />
      </section>
      {/* right side */}
      <section className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] ml-[1.2rem] z-[2]">
        {/* Search bar */}
        <section className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19]  outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* search icon */}
          <section
            className="searchIcon flex flex-1 items-center rounded-xl ml-4
          bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-[3rem]"
          >
            <img
              src={require("../image/search.png")}
              alt=""
              className="w-[1.5rem] cursor-pointer"
            />
          </section>
        </section>
        {/* tild icon */}
        <section className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../image/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </section>
        {/* paragraph */}
        <section className="details flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4d586a]">
            Duis feugiat congue metus ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius
          </span>
        </section>
        {/* Music Player */}
        <VisibilitySensor
          onChange={(Visibility) => setIsVisible(Visibility)}
          minTopValue={300}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </section>
    </section>
  );
}

export default Search;
