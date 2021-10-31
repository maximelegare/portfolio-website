import imgT1 from "../assets/my-images/jpg/01_france-lavoie.jpg";
import imgT2 from "../assets/my-images/jpg/02_princess.svg";
import imgT3 from "../assets/my-images/jpg/03_fed-by-music.jpg";
import imgT4 from "../assets/my-images/jpg/04_buisness-card-stylisme.jpg";
import imgT5 from "../assets/my-images/jpg/05_bikanky-landing.jpg";
import imgT6 from "../assets/my-images/jpg/06_stylisme-landing.jpg";
import imgT7 from "../assets/my-images/png/07_timing-app.png";
import imgT8 from "../assets/my-images/jpg/08_horror-dolls.jpg";
import imgT9 from "../assets/my-images/jpg/09_find-a-coach.jpg";
import imgT10 from "../assets/my-images/jpg/10_crown-shop.jpg";
import imgT11 from "../assets/my-images/jpg/11_lobster&narval.jpg";
import imgT13 from "../assets/my-images/jpg/13_photoshoot-stylisme.jpg";
import imgT14 from "../assets/my-images/jpg/14_photoshoot-stylisme.jpg";
import imgT15 from "../assets/my-images/jpg/15_photoshoot-stylisme.jpg";

import danielle1 from "../assets/my-images/jpg/danielle/danielle-1.jpg";
import danielle2 from "../assets/my-images/jpg/danielle/danielle-2.jpg";
import danielle3 from "../assets/my-images/jpg/danielle/danielle-3.jpg";
import danielle4 from "../assets/my-images/jpg/danielle/danielle-4.jpg";
import danielle5 from "../assets/my-images/jpg/danielle/danielle-5.jpg";
import danielle6 from "../assets/my-images/jpg/danielle/danielle-6.jpg";
import danielle7 from "../assets/my-images/jpg/danielle/danielle-7.jpg";
import danielle8 from "../assets/my-images/jpg/danielle/danielle-8.jpg";

import frederique1 from "../assets/my-images/jpg/frederique/frederique-1.jpg";
import frederique2 from "../assets/my-images/jpg/frederique/frederique-2.jpg";
import frederique3 from "../assets/my-images/jpg/frederique/frederique-3.jpg";
// import frederique4 from '../assets/my-images/jpg/frederique/frederique-4.jpg'

import genevieve1 from "../assets/my-images/jpg/genevieve/genevieve-1.jpg";
import genevieve2 from "../assets/my-images/jpg/genevieve/genevieve-2.jpg";

import photography from "../assets/my-images/svg/technologies/camera3.svg";
import illustrator from "../assets/my-images/svg/technologies/illustrator.svg";
import firebase from "../assets/my-images/svg/technologies/firebase.svg";
// import nodejs from '../assets/my-images/svg/technologies/nodejs.svg'
import photoshop from "../assets/my-images/svg/technologies/photoshop.svg";
import react from "../assets/my-images/svg/technologies/react.svg";
import redux from "../assets/my-images/svg/technologies/redux.svg";
import sass from "../assets/my-images/svg/technologies/sass.svg";
import stripe from "../assets/my-images/svg/technologies/stripe.svg";
import vuejs from "../assets/my-images/svg/technologies/vuejs.svg";
// import mongodb from '../assets/my-images/svg/technologies/mongodb.svg'
import materialui from "../assets/my-images/svg/technologies/materialui.svg";
import styledcomponent from "../assets/my-images/svg/technologies/styledcomponent.svg";
// import express from '../assets/my-images/svg/technologies/express.svg'

import flavoieColors from "../assets/my-images/svg/colors/colors-flavoie_buisness.svg";
import timingColors from "../assets/my-images/svg/colors/colors_timing-app.svg";

import montserrat_semiBold from "../assets/my-images/svg/typographies/montserrat_semiBold.svg";
import montserrat_regular from "../assets/my-images/svg/typographies/montserrat_regular.svg";
import comfortaa_regular from "../assets/my-images/svg/typographies/comfortaa_regular.svg";
import open_sans_regular from "../assets/my-images/svg/typographies/open-sans_regular.svg";

import githubWhite from "../assets/my-images/svg/technologies/githubWhite.svg";
import globeWhite2 from '../assets/my-images/svg/globeWhite2.svg'
import linkedin from '../assets/my-images/svg/linkedin.svg'
import instagram from '../assets/my-images/svg/instagram.svg'


export const aboutData = {
  links:[
    {
      link: "https://github.com/maximelegare",
      icon: githubWhite
    },
    {
      link: "https://urlgeni.us/linkedin/t5QR",
      icon: linkedin
    }
  ]
}

