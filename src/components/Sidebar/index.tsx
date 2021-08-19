import React from "react";

import styles from "./styles.module.scss";

type SidebarPorps = {};

const Sidebar: React.FC<SidebarPorps> = () => {
   return (
      <div className={styles.container}>
         <NavItem title="Home" icon="fas fa-home-lg-alt" selected />
         <NavItem title="Explore" icon="fas fa-compass" />
         <NavItem title="Subscriptions" icon="fas fa-album-collection" />
         <Divider />
         <NavItem title="Library" icon="fas fa-book" />
         <NavItem title="History" icon="far fa-history" />
         <NavItem title="Your videos" icon="fas fa-play" iconOffset={3} />
         <NavItem title="Watch later" icon="far fa-clock" iconOffset={1} />
         <NavItem title="Liked videos" icon="far fa-thumbs-up" iconOffset={3} />
         <ShowMore />
         <Divider />
         <h3 className={styles.section_title}>Subscriptions</h3>
         <NavItem
            title="Jorah"
            img={
               "https://unsplash.com/photos/RiDxDgHg7pw/download?force=true&w=640"
            }
         />
         <NavItem
            title="Smarter everyday"
            img={
               "https://unsplash.com/photos/RiDxDgHg7pw/download?force=true&w=640"
            }
         />
         <NavItem
            title="Spinnin' records"
            img={
               "https://unsplash.com/photos/RiDxDgHg7pw/download?force=true&w=640"
            }
         />
         <ShowMore />
         <Divider />
         <NavItem title="Settings" icon="fas fa-cog" iconOffset={3} />
         <NavItem title="Help" icon="fas fa-question-circle" iconOffset={3} />
         <NavItem
            title="Send feedback"
            icon="fas fa-comment-alt-exclamation"
            iconOffset={4}
         />
         {/* <h4 className={styles.footer}>
            &copy; elkhayder, {new Date().getFullYear()}
         </h4> */}
      </div>
   );
};

type NavItemPorps = {
   title: string;
   icon?: string;
   img?: string;
   selected?: boolean;
   iconOffset?: number;
   onClick?: () => void;
};

const NavItem: React.FC<NavItemPorps> = ({
   title,
   icon,
   img,
   selected,
   iconOffset,
   onClick,
}) => {
   return (
      <div
         className={`${styles.nav_item_container} ${
            selected ? styles.selected : undefined
         }`}
         onClick={onClick}
      >
         <div className={styles.start_container}>
            {icon && (
               <i
                  className={`${icon} ${styles.icon}`}
                  style={{ marginLeft: iconOffset }}
               />
            )}
            {img && <img src={img} alt="" />}
         </div>
         <h4 className={styles.title}>{title}</h4>
      </div>
   );
};

type ShowMorePorps = { isExpanded?: boolean; onClick?: () => void };

const ShowMore: React.FC<ShowMorePorps> = ({ isExpanded, onClick }) => {
   return (
      <NavItem
         title={`Show ${isExpanded ? "less" : "more"}`}
         icon={`far fa-chevron-${isExpanded ? "up" : "down"}`}
         iconOffset={3}
         {...{ onClick }}
      />
   );
};

const Divider = () => <div className={styles.divider} />;

export default Sidebar;
