

import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-6">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden"
              className="h2 xl:mt-6">
              My Services
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">As a MERN stack developer, I specialize in crafting dynamic and responsive web solutions. My services encompass the entire web development process, from designing intuitive user interfaces to implementing robust back-end functionalities.
            </motion.p>
          </div>
          <motion.div 
          variants={fadeIn("down", 0.6)} initial="hidden" animate="show" exit="hidden"
          className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />

    </div>
  )
};

export default Services;
