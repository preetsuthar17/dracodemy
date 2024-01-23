const fs = require("fs-extra");
const path = require("path");
const matter = require("gray-matter");
const TerserPlugin = require("terser-webpack-plugin");
const RSS = require("feed").Feed;

module.exports = {
  experimental: {
    nextScriptWorkers: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  transpilePackages: [
    "@mui/icons-material",
    "@mui/x-date-pickers",
    "@devexpress/dx-react-grid-material-ui",
    "gsap",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap();
      generateRSSFeed();
      // renameSlug();
      config.optimization.minimizer.push(new TerserPlugin());
      console.log("Optimized project!");
    }

    return config;
  },
};

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .trim();
}

function renameSlug() {
  const articlesDir = path.join(__dirname, "articles");
  const files = fs.readdirSync(articlesDir);

  files.forEach((filename) => {
    const filePath = path.join(articlesDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const slug = generateSlug(data.title);

    const newFilePath = path.join(articlesDir, `${slug}.md`);
    if (filename !== `${slug}.md`) {
      fs.renameSync(filePath, newFilePath);
    }
    console.log(`slug renamed to ${slug}.md`);
  });
}

function getTagPages() {
  const articlesDir = path.join(__dirname, "articles");
  const files = fs.readdirSync(articlesDir);
  const tags = new Set();

  files.forEach((filename) => {
    const { data } = matter(
      fs.readFileSync(path.join(articlesDir, filename), "utf8")
    );

    if (data.tags && Array.isArray(data.tags)) {
      data.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags);
}

function generateSitemap() {
  const articlesDir = path.join(__dirname, "articles");
  const files = fs.readdirSync(articlesDir);
  const dynamicPaths = files.map((filename) => {
    const { data } = matter(
      fs.readFileSync(path.join(articlesDir, filename), "utf8")
    );
    const slug = generateSlug(data.title);
    return `/posts/${slug}`;
  });

  const tagPages = getTagPages();
  const tagPaths = tagPages.map((tag) => `/tags/${tag}`);

  const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      
    <url>
      <loc>https://dracodemy.tech</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
 
      ${dynamicPaths
        .map(
          (path) =>
            `<url><loc>https://dracodemy.tech${path}</loc><priority>1.0</priority><changefreq>daily</changefreq></url>`
        )
        .join("")}
        ${tagPaths
          .map(
            (tagPath) =>
              `<url><loc>https://dracodemy.tech${tagPath}</loc><priority>1.0</priority><changefreq>weekly</changefreq></url>`
          )
          .join("")}
  
      </urlset>
    `;

  fs.writeFileSync(
    path.join(__dirname, "public", "sitemap.xml"),
    sitemap,
    "utf8"
  );

  console.log("Sitemap generated successfully!");
}

const generateRSSFeed = async () => {
  const feed = new RSS({
    title: "dracodemy.tech",
    description:
      "Welcome to Dracodemy! A website to learn programming efficiently",
    id: "dracodemy.tech",
    link: "dracodemy.tech",
    favicon: "dracodemy.tech/favicon.ico",
    language: "en",
    feedLinks: {
      rss: "dracodemy.tech/rss.xml",
    },
  });

  const articlesPath = path.resolve(__dirname, "articles");
  const articleFiles = fs.readdirSync(articlesPath);

  articleFiles.forEach((fileName) => {
    const filePath = path.join(articlesPath, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const frontMatterObject = matter(fileContent).data;
    const content = matter(fileContent).content;

    try {
      const { title, date } = frontMatterObject;
      const formattedDate = new Date(date);
      const slug = fileName.replace(/\.md$/, "");
      const url = `https://dracodemy.tech/posts/${slug}`;

      feed.addItem({
        title,
        id: url,
        link: url,
        description: content,
        date: formattedDate,
      });
    } catch (error) {
      console.error(`Error parsing front matter of ${fileName}:`, error);
      console.log("Front Matter Content:", frontMatterObject);
      console.log("Date Content:", date);
    }
  });

  const rssFeedPath = path.join("public", "rss.xml");
  fs.writeFileSync(rssFeedPath, feed.rss2({ pretty: true }));
  console.log("RSS feed generated successfully!");
};
