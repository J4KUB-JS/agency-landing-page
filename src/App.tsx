import "./App.css";
import logo from "./assets/logo.svg";
import heroImg from "./assets/desktop/image-header.jpg";
import arrowDown from "./assets/icon-arrow-down.svg";

function App() {
  return (
    <>
      <div className="font-barlow">
        <nav className="sticky top-0 flex  items-center justify-between px-6 py-8 w-full bg-lightBlue">
          <div>
            <img src={logo} />
          </div>
          <ul className="flex items-center text-white text-xl gap-12">
            <li className="hover:text-yellow">About</li>
            <li className="hover:text-yellow">Services</li>
            <li className="hover:text-yellow">Projects</li>
            <li className="hover:text-yellow hover:bg-yellow hover:bg-opacity-20 bg-white bg-opacity-20 rounded-full px-5 py-2 font-fraunces font-semibold">
              Contact
            </li>
          </ul>
        </nav>

        <section id="hero">
          <img src={heroImg} />
          <div className="absolute top-80  flex flex-col items-center w-full">
            <div className="text-white font-bold uppercase text-7xl tracking-widest font-fraunces">
              We are creatives
            </div>
            <img src={arrowDown} className="mt-20" />
          </div>
        </section>

        <section id="grid">
          <div>
            Transform your brand We are a full-service creative agency specializing in
            helping brands grow fast. Engage your clients through compelling visuals that
            do most of the marketing for you. Learn more
          </div>
          <div>
            Stand out to the right audience Using a collaborative formula of designers,
            researchers, photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places. Learn more
          </div>
          <div>
            Graphic design Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’ attention.
          </div>
          <div>
            Photography Increase your credibility by getting the most stunning,
            high-quality photos that improve your business image.
          </div>
        </section>

        <section id="testimonials">
          <div>Client testimonials</div>
          <div>
            We put our trust in Sunnyside and they delivered, making sure our needs were
            met and deadlines were always hit. Emily R. Marketing Director
          </div>
          <div>
            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success
            made it a satisfying and enjoyable experience. Thomas S. Chief Operating
            Officer
          </div>
          <div>
            Incredible end result! Our sales increased over 400% when we worked with
            Sunnyside. Highly recommended! Jennie F. Business Owner
          </div>
        </section>
        <footer>
          <div>About Services Projects Contact</div>
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Jakub Spirydon</a>.
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
