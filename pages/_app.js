import { useEffect, useCallback } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

function MyApp({ Component, pageProps }) {
  // =======================================================
  //  Code origin Error  useEffect
  // useEffect(async () => {
  //   const liff = (await import('@line/liff')).default
  //   try {
  //     await liff.init({ liffId });
  //   } catch (error) {
  //     console.error('liff init error', error.message)
  //   }
  //   if (!liff.isLoggedIn()) {
  //     liff.login();
  //   }
  // })
  // =======================================================

  const liffLogin = useCallback(async () => {
    const liff = (await import("@line/liff")).default;
      try {
        await liff.init({ liffId });
      } catch (error) {
        console.error("liff init error", error.message);
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      }
  }, []);

  useEffect(() => {
    liffLogin();
  }, [liffLogin]);

  return <Component {...pageProps} />;
}

export default MyApp;
