import React, { useMemo } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, createGlobalStyle } from 'styled-components'

export const colors = (_darkMode) => ({
  white: '#FFFFFF',
  black: '#000000',

  text1: _darkMode ? '#FFFFFF' : '#475965',
  text2: _darkMode ? '#c3c5cb' : '#475965ab',
  text3: _darkMode ? '#6c7284' : '#475965ab',

  bg1: _darkMode ? '#2C313B' : '#FFFFFF',
  bg2: _darkMode ? '#a7aaaf42' : '#ececec',

  primary1: _darkMode ? '#32b1f5' : '#ff6666',
  primary1Transparentized: _darkMode ? '#32b1f594' : '#ff666675',
  primary1Hovered: _darkMode ? '#015b8c' : '#d64848',

  primary2: _darkMode ? '#3680E7' : '#66b8ff',
  primary3: _darkMode ? '#66b8ff61' : '#66b8ff61',

  secondary1: _darkMode ? '#FFFFFF' : '#475965',
  secondary2: _darkMode ? '#6c7284' : '#d5d9dc',

  secondary3: _darkMode ? '#212429' : '#FFFFFF',
  secondary3Transparentized: _darkMode ? '#21242980' : '#FFFFFF',

  secondary4: _darkMode ? '#40444f' : '#eaeaea',
  secondary4Hovered: _darkMode ? '#6f768a' : '#c1bfbf',

  gray: '#9CA0A7',
  lightGray: '#4759654d',
  blue: '#66b8ff',
})

export const theme = (_darkMode) => ({
  ...colors(_darkMode),
  type: _darkMode ? 'dark' : 'light',
})

export default function ThemeProvider({ children }) {
  const darkMode = false
  const themeObject = useMemo(() => theme(darkMode), [darkMode])
  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

export const ThemedGlobalStyle = createGlobalStyle`
html * {
  font-family: 'Chivo', sans-serif;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
/* Firefox */
input[type=number] {
-moz-appearance: textfield;
}
.modal-content {
  border-radius: 20px !important;
  @media (max-width: 767.98px) {
    padding: 15px;
    background: transparent;
  }
}
.modal-dialog {
  max-width: 450px !important;
  margin: 1.75rem auto;
}
body {
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg1} !important;
}
`
