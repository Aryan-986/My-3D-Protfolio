import "./canvas/hero.css"; // Import the CSS file
// Import Dragon component
 // Ensure correct path and extension
import bitmojia from "../assets/bitmoji2.png";
 // Import the new Head component

const AnimationSection = () => {
  return (
    <div className="section" id="intro">
      <div className="content-fit">
        <div className="number">01</div>
        <div className="des">
          <div className="title">3D Animation Design for Website</div>
          <p>
            I implement interactive 3D animations on websites using Three.js, a powerful JavaScript library for rendering 3D content.
            The process begins with exporting 3D models in GLTF and OBJ format and importing in website also by optimizing the web performance. 
            These models are then rendered using Three.js, where textures, lighting, and animations are applied to bring them to life.
            By leveraging WebGL, the animations are seamlessly integrated into the browser, ensuring smooth performance and interactivity.
            This approach allows for the creation of dynamic, engaging visuals, such as spinning objects, hover effects, or immersive 3D
            environments, enhancing the overall user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

const WebDevSection = () => {
  return (
    <div className="section" id="description">
      <div className="content-fit">
        <div className="number">02</div>
        <div className="des">
          <div className="title">WEBDEV</div>
          <p>
            In the MERN stack to create dynamic and responsive websites. For the frontend,
            I utilize HTML and CSS to structure and style the user interface, ensuring a visually 
            appealing and user-friendly experience. I employ the React framework to build interactive components that enhance user engagement 
            and facilitate smooth navigation throughout the site. On the backend, I use Node.js to handle server-side logic and manage API requests efficiently. 
            MongoDB serves as my database solution, allowing me to store and retrieve data seamlessly while providing flexibility
            in data modeling. This combination of technologies enables me to develop robust applications that are not only functional 
            but also scalable and maintainable. By integrating these tools effectively, I am able to deliver web solutions
            tailored to meet user needs.
          </p>
        </div>
      </div>

    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="section" id="contact">
      <div className="content-fit">
        <div className="number">03</div>
        <div className="des">
          <div className="title">About me</div>
          <div
            className="about-container"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              flexWrap: "wrap",
              flexDirection: window.innerWidth <= 567 ? "column" : "row", // Change direction based on screen width
            }}
          >
            <p
              className="about-text text-lg"
              style={{
                flex: "1",
                textAlign: window.innerWidth <= 567 ? "center" : "left", // Center text on mobile
              }}
            >
              Guy Who love to build websites and an enthusiastic learner dedicated to learn the art of technology. 
              With a good foundation in MERN (MongoDB, Express.js, React.js, Node.js) development, I specialize in 
              building dynamic and responsive e-commerce websites that deliver exceptional user experiences. My projects 
              often feature essential functionalities such as user authentication, product filtering, shopping cart management,
              secure payment gateways, and order tracking, ensuring a smooth and efficient shopping process for users.
              In addition to my e-commerce expertise, I have a keen interest in 3D graphics and animation using Three.js. This allows 
              me to create captivating interactive experiences by animating 3D models on websites. Whether it’s showcasing products from
              multiple angles or designing immersive backgrounds that respond to user interactions, I strive to bring a unique visual flair to my projects.
              I am always exploring new technologies and best practices to enhance my skills and deliver high-quality web solutions. My goal 
              is to blend functionality with stunning visuals, making every website not only user-friendly but also visually engaging. I am 
              excited about the future of web development and the endless possibilities it offers for creativity and innovation. 
            </p>
          </div>
          <img
            src={bitmojia}
            className="bitmoji"
            alt="Bitmoji"
            style={{
              width: "100%",
              maxWidth: window.innerWidth <= 567 ? "70px" : "200px", // Adjust size for mobile
              margin: window.innerWidth <= 567 ? "0 0 5px auto" : "auto",
              display: "block",
            }}
          />
          <div className="sign">AryanDev</div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Render sections */}
       {/* Render Head section here */}
      <AnimationSection />
      <WebDevSection />
      {/* Contact section does not include Dragon */}
      <ContactSection />
    </div>
  );
};

export default App;
