import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import classes from "./Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const collectionPage = router.query.collectionName;

  const menuHandler = (action) => {
    if (action === "logo") {
      setShowMenu(false);
      return;
    }

    setShowMenu((previousState) => !previousState);
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div onClick={menuHandler.bind(this, "logo")}>
          <Link href="/">
            <div className={classes.logo}>
              <p className={classes.symbol}>*</p>
              <p className={classes.logoText}>Logo</p>
            </div>
          </Link>
        </div>
        <nav>
          <ul className={`${classes.navigation} ${showMenu ? classes.translate : ""}`}>
            <li
              className={`${classes.link} ${collectionPage === "home-and-garden" ? classes.active : ""}`}
              onClick={menuHandler}
            >
              <Link href="/collections/home-and-garden">Home &amp; Garden</Link>
            </li>
            <li
              className={`${classes.link} ${collectionPage === "apparel" ? classes.active : ""}`}
              onClick={menuHandler}
            >
              <Link href="/collections/apparel">Apparel</Link>
            </li>
            <li
              className={`${classes.link} ${collectionPage === "jewelry" ? classes.active : ""}`}
              onClick={menuHandler}
            >
              <Link href="/collections/jewelry">Jewelry</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.menu}>
          <ul>
            <li className={classes.menuLink}>Login</li>
            <li className={classes.menuLink}>Cart</li>
            <li className={classes.menuLinkMobile} onClick={menuHandler}>
              {showMenu ? "Close" : "Menu"}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
