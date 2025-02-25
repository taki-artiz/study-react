import Link from "next/link"
import styles from "./Header.module.scss"

export function Header(){
  return(
    <header className={styles.header}>
      {/* <div className={styles.testStyle}></div> */}
        <Link href="./">
            Index
        </Link>
        <Link href="about/">
            About
        </Link>
      </header>
  );
}