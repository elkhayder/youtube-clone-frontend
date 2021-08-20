import React from "react";
import IconButton from "../IconButton";

import styles from "./styles.module.scss";

type VideoCardPorps = {};

const VideoCard: React.FC<VideoCardPorps> = () => {
   return (
      <div className={styles.container}>
         <div className={styles.thumbnail_container}>
            <img
               src="https://unsplash.com/photos/fG_ud73U_ZM/download?force=true&w=640"
               alt=""
            />
         </div>
         <div className={styles.infos_container}>
            <div className={styles.channel_image_container}>
               <img
                  src="https://unsplash.com/photos/Nm70URdtf3c/download?force=true&w=640"
                  alt=""
               />
            </div>
            <div className={styles.info_container}>
               <h2 className={styles.video_title}>
                  Maisie Williams (aka Arya Stark) Pranks Game of Thrones Fans
               </h2>
               <h4 className={styles.channel_name}>Supercuts Delight</h4>
               <h5 className={styles.views_date_info}>2M views • 1 year ago</h5>
            </div>
            <div className={styles.more_button_container}>
               <IconButton icon="fas fa-ellipsis-v" />
            </div>
         </div>
      </div>
   );
};

export default VideoCard;
