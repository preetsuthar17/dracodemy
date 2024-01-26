import Image from "next/image";
import dracodemy_logo from "../../public/dracodemy.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar" id="topPage">
        <div className="navbar_brand">
          <Link href="/">
            <Image src={dracodemy_logo} width={50} alt="Dracodemy" />
          </Link>
        </div>
        <div className="navbar_links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
