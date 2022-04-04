import React, { useState, useEffect } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const liffId = process.env.NEXT_PUBLIC_LINE_ID

function MyApp({ Component, pageProps }) {
  useEffect(() => { 
    (async () => {
      const liff = (await import('@line/liff')).default
      try {
        console.log("ff")
        await liff.init({ liffId });
      } catch (error) {
        console.error('liff init error', error.message)
      }

      if(liff.isLoggedIn()){
        liff.login()
      }
    })
  });

  // useEffect(async () => {
  //   const liff = (await import('@line/liff')).default
  //   try {
  //     await liff.init({ liffId });
  //   } catch (error) {
  //     console.error('liff error', error.message)
  //   }

  //   if(liff.isLoggedIn()){
  //     liff.login()
  //   }
  
  // })

  return <Component {...pageProps} />
}

export default MyApp
