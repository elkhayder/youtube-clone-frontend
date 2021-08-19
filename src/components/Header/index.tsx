import React from "react";

import logo from "../../assets/images/logo.png";
import userImage from "../../assets/images/user.jpg";
import IconButton from "../IconButton";

import styles from "./styles.module.scss";

type HeaderPorps = {};

const Header: React.FC<HeaderPorps> = () => {
   return (
      <div className={styles.container}>
         <div className={styles.flex}>
            <IconButton icon="fas fa-bars" />
            <img src={logo} alt="Logo" className={styles.logo} />
         </div>
         <div className={`${styles.flex} ${styles.nav_mid}`}>
            <input
               type="text"
               placeholder="Search"
               className={styles.search_input}
            />
            <button className={styles.search_button}>
               <i className="far fa-search" />
            </button>
         </div>
         <div className={`${styles.flex} ${styles.nav_end}`}>
            <IconButton icon="fas fa-video-plus" />
            <IconButton icon="fas fa-bell" />
            <IconButton icon="" className={styles.user_profile_button}>
               <img
                  src={userImage}
                  alt="User Profile"
                  className={styles.user_profile_image}
               />
            </IconButton>
         </div>
      </div>
   );
};

export default Header;
