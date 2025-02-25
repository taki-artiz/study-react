"use client";
import Image from "next/image";
// import {Links} from "app/components/Links";
import {Headline} from "app/components/Headline";
import { Links } from "./Links";
import { useEffect } from "react";


type Foo = {
    title?: string;
    page?: string;
    number?: number;
    array?: number[];
    obj?: {foo:string,bar:string};
    boolean?: boolean;
    code?:React.ReactNode;
    onClick?:React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
  };

export function Main(foo: Foo) {



  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Headline
        title="Index Page"
        page={foo.page}
        number={111} array={[1,2,3]} obj={{foo:"foo",bar:"bar"}}
        boolean={true}
        onClick={() => alert("クリック！")}>
          <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority/>
        </Headline>
        <Links />
      </main>
  );
}
