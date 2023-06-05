import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/main.scss'
import 'sal.js/dist/sal.css';

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
