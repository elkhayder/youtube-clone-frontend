import React from "react";

import styles from "./styles.module.scss";

type IconButtonPorps = {
   icon: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: React.FC<IconButtonPorps> = ({
   icon,
   className,
   children,
   ...props
}) => {
   return (
      <button className={`${styles.button} ${className}`} {...props}>
         {!children && <i className={icon} />}
         {children}
      </button>
   );
};

export default IconButton;
