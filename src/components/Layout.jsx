'use client'

import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'

function Layout ({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Layout
