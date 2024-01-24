import Image from "next/image";
import dracodemy_logo from "../../public/dracodemy.svg";
import Link from "next/link";
import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
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
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
            <SignedOut>
              <SignInButton
                className="sign-in-btn"
                afterSignInUrl="/"
                mode="modal"
              />
            </SignedOut>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
