import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import bitmoji4 from "../assets/bitmoji4.png"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()} className="flex flex-col items-center">
    <p className={`${styles.sectionSubText} text-white`}>My work</p> {/* Ensure text is visible */}
    <h2 className={`${styles.sectionHeadText} text-yellow-600`}>Projects.</h2> {/* Ensure text is visible */}
    
    <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
    >
        Following projects showcase my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
    </motion.p>

    <img
        src={bitmoji4}
        className="bitmoji"
        alt="Bitmoji"
        style={{
            width: "100%",
            maxWidth: window.innerWidth <= 567 ? "70px" : "200px", // Adjust size for mobile
            margin: "5px auto 20px", // Center image with margin on top and bottom
            display: "block",
        }}
    />
</motion.div>

<div className='mt-20 flex flex-wrap gap-7 justify-center'>
    {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
    ))}
</div>


    </>
  );
};

export default SectionWrapper(Works, "");