import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '@fontsource/lato'

const theme = extendTheme({
  colors: {
    baseColor: '#9349DE'
  },
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
