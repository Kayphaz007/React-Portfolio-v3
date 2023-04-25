import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { css } from "../assets";

const Tech = () => {
  const [skills, setSkills] = useState<any[]>([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => setSkills(data));
  }, []);
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        My Tech Stacks.
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {skills.map((skill) => (
          <div className="w-28 h-28" key={skill.name}>
            <BallCanvas icon={urlFor(skill?.icon??css).url()} />
            <p className="flex justify-center items-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
