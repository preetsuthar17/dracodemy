import Image from "next/image";
import dracodemy_logo from "../../public/dracodemy.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_brand">
          <Image src={dracodemy_logo} width={50} alt="Dracodemy" />
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
