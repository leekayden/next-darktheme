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
            __html: /*jsx*/ `
            if (!window.localStorage.getItem("darkmode")) {
              window.darkmode=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;
              window.localStorage.setItem("darkmode",window.darkmode?"true":"false");
            }
            window.darkmode=window.localStorage.getItem("darkmode")
            window.darkmode=="true"?document.getElementsByTagName("html").item(0).classList.toggle("dark"):0;
            `,
          }}
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
