import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const Footer = lazy(() => import('./components/footer'));

import '@fontsource/lato'

const theme = extendTheme({
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Suspense fallback={"Carregando..."}>
        <RouterProvider router={router} />
        <Footer />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
)
