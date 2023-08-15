import "./App.css";
import logo from "./assets/logo.svg";
import menu from "./assets/icon-hamburger.svg";
import arrowDown from "./assets/icon-arrow-down.svg";
import emilyProfilePicture from "./assets/image-emily.jpg";
import thomasProfilePicture from "./assets/image-thomas.jpg";
import jennieProfilePicture from "./assets/image-jennie.jpg";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";

function App() {
  return (
    <>
      <div className="font-barlow bg-yellow bg-opacity-5">
        <nav className="sticky top-0 flex  items-center justify-between px-6 py-8 w-full bg-lightBlue">
          <div>
            <img src={logo} />
          </div>

          <img src={menu} className="md:hidden" />

          <ul className="md:flex items-center text-white text-xl gap-12 hidden">
            <li className="hover:text-yellow">About</li>
            <li className="hover:text-yellow">Services</li>
            <li className="hover:text-yellow">Projects</li>
            <li className="hover:text-yellow hover:bg-yellow hover:bg-opacity-20 bg-white bg-opacity-20 rounded-full px-5 py-2 font-fraunces font-semibold">
              Contact
            </li>
          </ul>
        </nav>

        <section id="hero" className="bg-lightBlue w-full">
          <div className="bg-heroDesktop bg-bottomCenter bg-cover h-[500px] md:h-[600px] lg:h-[700px] xl:h-[900px] max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center pt-24 md:pt-48 lg:pt-54 xl:pt-60">
              <div className="text-white font-bold uppercase text-5xl tracking-widest font-fraunces w-96 md:w-full lg:text-6xl xl:text-7xl">
                We are creatives
              </div>
              <img src={arrowDown} className="mt-10 lg:mt-20" />
            </div>
          </div>
        </section>

        <section
          id="grid"
          className="max-w-screen-xl mx-auto grid md:grid-cols-2 grid-cols-1"
        >
          <div className="bg-eggImg h-[400px] md:h-[500px] w-full bg-cover bg-center" />
          <div className="flex flex-col items-center justify-center h-[400px] md:h-[500px] md:items-start md:text-left mx-auto md:col-start-1 md:row-start-1">
            <div className="font-fraunces text-4xl font-bold w-80 mb-6 text-veryDarkDesaturatedBlue">
              Transform your brand
            </div>
            <p className="w-[400px] md:w-[300px] lg:w-[400px] leading-7 text-lg text-veryDarkGrayishBlue">
              We are a full-service creative agency specializing in helping brands grow
              fast. Engage your clients through compelling visuals that do most of the
              marketing for you.
            </p>
            <div className="font-fraunces text-xl font-bold w-32 mt-10 text-veryDarkDesaturatedBlue">
              Learn more
              <div className="h-3 bg-yellow mt-[-10px] bg-opacity-30 rounded-xl" />
            </div>
          </div>

          <div className="bg-glassImg h-[400px] md:h-[500px] w-full bg-cover bg-center" />
          <div className="flex flex-col items-center justify-center h-[400px] md:h-[500px] md:items-start md:text-left mx-auto">
            <div className="font-fraunces text-4xl font-bold w-80 mb-6 text-veryDarkDesaturatedBlue">
              Stand out to the right audience
            </div>
            <p className="w-[400px] md:w-[300px] lg:w-[400px] leading-7 text-lg text-veryDarkGrayishBlue">
              Using a collaborative formula of designers, researchers, photographers,
              videographers, and copywriters, we’ll build and extend your brand in digital
              places.
            </p>
            <div className="font-fraunces text-xl font-bold w-32 mt-10 text-veryDarkDesaturatedBlue">
              Learn more
              <div className="h-3 bg-softRed mt-[-10px] bg-opacity-30 rounded-xl" />
            </div>
          </div>

          <div className="bg-cherryImg h-[500px] md:h-[500px] w-full bg-cover bg-center flex flex-col items-center justify-end pb-16">
            <div className="text-darkDesaturatedCyan font-fraunces text-3xl font-bold mb-4">
              Graphic design
            </div>
            <div className="w-[300px] lg:w-[400px] leading-7 text-lg text-darkDesaturatedCyan">
              Great design makes you memorable. We deliver artwork that underscores your
              brand message and captures potential clients’ attention.
            </div>
          </div>

          <div className="bg-orangeImg h-[500px] w-full bg-cover bg-center flex flex-col items-center justify-end pb-16">
            <div className="text-darkBlue font-fraunces text-3xl font-bold mb-4">
              Photography
            </div>
            <div className="w-[300px] lg:w-[350px] leading-7 text-lg text-veryDarkDesaturatedBlue">
              Increase your credibility by getting the most stunning, high-quality photos
              that improve your business image.
            </div>
          </div>
        </section>

        <section id="testimonials" className="mt-16 max-w-screen-xl mx-auto px-10">
          <div className="text-grayishBlue font-fraunces uppercase font-semibold text-xl tracking-widest">
            Client testimonials
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-20">
            <div className="flex flex-col items-center">
              <img src={emilyProfilePicture} className=" rounded-full h-20" />
              <div className="w-[300px] lg:w-[250px] xl:w-[300px] mt-8 text-lg text-veryDarkGrayishBlue">
                We put our trust in Sunnyside and they delivered, making sure our needs
                were met and deadlines were always hit.
              </div>
              <div>
                <div className="font-bold font-fraunces text-lg mt-8">Emily R.</div>
                <div className="text-grayishBlue mt-1">Marketing Director</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={thomasProfilePicture} className=" rounded-full h-20" />
              <div className="w-[300px] mt-8 text-lg text-veryDarkGrayishBlue">
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
                success made it a satisfying and enjoyable experience.
              </div>
              <div>
                <div className="font-bold font-fraunces text-lg mt-8">Thomas S. </div>
                <div className="text-grayishBlue mt-1">Chief Operating Officer</div>
              </div>
            </div>
            <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
              <img src={jennieProfilePicture} className=" rounded-full h-20" />
              <div className="w-[300px] mt-8 text-lg text-veryDarkGrayishBlue">
                Incredible end result! Our sales increased over 400% when we worked with
                Sunnyside. Highly recommended!
              </div>
              <div>
                <div className="font-bold font-fraunces text-lg mt-8">Jennie F. </div>
                <div className="text-grayishBlue mt-1">Business Owner</div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="image-gallery"
          className="grid grid-cols-2 md:grid-cols-4 max-w-screen-xl mx-auto"
        >
          <div className="h-[250px] md:h-[350px] w-full bg-galleryMilkBottle bg-cover bg-center" />
          <div className="h-[250px] md:h-[350px] w-full bg-galleryOrange bg-cover bg-center" />
          <div className="h-[250px] md:h-[350px] w-full bg-galleryCone bg-cover bg-center" />
          <div className="h-[250px] md:h-[350px] w-full bg-gallerySugarCubes bg-cover bg-center" />
        </section>
        <footer className=" bg-lightModerateCyan bg-opacity-60 pt-10 text-darkModerateCyan">
          <div className="font-bold text-2xl">sunnyside</div>
          <div className=" space-x-5 font-semibold mt-8">
            <span>About</span>
            <span>Services</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
          <div className="flex gap-8 justify-center mt-16">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
            <img src={pinterest} />
          </div>
          <div className="bg-darkModerateCyan text-white mt-10 py-1">
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
