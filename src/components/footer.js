import Link from "next/link";
import Image from "next/image";

import github from "../utils/icons/github.svg";
import email from "../utils/icons/email.svg";
import discord from "../utils/icons/discord.svg";
import twitter from "../utils/icons/twitter.svg";
import rss from "../utils/icons/rss_logo.svg";
import CustomTooltip2 from "./CustomTooltip2";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer
        className="footer"
        style={{
          zIndex: "99999",
          position: "relative",
        }}
      >
        <div className="footer_branding">
          <h4>Dracodemy</h4>
          <p>All rights reserved &copy; {year}</p>
          <div className="footer_icons">
            <CustomTooltip2 text="discord">
              <Link target="_blank" href="https://discord.gg/b4tMBMgnPK">
                <Image width={22} src={discord} alt="Discord Server"></Image>
              </Link>
            </CustomTooltip2>
            <CustomTooltip2 text="RSS">
              <Link target="_blank" href="/rss.xml">
                <Image width={24} src={rss} alt="RSS feed"></Image>
              </Link>
            </CustomTooltip2>
          </div>
          <hr />
        </div>
        <div className="footer_links">
          <div className="tutorials_links">
            <p>Programming Tutorials</p>
            <Link href="/tags/DSA%20Tutorial">DSA Tutorials</Link>
            <Link href="/tags/RDBMS%20Tutorial">RDBMS Tutorials</Link>
          </div>
          <div className="languages_links">
            <p>Programming Languages</p>
            <Link href="/tags/Python%20Tutorial">Python</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
