import Head from "next/head";
import NProgress from "../components/nprogress";
import { useMediaPredicate } from "react-media-hook";
import { normalize, global, fonts } from "../styles";
import ContextProvider from "../lib/context";
import { useState, useLayoutEffect, useEffect } from "react";
import TagManager from "react-gtm-module";

export default ({ Component, pageProps }) => {
  const isDark = useMediaPredicate("(prefers-color-scheme: dark)");
  const [contextValue, setContextValue] = useState(undefined);

  useLayoutEffect(
    () =>
      setContextValue({
        darkmode: window.darkmode == "true",
        updateDarkmode: updateDarkmode,
      }),
    []
  );

  useEffect(() => {
    if (process.env.NODE_ENV == "production") {
      TagManager.initialize({ gtmId: process.env.GOOGLE_TAG });
    }
  }, []);

  function updateDarkmode(value) {
    setContextValue({
      darkmode: value,
      updateDarkmode: updateDarkmode,
    });
    if (value == false) {
      document.getElementsByTagName("html").item(0).removeAttribute("class");
    } else {
      document
        .getElementsByTagName("html")
        .item(0)
        .setAttribute("class", "dark");
    }
    window.localStorage.setItem("darkmode", value.toString());
  }

  function getFavicons() {
    const folder = isDark ? "dark" : "light";
    return (
      <>
        <link
          rel="icon"
          href={"/images/favicons/" + folder + "/favicon.svg"}
          type="image/svg"
        />
        <link
          rel="icon"
          href={"/images/favicons/" + folder + "/favicon-16x16.png"}
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href={"/images/favicons/" + folder + "/favicon-32x32.png"}
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href={"/images/favicons/" + folder + "/android-chrome-192x192.png"}
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href={"/images/favicons/" + folder + "/android-chrome-512x512.png"}
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          href={"/images/favicons/" + folder + "/apple-touch-icon.png"}
          type="image/png"
          sizes="180x180"
        />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js Darktheme</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <noscript>This page requires JavaScript in order to function</noscript>
        {getFavicons(isDark)}
      </Head>
      {contextValue && (
        <ContextProvider value={contextValue}>
          <Component {...pageProps} />
        </ContextProvider>
      )}
      <NProgress />
      <style jsx global>
        {normalize}
      </style>
      <style jsx global>
        {fonts}
      </style>
      <style jsx global>
        {global}
      </style>
    </>
  );
};
