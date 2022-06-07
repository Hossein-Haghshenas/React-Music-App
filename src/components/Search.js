function Search() {
  return (
    <section
      className="search relative h-[65rem] bg-[#081730]
     px-[5rem] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] 
     flex items-center justify-between rounded-b-[5rem]"
    >
      {/* left side */}
      <section className="left ">
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
      <section className="right"></section>
    </section>
  );
}

export default Search;
