import React from "react";

function Feature({ icon, title }) {
  return (
    <section className="Feature flex items-center justify-center flex-col relative text-center mx-[3rem]">
      {/* icon */}
      <section className="icon bg-[#081730] rounded-2xl p-4">
        <img
          src={require(`../image/${icon}.png`)}
          alt=""
          className="w-[3rem]"
        />
      </section>
      <span className="mt-5">{title}</span>
      <span className="text-[#707070] mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde
        molestias pariatur asperiores fugiat dolore.
      </span>
      <span className="text-[#e600ff] underline mt-[3rem] hover:cursor-pointer">
        Learn more...
      </span>
    </section>
  );
}

export default Feature;
