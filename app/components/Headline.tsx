"use client";
import React from "react"

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

export function Headline(foo: Foo) {
  return (
    <>
      {foo.children}
      <button onClick={foo.onClick}>アラートボタン</button>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <h1>{foo.title}</h1>
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.{foo.page}</li>
        </ol>
    </>
  );
}
