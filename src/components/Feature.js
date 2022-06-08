import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Feature({ icon, title }) {
  const [isVisible, setIsVisible] = useState(false);

  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };

  return (
    <VisibilitySensor
      onChange={(Visibility) => setIsVisible(Visibility)}
      //  minTopValue={100}
    >
      <section className="Feature flex items-center justify-center flex-col relative text-center mx-[3rem]">
        {/* icon */}
        <motion.section
          variants={variant}
          animate={`${isVisible}`}
          transition={{ duration: 1, type: "ease-out" }}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../image/${icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
        </motion.section>
        <span className="mt-5">{title}</span>
        <span className="text-[#707070] mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus unde
          molestias pariatur asperiores fugiat dolore.
        </span>
        <span className="text-[#e600ff] mt-[3rem] hover:cursor-pointer">
          Learn more...
        </span>
      </section>
    </VisibilitySensor>
  );
}

export default Feature;
