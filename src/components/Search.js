function Search() {
  return (
    <section
      className="search relative h-[65rem] bg-[#081730]
     px-[5rem] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] 
     flex items-center justify-between rounded-b-[5rem]"
    >
      {/* left side */}
      <section className="left flex-1">
        <img
          src={require("../image/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={require("../image/d1.png")}
          alt=""
          className="absolute top-[26rem] w-[16rem]"
        />
        <img
          src={require("../image/d2.png")}
          alt=""
          className="absolute top-[32.7rem] left-[7rem] w-[9rem]"
        />
        <img
          src={require("../image/d3.png")}
          alt=""
          className="absolute top-[33rem] left-[17rem] w-[9rem]"
        />
        <img
          src={require("../image/d4.png")}
          alt=""
          className="absolute top-[50rem] left-[2rem] w-[17rem]"
        />
      </section>
      {/* right side */}
      <section className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search bar */}
        <section className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] ml-[1rem] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* search icon */}
          <section
            className="searchIcon flex flex-1 items-center rounded-xl ml-4
          bg-gradient-to-bl from-[#f3071d] to-[#e600ff] p-4 h-[3rem]"
          >
            <img
              src={require("../image/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Search;
