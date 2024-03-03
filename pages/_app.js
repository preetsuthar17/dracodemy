import "../src/styles/globals.scss";
import "../src/styles/partials/_blogsPage.scss";
import "../src/styles/partials/_footer.scss";
import "../src/styles/partials/_loadingBar.scss";
import "../src/styles/partials/_buttons.scss";
import "../src/styles/partials/_customTooltip.scss";
import "../src/styles/partials/_postPage.scss";
import "../src/styles/partials/_404.scss";
import "../src/styles/partials/_CourseSnackBar.scss";
import "../src/styles/partials/_navbar.scss";
import "../src/styles/partials/_showcase.scss";

import Layout from "@/src/components/Layout";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1.3, transition: "ease-in" }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}
