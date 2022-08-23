import '../styles/globals.css'
import '../styles/style.css' 
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { ChainId } from '@thirdweb-dev/sdk'
import React from 'react';


function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
