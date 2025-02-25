"use client";
import {Footer} from "app/components/Footer";
import { Header } from "app/components/Header";
import {Main} from "app/components/Main";
import { useCallback, useEffect, useState } from "react";


export default function Home() {
  const [foo, setFoo] = useState(1);
  const handleClick = (e) =>{
    setFoo((foo) => foo + 1);
  };

  useEffect(() => {
      document.body.style.backgroundColor="lightblue";
      return () => {
        document.body.style.backgroundColor="";
      }
    },[]);



  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index"/>
      <Footer />
    </div>

  );
}
