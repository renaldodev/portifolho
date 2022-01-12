import '@fontsource/space-mono/700.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
    return (
     <>
      <ChakraProvider theme={theme}>
     
        <Component {...pageProps} />
      </ChakraProvider>
     </>
    )
  }
  
  export default MyApp