import styles from "../../styles/NavBar/MobileNavbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

// components
import ListItemLink from "./ListItemLink";

// utils
import { useState, useEffect } from "react";

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className={styles.container}>
      <div>
        <div
          className={`${styles.container} ${styles.bars}`}
          onClick={() => setNavOpen(true)}
        >
          <FaBars />
        </div>
        {/* NAV */}
        <nav className= {navOpen ? styles.navActive : undefined}>
        <ul>
            {/* times */}
          <div className={`${styles.iconContainer} ${styles.times}`}
        onClick= {()=>setNavOpen(false)}>
            <FaTimes />
          </div>

          {/* menu */}
          {/* Home */}
          <ListItemLink
            url=""
            optionClass={styles.linkColor}
            clickHandler={closeNav}
          >
            <h3>Home</h3>
          </ListItemLink>
          {/* Categories */}
          <ListItemLink 
          url = "categories"
            optionClass={styles.linkColor}
            clickHandler={closeNav}>
            <h3>Categories</h3>
          </ListItemLink>
        
          {/* Transactions */}
          <ListItemLink url="transactions"
            optionClass={styles.linkColor}
            clickHandler={closeNav}>
            <h3>Transactions</h3>
          </ListItemLink>
          {/* Wallet */}
          <ListItemLink url="wallet"
            optionClass={styles.linkColor}
            clickHandler={closeNav}>
            <h3>Wallet</h3>
          </ListItemLink>
          {/* Profile */}
          <div className={styles.mobileMenuLinks}>
            <ListItemLink url = "profile"
              optionClass={styles.linkColor}
              clickHandler={closeNav}>
              <h3>Profile</h3>
            </ListItemLink>
            {/* Settings */}
            <div className={styles.mobileMenuLinks}>
              <ListItemLink url = "settings"
                optionClass={styles.linkColor}
                clickHandler={closeNav}>
                <h3>Settings</h3>
              </ListItemLink>
            </div>
            <ListItemLink url="logout"
              optionClass={styles.linkColor}>
              <h3>Logout</h3>
            </ListItemLink>
            </div>
        </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
