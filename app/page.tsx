"use client";
import {Footer} from "app/components/Footer";
import { Header } from "app/components/Header";
import {Main} from "app/components/Main";
import { useCallback, useEffect, useState } from "react";


export default function Home() {

  const [count, setFoo] = useState(1);
  console.log("🚀 ~ Home ~ count:", count)

  const handleClick = (e:React.MouseEvent) =>{
    setFoo((setcount) => setcount + 1);
  };

  useEffect(() => {
    console.log("foo");
      document.body.style.backgroundColor="lightblue";
      return () => {
        document.body.style.backgroundColor="";
      }
    },[count]);



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index"/>
      <Footer />
    </div>

  );
}
