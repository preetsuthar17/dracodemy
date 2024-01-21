import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import html from "remark-html";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import twitterLogo from "../../src/utils/icons/twitter.svg";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/src/utils/supabaseClient";

import { useRouter } from "next/router";

const Layout = dynamic(() => import("@/src/components/Layout"));
const Footer = dynamic(() => import("@/src/components/footer"));

import hljs from "highlight.js/lib/core";
import sql from "highlight.js/lib/languages/sql";
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import css from "highlight.js/lib/languages/css";
import vbscriptHtml from "highlight.js/lib/languages/vbscript-html";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import python from "highlight.js/lib/languages/python";
import powershell from "highlight.js/lib/languages/powershell";
import cpp from "highlight.js/lib/languages/cpp";
import php from "highlight.js/lib/languages/php";
import phpTemplate from "highlight.js/lib/languages/php-template";
import xml from "highlight.js/lib/languages/xml";

import convertIdToUuid from "@/src/utils/functions/convertIdToUuid";
import calculateReadTime from "@/src/utils/functions/calculateReadTime";
import generateTableOfContents from "@/src/utils/functions/generateTableOfContents";
import formatDate from "@/src/utils/functions/formatDate";
import readArticles from "@/src/utils/functions/readArticles";
import Navbar from "@/src/components/Navbar";

