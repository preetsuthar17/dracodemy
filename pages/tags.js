import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { motion } from "framer-motion";

import Footer from "../src/components/footer";

const Tags = ({ tags }) => {
  return (
    <>
      <Head>
        <title>Tags - Dracodemy 🚀</title>
        <meta
          property="description"
          content="Dracodemy is a learning website where you can learn so many basics topics of programming like DSA, Python, etc."
        />
        <meta name="robots" content="all" />
        <meta name="theme-color" content="#b7acf6" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Dracodemy" />{" "}
        <meta property="og:image" content="../public/favicon.ico" />
        <meta
          property="og:description"
          content="Dracodemy is a learning website where you can learn so many basics topics of programming like DSA, Python, etc."
        />
        <meta property="og:url" content="https://dracodemy.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer, coding tutorials, programming tutorials, coding notes, Dracodemy"
        />
        <meta name="author" content="Dracodemy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Tags | Dracodemy 🚀" />
        <meta name="subject" content="coding tutorials" />
      </Head>
      <div
        className="project-div"
        style={{
          minHeight: "60vh",
        }}
      >
        <motion.div
          initial={{ opacity: 1, translateX: -100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="project-headers">
            <div className="project-title">
              <h1>&#47;tags</h1>
            </div>
            <div className="project-header-text">
              <p>List of tags for blog posts.</p>
            </div>
          </div>
          <div
            className="tags-container"
            style={{
              margin: "0 3rem",
            }}
          >
            {tags.map((tag) => (
              <Link
                className="no-decoration p-color post-tag"
                href={`/tags/${tag}`}
                key={tag}
              >
                <div className="tags-item">{tag}</div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Tags;

export async function getStaticProps() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(articlesDirectory);

  const allTags = fileNames.reduce((tags, fileName) => {
    const filePath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    if (data.tags && Array.isArray(data.tags)) {
      tags.push(...data.tags);
    }

    return tags;
  }, []);

  const uniqueTags = [...new Set(allTags)];

  return {
    props: {
      tags: uniqueTags,
    },
  };
}
