import React, { createContext, useState, useCallback } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import orange from '@material-ui/core/colors/orange'
import purple from '@material-ui/core/colors/purple'

function createTheme (light) {
  const theme = {
    palette: {
      type: 'dark',
      primary: {
        // light: será calculada com base em palette.primary.main,
        main: '#b0f82d',
        // dark: será calculada com base em palette.primary.main,
        // contrastText: será calculada para contrastar com palette.primary.main
      },
      secondary: {
        light: '#b0f82d',
        main: '#b0f82d',
        // dark: será calculada com base palette.secondary.main,
        contrastText: '#ffcc00',
      },
      grey: {
        main: '#e3e3e3',
      },
    },
  }

  return createMuiTheme(theme)
}

export const ThemeContext = createContext({})

function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(createTheme(true))

  const setThemeType = useCallback(
    type => {
      setTheme(createTheme(type === 'light'))
    },
    [setTheme]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setThemeType }}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
