import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import theme from '../styles/theme';
import {RtlProvider} from "../Component/RtlProvider";

function MyApp({ Component, pageProps }: AppProps) {

  return  (
  <ChakraProvider theme={theme}>
    <RtlProvider>
    <Component {...pageProps} />
      </RtlProvider>
  </ChakraProvider>
  )
}

export default MyApp
