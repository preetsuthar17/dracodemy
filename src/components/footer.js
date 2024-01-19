import Link from "next/link";
import Image from "next/image";

import github from "../utils/icons/github.svg";
import email from "../utils/icons/email.svg";
import discord from "../utils/icons/discord.svg";
import twitter from "../utils/icons/twitter.svg";
import rss from "../utils/icons/rss_logo.svg";

const Footer = () => {
  return (
    <div>
      {/* <footer className="footer-div">
        <div
          className="styled-hr"
          style={{
            width: "20%",
          }}
        ></div>

        <div className="footer-text">
          <p>
            Created with ❤️ by{" "}
            <Link href="https://github.com/preetsuthar17">Preet Suthar</Link>{" "}
          </p>
          <p>
            built with <Link href="https://nextjs.org/">Next.js</Link>
          </p>
          <p
            style={{
              marginTop: "2rem",
            }}
          >
            Found issue in this page? Help us :&#x29;
          </p>
          <Link href="https://github.com/preetsuthar17/preetsuthar.me">
            Fix it on GitHub ⚡
          </Link>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link href="https://github.com/preetsuthar17" target="_blank">
                <ul>
                  <Image
                    loading="lazy"
                    alt="Github"
                    src={github}
                    height={20}
                    widht={20}
                  />
                </ul>
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/XeQ95WzGq9" target="_blank">
                <ul>
                  <Image
                    loading="lazy"
                    alt="Discord"
                    src={discord}
                    height={21}
                    widht={21}
                  />
                </ul>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/preetsuthar17" target="_blank">
                <ul>
                  <Image
                    loading="lazy"
                    alt="Twitter"
                    src={twitter}
                    height={20}
                    widht={20}
                  />
                </ul>
              </Link>
            </li>
            <li>
              <Link href="mailto:preetsutharxd@gmail.com" target="_blank">
                <ul>
                  <Image
                    loading="lazy"
                    alt="Email"
                    src={email}
                    height={20}
                    widht={20}
                  />
                </ul>
              </Link>
            </li>
            <li>
              <Link href="/rss.xml" target="_blank">
                <ul>
                  <Image
                    loading="lazy"
                    alt="RSS"
                    src={rss}
                    height={22}
                    widht={22}
                  />
                </ul>
              </Link>
            </li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;
