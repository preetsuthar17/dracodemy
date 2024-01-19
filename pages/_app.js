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
        <>
          <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="preetsuthar"
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#FF813F"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
          ></script>
        </>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}
