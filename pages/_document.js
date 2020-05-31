import Document, { Html, Head, Main, NextScript } from "next/document";

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <script
          dangerouslySetInnerHTML={{
            __html: /*jsx*/ `window.localStorage.getItem("darkmode")||(window.darkmode=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches,window.localStorage.setItem("darkmode",window.darkmode?"true":"false")),window.darkmode=window.localStorage.getItem("darkmode"),"true"==window.darkmode&&document.getElementsByTagName("html").item(0).classList.toggle("dark");`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: /*jsx*/ `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T2RRZ25');`,
          }}
        />
        <Head />
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-T2RRZ25"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
