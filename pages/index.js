import React, { useEffect, useState } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import Script from "next/script";
const Footer = dynamic(() => import("@/src/components/footer"));
const Navbar = dynamic(() => import("@/src/components/Navbar"));
import Layout from "@/src/components/Layout";

export default function Home({ posts, tags }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(posts);
  const [visiblePosts, setVisiblePosts] = useState(posts);
  const [displayedPostsCount, setDisplayedPostsCount] = useState(6);
  const [lazyLoadOffset, setLazyLoadOffset] = useState(6);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const sanitizeQuery = (query) => {
    return query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setShowDropdown(false); // Hide dropdown if query is empty
      setSearchResults(posts);
    } else {
      const sanitizedQuery = sanitizeQuery(searchQuery);
      const regex = new RegExp(`(${sanitizedQuery})`, "gi");

      const filteredResults = posts.filter((post) => {
        const lowercaseTags = post.frontmatter.tags.map((tag) =>
          tag.toLowerCase()
        );
        return (
          post.frontmatter.title.toLowerCase().match(regex) ||
          post.frontmatter.description.toLowerCase().match(regex) ||
          lowercaseTags.some((tag) => tag.match(regex))
        );
      });

      setSearchResults(filteredResults);
      setVisiblePosts(filteredResults.slice(0, displayedPostsCount));
      setShowDropdown(true); // Show dropdown when there are search results
    }
  }, [searchQuery, posts, displayedPostsCount]);

  useEffect(() => {
    setVisiblePosts(searchResults.slice(0, displayedPostsCount));
  }, [searchResults, displayedPostsCount]);

  const handleLazyLoad = () => {
    setVisiblePosts((prevVisiblePosts) => {
      const remainingPosts = searchResults.slice(
        prevVisiblePosts.length,
        prevVisiblePosts.length + lazyLoadOffset
      );
      const newVisiblePosts = [...prevVisiblePosts, ...remainingPosts];
      return newVisiblePosts;
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Layout>
        <Head>
          <title>Dracodemy 🚀</title>
          <meta
            property="description"
            content="Dracodemy is a learning website where you can learn so many basics topics of programming like DSA, Python, etc."
          />
          <meta name="robots" content="all" />
          <meta name="theme-color" content="#b7acf6" />
          <meta httpEquiv="content-language" content="en" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta property="og:title" content="Dracodemy" />
          <meta
            property="og:description"
            content="Dracodemy is a learning website where you can learn so many basics topics of programming like DSA, Python, etc."
          />
          <meta property="og:url" content="https://dracodemy.tech" />
          <meta
            property="og:image"
            content="https://dracodemy.tech/dracodemy.png"
          />
          <meta property="og:type" content="website" />
          <meta
            name="keywords"
            content="Preet Suthar, Front-end Developer, Portfolio, Blog, web development, preet, front end development, front-end developer, coding tutorials, programming tutorials, coding notes, Dracodemy"
          />
          <meta
            name="google-adsense-account"
            content="ca-pub-2501084062179551"
          />
          <meta name="author" content="Dracodemy" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="twitter:title" content="Dracodemy" />
          <meta name="subject" content="coding tutorials" />
        </Head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2501084062179551"
          crossorigin="anonymous"
        ></Script>
        <Navbar />
        <>
          <div id="blog-title" className="blog-div">
            <motion.div
              initial={{ opacity: 1, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="blog-headers showcase-headers">
                <h1 className="h2-color ">Dracodemy</h1>
                <p className="p-color">hello 👋, what do you want to learn?</p>
                <div className="blog-search-input">
                  <input
                    style={{ marginTop: "2rem", borderRadius: "5px" }}
                    className="blog-search"
                    type="text"
                    placeholder="Search Article or Tag (e.g. DSA)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                {showDropdown && (
                  <div className="search-dropdown">
                    <ul>
                      {searchResults.map((result) => (
                        <li
                          key={result.slug}
                          onClick={() => setSelectedResult(result)}
                        >
                          <Link href={`/posts/${result.slug}`}>
                            {result.frontmatter.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="tags-container">
                  {tags.map((tag) => (
                    <Link
                      className="no-decoration p-color post-tag"
                      style={{
                        display: "flex",
                      }}
                      href={`/tags/${tag}`}
                      key={tag}
                    >
                      <div className=" tags-item">{tag}</div>
                    </Link>
                  ))}
                  <Link className="post-tag p-color" href="/tags">
                    All Tags
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="showcase_tutorials">
              <Link href="/tags/DSA%20Tutorial">
                <div className="showcase_tut_cards noisy DSA_tut_card">
                  <div className="title">
                    <p>Data Structures & Algorithms</p>
                  </div>
                </div>
              </Link>
              <Link href="/tags/Python%20Tutorial">
                <div className="showcase_tut_cards noisy Python_tut_card">
                  <div className="title">
                    <p>Python tutorial</p>
                  </div>
                </div>
              </Link>
              <Link href="/tags/RDBMS%20Tutorial">
                <div className="showcase_tut_cards noisy RDBMS_tut_card">
                  <div className="title">
                    <p>Relational database management system</p>
                  </div>
                </div>
              </Link>
              <Link href="/tags/OS%20Tutorial">
                <div className="showcase_tut_cards noisy OS_tut_card">
                  <div className="title">
                    <p>Operating System</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="blogs-container-heading">
              <h2>All articles</h2>
            </div>
            <div className="blog-container">
              <hr className="styled-hr"></hr>
              {visiblePosts.length === 0 ? (
                <p
                  style={{
                    margin: "1rem 0",
                    color: "#777777",
                    fontSize: "1.3rem",
                  }}
                >
                  No posts found.
                </p>
              ) : (
                visiblePosts.map((post, i) => (
                  <div key={post.slug} className="blog-card">
                    <div>
                      <Link href={`/posts/${post.slug}`} passHref>
                        <h2 className="blog-header">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.title,
                              searchQuery,
                            }}
                          />
                        </h2>
                      </Link>
                      <p className="blog-text">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: post.frontmatter.description,
                            searchQuery,
                          }}
                        />
                      </p>
                      <div>
                        <Link
                          href={`/posts/${post.slug}`}
                          className="blog-read-link"
                          passHref
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ccc"
                              d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413T19 21zm4.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"
                            />
                          </svg>
                          Read More
                        </Link>
                      </div>
                    </div>

                    <p className="blog-text blog-date">
                      {post.frontmatter.date}
                    </p>

                    <p className="blog-text blog-tag">
                      <Link href={"/tags/" + post.frontmatter.tags}>
                        {post.frontmatter.tags}
                      </Link>
                    </p>
                  </div>
                ))
              )}
            </div>
            <div
              className="lazy-load-more-button"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {visiblePosts.length < searchResults.length && (
                <button onClick={handleLazyLoad} className=" primary-btn-main">
                  <span>
                    <em>Load More posts</em>
                  </span>
                  <span>
                    <em>Load More posts</em>
                  </span>
                </button>
              )}
            </div>
            <div className="posts-post-top">
              <Link href="#topPage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  className="bi bi-arrow-up-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
              </Link>
            </div>
          </div>
          <Footer />
        </>
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("articles");
  const posts = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );
    const { data, content } = matter(markdownWithMetadata);

    if (!data.title) {
      console.warn(`Title is missing in the post: ${filename}`);
      data.title = "Untitled post";
    }
    const frontmatter = {
      title: data.title,
      date: data.date ? formatDate(data.date.toString()) : "",
      description: data.description,
      tags: data.tags || [],
    };

    const lines = content.split("\n");
    let description = "";
    for (const line of lines) {
      if (line.trim().length > 0 && !line.trim().startsWith("#")) {
        if (!line.trim().startsWith("![")) {
          description = line.trim();
          break;
        }
      }
    }
    if (!description) {
      description = lines[0].trim();
    }
    if (description.length > 100) {
      description = description.substring(0, 60) + "...";
    }
    frontmatter.description = description;
    const tags = data.tags || [];
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
      content,
      tags,
    };
  });

  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);

    if (dateA > dateB) {
      return -1;
    } else if (dateA < dateB) {
      return 1;
    } else {
      return b.frontmatter.title.localeCompare(a.frontmatter.title);
    }
  });

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.frontmatter.tags))
  );

  return {
    props: {
      posts,
      tags: allTags,
    },
  };
}

function formatDate(date) {
  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );
  return formattedDate;
}
