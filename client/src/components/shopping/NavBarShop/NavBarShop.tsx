import React from "react";
import styles from "./NavBarShop.module.css";

const NavBarShop = () => {
   return (
      <>
         <div className={styles.NavSection}>
            <div className={styles.NavLeft}>
               <img
                  src="src\assets\shopping\loder.png.webp"
                  alt="oops"
                  className={styles.logo}
               />
               <h3 className={styles.logoName}>FIT MAESTRO</h3>
            </div>
            <div className={styles.NavRight}>
               <button className={styles.icon}>
                  <img
                     src="src\assets\shopping\search.jpeg"
                     alt="oops"
                     className={styles.img}
                  />
               </button>

               <button className={styles.icon}>
                  <img
                     src="src\assets\shopping
                     profile.jpeg"
                     alt="oops"
                     className={styles.img}
                  />
               </button>

               <button className={styles.icon}>
                  <img
                     src="src\assets\shopping\heart.jpeg"
                     alt="oops"
                     className={styles.img}
                  />
               </button>

               <button className={styles.icon}>
                  <img
                     src="src\assets\cart.jpeg"
                     alt="oops"
                     className={styles.img}
                  />
               </button>
            </div>
         </div>
      </>
   );
};

export default NavBarShop;
