import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/src/components/footer"));
const Navbar = dynamic(() => import("@/src/components/Navbar"));
import Script from "next/script";
import { motion } from "framer-motion";

import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Head>
          <title>404 - Dracodemy 🚀</title>
          <meta
            property="description"
            content="Dracodemy is a learning website where you can learn so many basics topics of programming like DSA, Python, etc."
          />
          <meta name="theme-color" content="#b7acf6" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Dracodemy" />{" "}
          <meta
            property="og:image"
            content="https://dracodemy.tech/dracodemy.png"
          />
          <meta
            property="og:description"
            content="Dracodemy is a learning website where you can learn so many basics topics of programming like DSA, Python, etc."
          />
          <meta property="og:url" content="https://dracodemy.tech" />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer, coding tutorials, programming tutorials, coding notes, Dracodemy"
          />
          <meta name="author" content="Dracodemy" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content="404 | Dracodemy 🚀" />
          <meta name="subject" content="coding tutorials" />{" "}
          <meta
            name="google-adsense-account"
            content="ca-pub-2501084062179551"
          />
          <meta name="robots" content="noindex" />
        </Head>
        <Script
          async
          custom-element="amp-ad"
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
        ></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2501084062179551"
          crossorigin="anonymous"
        ></Script>
        <Navbar />
        <div className="notFoundDiv">
          <div className="main_div">
            <amp-ad
              width="100vw"
              height="320"
              type="adsense"
              data-ad-client="ca-pub-2501084062179551"
              data-ad-slot="3951934245"
              data-auto-format="rspv"
              data-full-width=""
            >
              <div overflow=""></div>
            </amp-ad>
            <h2>404</h2>
            <p className="p-color">You&apos;re on wrong path!</p>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}
