import Link from "next/link";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">E-commerce</Link>
      </div>
      <nav>
        <ul className={classes.navigation}>
          <li className={classes.link}>
            <Link href="/collections/home-and-garden">Home and Garden</Link>
          </li>
          <li>
            <Link href="/collections/apparel">Apparel</Link>
          </li>
          <li>
            <Link href="/collections/jewelry">Jewelry</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.actions}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.icon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
