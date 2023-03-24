import React from 'react'
import type { GlobalProvider } from '@ladle/react'

import 'tailwindcss/tailwind.css'

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
      rel="stylesheet"
    />
    {children}
  </>
)
