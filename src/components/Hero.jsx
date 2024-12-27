import "./canvas/hero.css"; // Import the CSS file
import Dragon from "../components/dragon.jsx"; // Import Dragon component
import leaf1 from "../assets/leaf 1.png"; // Ensure correct path and extension

const BannerSection = () => {
  return (
    <div className="section" id="banner">
      <div className="content-fit">
        <div className="title" data-before="WEBSITE">
          MY PORTFOLIO
        </div>
      </div>
      <Dragon /> {/* Render Dragon only here */}
      <div className="dialogue" id="dialogue-animation" style={{ display: "none" }}></div>
      <div className="dialogue" id="dialogue-webdev" style={{ display: "none" }}>
        Web Development
      </div>
      <div className="dialogue" id="dialogue-contact" style={{ display: "none" }}>
        Contact
      </div>
    </div>
  );
};

const AnimationSection = () => {
  return (
    <div className="section" id="intro">
      <div className="content-fit">
        <div className="number">01</div>
        <div className="des">
          <div className="title">3D Animation Design for Website</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus voluptas a porro libero recusandae quae, aut ratione,
            incidunt laborum, necessitatibus similique enim doloremque ex.
            Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic
            itaque consequatur nisi accusantium veritatis, voluptatem ratione!
            Placeat numquam nisi reiciendis harum quibusdam tempore eaque
            deleniti accusantium, veniam quae eos sed, asperiores laborum
            corporis odit mollitia consequatur adipisci? Quibusdam quis eos
            debitis non esse blanditiis laudantium rerum odit tempora? Corrupti
            maiores velit consequuntur cupiditate reiciendis similique
            provident repudiandae.
          </p>
        </div>
      </div>
      {/* Do NOT render Dragon here */}
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus voluptas a porro libero recusandae quae, aut ratione,
            incidunt laborum, necessitatibus similique enim doloremque ex.
            Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic
            itaque consequatur nisi accusantium veritatis, voluptatem ratione!
            Placeat numquam nisi reiciendis harum quibusdam tempore eaque
            deleniti accusantium, veniam quae eos sed, asperiores laborum
            corporis odit mollitia consequatur adipisci? Quibusdam quis eos
            debitis non esse blanditiis laudantium rerum odit tempora? Corrupti
            maiores velit consequuntur cupiditate reiciendis similique
            provident repudiandae.
          </p>
        </div>
      </div>

      {/* Render Dragon here */}
      <Dragon /> {/* Render Dragon only here */}
      
      {/* Use leaf1 for the image source */}
      <img
        src={leaf1} // Correctly use leaf1 here
        className="decorate leaf"
        alt="Decorative leaf"
        style={{ width: "70vw", bottom: 0, right: 0, zIndex: 106 }}
      />
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="section" id="contact">
      <div className="content-fit">
        <div className="number">03</div>
        <div className="des">
          <div className="title">CONTACT</div>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>aryankarki984@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+977 9867378511</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>aryanjk.com</td>
              </tr>
              <tr>
                <td>YouTube</td>
                <td>@Aryan.k</td>
              </tr>
            </tbody>
          </table>
          <div className="sign">AryanDev</div>
        </div>
      </div>

      {/* Do NOT render Dragon here */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* Render sections */}
      <BannerSection />
      <AnimationSection />
      <WebDevSection />
      {/* Contact section does not include Dragon */}
      <ContactSection />
    </div>
  );
};

export default App;
