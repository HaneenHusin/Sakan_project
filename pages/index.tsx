import type {GetStaticProps, NextPage} from 'next'
// import Home from "./Home";
import {useRouter} from "next/router";

import dynamic from "next/dynamic";
import Home from "./Home";
import path from "path";
import * as fs from "fs";

export default function Index() {
  const Home = dynamic(
      () => import('./Home'),
      { ssr: false }
  )
  return (
       <Home content={'hello'} />
      // <Home />
  )
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { locale } = ctx;
  const dir = path.join(process.cwd(), "public", "static");
  const filePath = `${dir}/${locale}.json`;
  const buffer = fs.readFileSync(filePath);
  const content = JSON.parse(buffer.toString());
  return {
    props: {
      content,
    },
  };
};

