import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta property="title" content="Answer me" />
          <meta
            name="description"
            content="Generate specific answer from chatGPT with pre-defined persona"
          />
          <meta
            property="og:description"
            content="Generate specific answer from chatGPT with pre-defined persona"
          />
          <meta property="og:title" content="Answer me" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