export const designWorks1 = [
  {
    id: "a1",
    categories: [`graphisme`],
    thumbnail: imgT4,
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [illustrator, photoshop, photography],
    specifications: [
      {
        title: "Montserrat Semi-Bold 400",
        image: montserrat_semiBold,
        dim: true
      },
      { title: "Montserrat Regular", image: montserrat_regular },
      { title: "Colors", image: flavoieColors }
    ]
  },
  {
    id: "a2",
    categories: [`developpement web`, `photographie`, `graphisme`],
    thumbnail: imgT5,
    otherImages: [],
    link: "/portfolio-details-2",
    links: [
      {
        link: "https://github.com/maximelegare/bikanky-mtl",
        icon: githubWhite
      },
      {
        link: "https://bikanky-montreal.firebaseapp.com/",
        icon: globeWhite2
      }
    ],
    technologies: [
      react,
      redux,
      firebase,
      stripe,
      materialui,
      styledcomponent,
      photoshop,
      illustrator,
      photography
    ]
  },
  {
    id: "a3",
    categories: [`graphisme`],
    thumbnail: imgT2,
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [illustrator]
  },
  {
    id: "a4",
    categories: [`graphisme`, `photographie`],
    thumbnail: imgT6,
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [illustrator, photoshop, photography]
  },
  {
    id: "a5",
    categories: [`photographie`],
    thumbnail: imgT1,
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    id: "a6",
    categories: [`developpement web`, `graphisme`],
    otherImages: [],
    links: [
      {
        link: "https://github.com/maximelegare/timing-app",
        icon: githubWhite
      },
      {
        link: "https://timing-app-7c35b.web.app/timers",
        icon: globeWhite2
      }
    ],
    thumbnail: imgT7,
    link: "/portfolio-details-2",
    technologies: [vuejs, firebase],
    specifications: [
      {
        title: "Montserrat Semi-Bold 400",
        image: comfortaa_regular,
        dim: true
      },
      { title: "Montserrat Regular", image: open_sans_regular, dim: true },
      { title: "Colors", image: timingColors }
    ]
  },
  {
    id: "a7",
    categories: [`photographie`],
    thumbnail: imgT3,
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    id: "a8",
    categories: [`photographie`],
    thumbnail: imgT8,
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    id: "a9",
    categories: [`developpement web`],
    thumbnail: imgT9,
    otherImages: [],
    link: "/portfolio-details-2",
    links: [
      {
        link: "https://github.com/maximelegare/coach_app",
        icon: githubWhite
      },
      {
        link: "https://find-a-coach-71353.web.app/coaches",
        icon: globeWhite2
      }
    ],
    technologies: [vuejs, firebase]
  },
  {
    id: "a10",
    categories: [`developpement web`],
    thumbnail: imgT10,
    links: [
      {
        link: "https://github.com/maximelegare/crwn-clothing-react",
        icon: githubWhite
      },
      {
        link: "https://crwn-shop-904f9.web.app/",
        icon: globeWhite2
      }
    ],
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [react, redux, stripe, firebase, sass]
  },
  {
    id: "a11",
    categories: [`graphisme`],
    thumbnail: imgT11,
    otherImages: [],
    link: "/portfolio-details-2",
    technologies: [illustrator]
  },
  // {
  //   brand: `Stylisme danielle 2`,
  //   slug: `stylisme`,
  //   title: `Adaptable but Identifiable Product for Kandinsky.`,
  //   categories: [`photographie`],
  //   thumbnail: imgT12,
  //   otherImages: [

  //   ],
  //   link: "/portfolio-details-2",
  //   technologies: [photoshop, photography]
  // },
  {
    id: "a12",
    categories: [`photographie`],
    thumbnail: imgT13,
    otherImages: [
      { thumbnail: frederique1 },
      { thumbnail: frederique2 },
      // {thumbnail:frederique4},
      { thumbnail: frederique3 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    id: "a13",
    brand: `Stylisme Danielle`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photographie`],
    thumbnail: imgT14,
    otherImages: [
      { thumbnail: danielle1 },
      { thumbnail: danielle2 },
      { thumbnail: danielle4 },
      { thumbnail: danielle5 },
      { thumbnail: danielle7 },
      { thumbnail: danielle8 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    id: "a14",
    brand: `Stylisme Danielle`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photographie`],
    thumbnail: imgT15,
    otherImages: [{ thumbnail: genevieve1 }, { thumbnail: genevieve2 }],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  }
];
