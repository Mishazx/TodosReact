import React, { FC, ReactNode } from "react";
import styles from "./PageBackground.module.css";
import { useTheme } from "../../context/ThemeContext";
import PageFooter from "../PageFooter/PageFooter";

type Props = {
  children: ReactNode;
}

const PageBackground: FC<Props> = ({children}) => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.pageBackground} ${styles[theme]}`} id={styles.pageBackground}>
      {children}
      <PageFooter />
    </div>
  )
}

export default PageBackground;
