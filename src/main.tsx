import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { CourseDetail } from './course-detail'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import '@fontsource/lato'

const theme = extendTheme({
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/curso/:uuid",
    element: <CourseDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
