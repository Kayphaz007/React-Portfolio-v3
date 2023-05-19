// import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { styles } from "../styles";
import { useEffect, useState } from "react";
import { client } from "../client";

// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [resume, setResume] = useState<any[]>([]);
  useEffect(() => {
    const query = '*[_type == "resume"]{cv, "resumeURL": cv.asset -> url}';

    client.fetch(query).then((data) => setResume(data));
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Michael</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          <div className="flex flex-row gap-7 my-3 md:my-10">
            <a href="https://github.com/Kayphaz007" target="_blank">
              <FaGithub size={57} />
            </a>
            <a href="https://www.linkedin.com/in/ashu-achua/" target="_blank">
              <FaLinkedinIn size={57} />
            </a>
          </div>
          <a href={`${resume[0]?.resumeURL}?dl=`} target="_blank">
            <button className="btn btn-lg">Resume</button>
          </a>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
