import Image from "next/image";
import styles from "./Footer.module.scss"

const ITEMS = [
  {
    href: "",
    src: "https://nextjs.org/icons/file.svg",
    alt: "File icon",
    // html entityはUTF8（React標準）でエスケープされるので、直接"→"など打つ。html文字列に連続してentiryを入力するときは\&ASFG4などとして\から始める
    text: "Learn→",
  },
  {
    href: "",
    src: "https://nextjs.org/icons/window.svg",
    alt: "Window icon",
    text: "Examples→",
  },
  {
    href: "",
    src: "https://nextjs.org/icons/globe.svg",
    alt: "Globe icon",
    text: "Go to nextjs.org →",
  },
];

export function Footer(){
  return(
    <footer className={`${styles.testStyle} row-start-3 flex gap-6 flex-wrap items-center justify-center`}>

      {ITEMS.map((item) => (
        <a
          key={item.href}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={item.src}
            alt={item.alt}
            width={16}
            height={16}
          />
          {item.text}
        </a>
      ))}

      </footer>
  );
}