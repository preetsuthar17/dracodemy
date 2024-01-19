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
        <title>Tags | Preet Suthar 🚀</title>
        <meta name="robots" content="all" />

        <meta name="theme-color" content="#1c9cfc" />
        <meta httpEquiv="content-language" content="en" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Tags | Preet Suthar 🚀" />
        <meta property="og:url" content="https://preetsuthar.me/tags" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer"
        />
        <meta name="author" content="Preet Suthar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="Tags | Preet Suthar 🚀" />
        <meta name="subject" content="web development" />
      </Head>
      <div className="project-div">
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
