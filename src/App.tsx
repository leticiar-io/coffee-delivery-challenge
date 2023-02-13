import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      {/* the order is not important, but it must be placed inside the ThemeProvider */}
    </ThemeProvider>
  )
}

export default App
