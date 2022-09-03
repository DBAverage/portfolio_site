import Head from "next/head";

const Layout = (props: unknown) => {
  return (
    <div className="h-screen flex">
      <Head>
        <title>Tyler&apos;s Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div className="max-w-md m-auto">{props.children}</div>
    </div>
  );
};

export default Layout;
