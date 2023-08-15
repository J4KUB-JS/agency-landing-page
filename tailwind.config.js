/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        darkDesaturatedCyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        darkModerateCyan: "hsl(168, 34%, 41%)",
        lightModerateCyan: "hsl(167, 44%, 55%)",
        veryDarkDesaturatedBlue: "hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
        lightBlue: "#3EBFFF",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        logo: "url(./src/assets/logo.svg)",
        heroDesktop: "url(./src/assets/desktop/image-header.jpg)",
        heroMobile: "url(./src/assets/mobile/image-header.jpg)",
        eggImg: "url(./src/assets/desktop/image-transform.jpg)",
        glassImg: "url(./src/assets/desktop/image-stand-out.jpg)",
        cherryImg: "url(./src/assets/desktop/image-graphic-design.jpg)",
        orangeImg: "url(./src/assets/desktop/image-photography.jpg)",
        galleryCone: "url(./src/assets/desktop/image-gallery-cone.jpg)",
        galleryMilkBottle: "url(./src/assets/desktop/image-gallery-milkbottles.jpg)",
        gallerySugarCubes: "url(./src/assets/desktop/image-gallery-sugarcubes.jpg)",
        galleryOrange: "url(./src/assets/desktop/image-gallery-orange.jpg)",
      },
      backgroundPosition: {
        bottomCenter: "bottom center",
      },
    },
  },
  plugins: [],
};
