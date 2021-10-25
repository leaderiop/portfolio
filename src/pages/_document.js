import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="title"
            content="Almechkor Mohammad - Big Data & Software Dev"
          />
          <meta
            name="description"
            content="Hey there, This is Mohammad aka Yopu. Im a Big Data Engineer and Software Developer."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Almechkor Mohammad - Big Data & Software Dev"
          />
          <meta
            property="og:description"
            content="Hey there, This is Mohammad aka Yopu. Im a Big Data Engineer and Software Developer."
          />
          <meta
            property="og:image"
            content="https://www.vipuljha.com/images/banner.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Almechkor Mohammad - Big Data & Software Dev"
          />
          <meta
            property="twitter:description"
            content="Hey there, This is Mohammad aka Yopu. Im a Big Data Engineer and Software Developer."
          />
          <meta
            property="twitter:image"
            content="https://www.vipuljha.com/images/banner.png"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