export default function Post({
  post,
  prevArticleData,
  nextArticleData,
  similarTagArticles,
}) {
  const [currentViews, setCurrentViews] = useState(post.views);
  const [twitterHref, setTwitterHref] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const router = useRouter();

  const { slug } = router.query;
  const editPageUrl = `https://github.com/preetsuthar17/dracodemy/edit/main/articles/${slug}.md?plain=1`;

  const toc = generateTableOfContents(post.content);
  const isAccordionActive = (articleId) => activeAccordion === articleId;

  useEffect(() => {
    const tweetText = encodeURIComponent(post.frontmatter.title);
    const tweetUrl = encodeURIComponent(window.location.href);
    const href = `https://twitter.com/intent/tweet?text=${tweetText}&url=${tweetUrl}`;
    setTwitterHref(href);
  }, [post.frontmatter.title]);

  useEffect(() => {
    const uuidId = convertIdToUuid(post.frontmatter.id);

    const incrementView = async () => {
      const { data: currentData, error: currentError } = await supabase
        .from("blog_views")
        .select("views")
        .eq("blog_id", uuidId)
        .single();

      const currentViews = currentData ? currentData.views : 0;

      const updatedViews = currentViews + 1;

      const { data, error } = await supabase
        .from("blog_views")
        .upsert([{ blog_id: uuidId, views: updatedViews }], {
          onConflict: ["blog_id"],
        });

      if (error) {
        console.error("Error incrementing view count:", error);
      } else {
        console.log("View count incremented successfully");
        setCurrentViews(updatedViews);
      }
    };

    incrementView();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "preetsuthar17/comments");
    script.setAttribute("data-repo-id", "R_kgDOGIcPqw");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOGIcPq84CZZYm");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    const commentsContainer = document.getElementById("giscus-comments");
    if (commentsContainer) {
      commentsContainer.appendChild(script);
    }
  }, []);

  useEffect(() => {
    hljs.registerLanguage("sql", sql);
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("python", python);
    hljs.registerLanguage("c", c);
    hljs.registerLanguage("cpp", cpp);
    hljs.registerLanguage("powershell", powershell);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("scss", scss);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("php", php);
    hljs.registerLanguage("php-template", phpTemplate);
    hljs.registerLanguage("html", xml);
    hljs.registerLanguage("xml", xml);
  });

  useEffect(() => {
    hljs.highlightAll({ detectLanguage: true });
  });

  const sortedSimilarTagArticles = [...similarTagArticles].sort((a, b) => {
    const titleA = a.frontmatter.title.toLowerCase();
    const titleB = b.frontmatter.title.toLowerCase();

    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      return 0;
    }
  });

  const handleAccordionClick = (articleId) => {
    setActiveAccordion((prevActive) =>
      prevActive === articleId ? null : articleId
    );
  };

  const copyLinkToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Link copied to clipboard:", url);
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Layout>
        <Head>
          <title>{post.frontmatter.title.toString()} - Dracodemy 🚀</title>
          <meta
            property="description"
            content="Dracodemy is   a learning website where you can learn so many basics topics of programming like DSA, Python, etc."
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
          <meta name="subject" content="coding tutorials" />
          <meta name="robots" content="noindex" />
          <link rel="canonical" href="https://dracodemy.tech" />
        </Head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></Script>
        <Script async src="https://js.stripe.com/v3/buy-button.js"></Script>
        <>
          <Navbar />
          <article id="post-top" className="container">
            <div className="blog-content">
              <h1 className="title">{post.frontmatter.title}</h1>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                }}
              >
                {post.frontmatter.tags.map((tag) => (
                  <Link
                    className="no-decoration p-color"
                    href={`/tags/${tag}`}
                    key={tag}
                  >
                    <div
                      className="post-tag-slug"
                      style={{
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                        margin: "0",
                      }}
                    >
                      {tag}&nbsp;
                    </div>
                  </Link>
                ))}
              </div>
              <div className="styled-hr"></div>
              <div
                style={{
                  marginBottom: "2rem",
                }}
              >
                <div
                  className="author p-color"
                  style={{
                    marginBottom: " 0.5rem",
                  }}
                >
                  <span className="date">By </span>
                  <Link
                    style={{
                      color: "#aaa",

                      textDecoration: "none",
                    }}
                    href={post.frontmatter.authorGithub}
                    target="_blank"
                  >
                    <span
                      style={{
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      {post.frontmatter.author}
                    </span>
                  </Link>
                </div>
                <time className="date">{post.frontmatter.date} - </time>
                <span className="p-color date">{currentViews} views - </span>
                <span className="p-color date" style={{ margin: "0.5rem 0" }}>
                  {post.readTime} read
                </span>

                <div className="share_and_copy_link">
                  <abbr title="Share on X">
                    <Link href={twitterHref} data-size="large" target="_blank">
                      <Image
                        src={twitterLogo}
                        width={28}
                        height={28}
                        alt="Twitter (x)"
                        style={{
                          marginTop: "0.9rem",
                        }}
                      />
                    </Link>
                  </abbr>
                  &nbsp; &nbsp;
                  <abbr title="copy post link">
                    <span
                      id="copyPostBtn"
                      onClick={copyLinkToClipboard}
                      style={{ cursor: "pointer" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="#71717a"
                          d="M165.66 90.34a8 8 0 0 1 0 11.32l-64 64a8 8 0 0 1-11.32-11.32l64-64a8 8 0 0 1 11.32 0ZM215.6 40.4a56 56 0 0 0-79.2 0l-30.06 30.05a8 8 0 0 0 11.32 11.32l30.06-30a40 40 0 0 1 56.57 56.56l-30.07 30.06a8 8 0 0 0 11.31 11.32l30.07-30.11a56 56 0 0 0 0-79.2Zm-77.26 133.82l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31Z"
                        />
                      </svg>
                    </span>
                  </abbr>
                </div>
                <Link
                  href={editPageUrl}
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "1rem 0",
                    color: "#aaa",
                    textDecoration: "none",
                    marginBottom: "-1rem",
                    gap: "0.4rem",
                    background: "#cccccc15",
                    width: "fit-content",
                    padding: "0.3rem",
                    borderRadius: "3px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287l-3-3zm0 6h16v2H4z"
                    />
                  </svg>
                  Edit this post
                </Link>
              </div>

              <div className="related-blogs">
                <div
                  className={`accordion ${
                    isAccordionActive("") ? "active" : ""
                  }`}
                  onClick={() => handleAccordionClick("")}
                >
                  Table of content
                  <p>{` ${isAccordionActive("") ? "▲" : "▼ "}`}</p>
                </div>
                <AnimatePresence>
                  {isAccordionActive("") && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      className="open-accordion"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                    >
                      {toc.map((item, index) => (
                        <ul key={index}>
                          <li>
                            <Link href={`#${item.slug}`}>{item.text}</Link>
                            {item.children.length > 0 && (
                              <ul>
                                {item.children.map((child, childIndex) => (
                                  <li key={childIndex}>
                                    <Link href={`#${child.slug}`}>
                                      {child.text}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        </ul>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                className="donateUs"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    textAlign: "left",
                    marginBottom: "1rem",
                  }}
                  className="p-color"
                >
                  I rely on your support to keep this website running. If you
                  find the content valuable, please consider making a small
                  donation. whether it’s ₹25/$1 or ₹500/$5.
                </p>
                <Link
                  href="https://donate.stripe.com/fZeaGJeU23Cn9u8288"
                  target="_blank"
                  className="donateButton"
                  style={{
                    color: "#aaa",
                    textAlign: "left",
                  }}
                >
                  Donate
                </Link>{" "}
                <p
                  style={{
                    color: "#aaa",
                    fontSize: "0.8rem",
                    textAlign: "left",
                    marginTop: "0.6rem",
                  }}
                >
                  Secured by Stripe
                </p>
              </div>
              {toc.length > 0 && (
                <div
                  className="tableOfContent"
                  style={{ paddingBottom: "2rem" }}
                >
                  <>
                    <ul>
                      <div
                        style={{
                          fontSize: " 19px",
                          padding: "0.4rem 0rem",
                          marginBottom: "1.2rem",
                        }}
                      >
                        More posts
                      </div>
                      {sortedSimilarTagArticles.map((article) => (
                        <li key={article.frontmatter.id}>
                          <div className="accordion-items">
                            <motion.div
                              initial="collapsed"
                              animate={
                                isAccordionActive(article.frontmatter.id)
                                  ? "open"
                                  : "collapsed"
                              }
                              variants={{
                                open: { opacity: 1, height: "auto" },
                              }}
                            >
                              <Link href={`/posts/${article.slug}`}>
                                {article.frontmatter.title}
                              </Link>
                              {isAccordionActive(article.frontmatter.id) && (
                                <div className="accordion-content"></div>
                              )}
                            </motion.div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                </div>
              )}
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(
                    /<(h[1-2])>(.*?)<\/\1>/g,
                    (match, tag, content) =>
                      `<${tag} id="${tag === "h1" ? "" : ""}${content
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/(^-|-$)/g, "")}">${content}</${tag}>`
                  ),
                }}
              />

              <div className="post-top">
                <Link href="#topPage">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="#fff"
                    className="bi bi-arrow-up-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                  </svg>
                </Link>
              </div>
              <div
                className="sharePostBlock"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    textAlign: "left",
                    marginBottom: "1rem",
                  }}
                  className="p-color"
                >
                  Did you enjoyed the post?
                </p>

                <span>
                  <Image
                    src={twitterLogo}
                    width={18}
                    height={18}
                    alt="Twitter (x)"
                    style={{
                      marginBottom: "-0.2rem",
                    }}
                  />{" "}
                  &nbsp;
                  <Link
                    href={twitterHref}
                    data-size="large"
                    target="_blank"
                    className="twitter-share-button p-color"
                  >
                    Share on X
                  </Link>{" "}
                </span>
                <div></div>
              </div>

              <div id="giscus-comments" />
              <hr />
              <div className="post-navigation">
                <div className="prev">
                  {prevArticleData && (
                    <Link href={`/posts/${prevArticleData.slug}`}>
                      👈 {prevArticleData.title}
                    </Link>
                  )}
                </div>
                <div className="next">
                  {nextArticleData && (
                    <Link href={`/posts/${nextArticleData.slug}`}>
                      {nextArticleData.title} 👉
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
          <Footer />
        </>
      </Layout>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("articles");
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownWithMetadata = fs.readFileSync(
    path.join("articles", `${params.slug}.md`),
    "utf-8"
  );

  const { data, content } = matter(markdownWithMetadata);

  const formattedDate = formatDate(data.date);
  const frontmatter = {
    title: data.title,
    date: formattedDate,
    id: data.id,
    author: data.author,
    authorGithub: data.authorGithub,
    tags: data.tags,
  };

  const articles = readArticles();
  const currentIndex = articles.findIndex(
    (article) => article.slug === params.slug
  );
  const prevArticle = articles[currentIndex + 1] || null;
  const nextArticle = articles[currentIndex - 1] || null;

  const prevArticleData = prevArticle
    ? {
        slug: prevArticle.slug,
        title: prevArticle.frontmatter.title,
      }
    : null;

  const nextArticleData = nextArticle
    ? {
        slug: nextArticle.slug,
        title: nextArticle.frontmatter.title,
      }
    : null;

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  const { data: viewsData, error: viewsError } = await supabase
    .from("blog_views")
    .select("views")
    .eq("blog_id", frontmatter.id)
    .single();

  const readTime = calculateReadTime(contentHtml);
  const views = viewsData ? viewsData.views : 0;

  const similarTagArticles = articles.filter(
    (article) =>
      article.frontmatter.id !== frontmatter.id &&
      article.frontmatter.tags.some((tag) => frontmatter.tags.includes(tag))
  );

  // Convert date objects to strings only if it's a valid Date object
  const serializableSimilarTagArticles = similarTagArticles.map((article) => ({
    ...article,
    frontmatter: {
      ...article.frontmatter,
      date:
        article.frontmatter.date instanceof Date
          ? article.frontmatter.date.toISOString()
          : article.frontmatter.date,
    },
  }));

  return {
    props: {
      post: {
        frontmatter,
        content: contentHtml,
        views,
        readTime,
      },
      prevArticleData,
      nextArticleData,
      similarTagArticles: serializableSimilarTagArticles,
    },
  };
}
