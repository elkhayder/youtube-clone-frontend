import React from "react";
import Header from "../Header/index";
import Sidebar from "../Sidebar";

import styles from "./styles.module.scss";

type AppContainerPorps = {};

const AppContainer: React.FC<AppContainerPorps> = ({ children }) => {
   return (
      <div className={styles.container}>
         <Header />
         <div className={styles.content_sidebar_container}>
            <Sidebar />
            {children}
         </div>
      </div>
   );
};

export default AppContainer;
