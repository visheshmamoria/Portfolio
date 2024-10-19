import { SiBlender, SiGithub, SiMongodb, SiOpencv, SiPython, SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";

const Tech = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <motion.div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiTensorflow className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiGithub className="cursor-pointer text-[80px] text-violet-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiBlender className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiOpencv className="cursor-pointer text-[80px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiMongodb className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiPython className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
