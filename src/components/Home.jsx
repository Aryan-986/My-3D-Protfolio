import {motion} from 'framer-motion'

import {styles} from '../styles'
import bitmojiii from '../assets/bitmoji1.png'

const Home = () => {
  return (
    <section className="relative w-full h-[120vh] mx-auto sm:">
    <div
      className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-purple-500" />
        <div className="w-1 sm:h-96 h-60 violet-gradient" />
      </div>
  
      <div>
        <h1 className={`${styles.heroHeadText} text-blue-800`}>
          Hello, It's Me <span className="text-yellow-600">Aryan</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop and design websites,
          <br className="sm:block hidden" />
          including those with interactive animations.
          <br className="sm:block hidden" />
        </p>
      </div>
    </div>
    <img src={bitmojiii} className="bitmoji absolute top-[150px] left-[50%] translate-x-[-50%]" alt="Bitmoji" />
  
    {/* Bottom Navigation Section */}
    <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center">
      <a href="#about">
        <div className="w-[35px] h-[70px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  </section>
  
  )
}

export default Home