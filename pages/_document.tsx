import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "../components/Navbar";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Navbar />
        {/*<div className="bg-white m-8 z-20 shadow">*/}
            <Main />
        {/*</div>*/}
        <NextScript />
      </body>
    </Html>
  )
}
