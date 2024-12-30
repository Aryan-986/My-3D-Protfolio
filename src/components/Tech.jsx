import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies} from "../constants"
import bitmoji5 from "../assets/bitmoji5.png"

const Tech = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Technologies</h1>
      <p className="text-lg text-center mb-4">As a seasoned developer and self-learner, 
        I have honed my skills in a range of technologies, including HTML, CSS, and React,
         which enable me to craft dynamic and visually appealing user interfaces. While I 
         continue to expand my expertise in backend technologies like Node.js, I have successfully 
         integrated features such as e-commerce functionality and more into various projects, 
         showcasing my ability to drive and can drive more complex projects forward.</p> <p2 className="font-thin text-sm">update on Dec 27, 2024</p2>
         <img
    src={bitmoji5}
    className="bitmoji"
    alt="Bitmoji"
    style={{
      width: "100%",
      maxWidth: window.innerWidth <= 567 ? "70px" : "200px", // Adjust size for mobile
      margin: window.innerWidth <= 567 ? "0 0 5px auto" : "auto",
      display: "block",
    }}
  />
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology) => (
        <div className="w-28 h-28 mt-16" key={technology.name}>
          <BallCanvas icon={technology.icon} name={technology.name} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");