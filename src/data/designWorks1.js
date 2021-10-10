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
import imgT12 from "../assets/my-images/jpg/12_photoshoot-stylisme.jpg";
import imgT13 from "../assets/my-images/jpg/13_photoshoot-stylisme.jpg";
import imgT14 from "../assets/my-images/jpg/14_photoshoot-stylisme.jpg";

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

export const designWorks1 = [
  {
    brand: `Stylisme`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`graphisme`],
    thumbnail: imgT4,
    otherImages: [
      { thumbnail: imgT2 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [illustrator, photoshop, photography]
  },
  {
    brand: `Création de vêtements`,
    slug: `creation-de-vêtements`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`developpement web`, `photographie`, `graphisme`],
    thumbnail: imgT5,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
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
    brand: `Création de vêtements`,
    slug: `creation-de-vêtements`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`graphisme`],
    thumbnail: imgT2,
    otherImages: [
      { thumbnail: imgT2 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [illustrator]
  },
  {
    brand: `Stylisme`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`graphisme`, `photographie`],
    thumbnail: imgT6,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [illustrator, photoshop, photography]
  },
  {
    brand: `Stylisme`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photographie`],
    thumbnail: imgT1,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    brand: `Timers & Todos`,
    slug: `timers-&-todos`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`developpement web`, `graphisme`],
    thumbnail: imgT7,
    link: "/portfolio-details-2",
    technologies: [vuejs, firebase]
  },
  {
    brand: `Photographie d'horreur`,
    slug: `photographie d'horreur`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photographie`],
    thumbnail: imgT3,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    brand: `Photographie d'horreur`,
    slug: `photographie-d'horreur`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photographie`],
    thumbnail: imgT8,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    brand: `Trouver un mentor`,
    slug: `trouver-un-mentor`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`developpement web`],
    thumbnail: imgT9,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [vuejs, firebase]
  },
  {
    brand: `Vente de vêtements`,
    slug: `vente-de-vêtements`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`developpement web`],
    thumbnail: imgT10,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [react, redux, stripe, firebase, sass]
  },
  {
    brand: `T-shirt Design`,
    slug: `t-shirt Design`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`graphisme`],
    thumbnail: imgT11,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [illustrator]
  },
  {
    brand: `Stylisme`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photogrphie`],
    thumbnail: imgT12,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    brand: `Stylisme`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photographie`],
    thumbnail: imgT13,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  },
  {
    brand: `Stylisme`,
    slug: `stylisme`,
    title: `Adaptable but Identifiable Product for Kandinsky.`,
    categories: [`photographie`],
    thumbnail: imgT14,
    otherImages: [
      { thumbnail: imgT12 },
      { thumbnail: imgT10 },
      { thumbnail: imgT9 },
      { thumbnail: imgT8 }
    ],
    link: "/portfolio-details-2",
    technologies: [photoshop, photography]
  }
];
