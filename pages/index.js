import Head from "next/head";
import CSS from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={CSS.container}>
      <Head>
        <title>nucliweb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={CSS.main}>
        <h1 className={CSS.title}>nucliweb</h1>
      </main>

      <footer className={CSS.footer}>
        <a
          href="https://twitter.com/nucliweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          @nucliweb
        </a>
      </footer>
    </div>
  );
}
