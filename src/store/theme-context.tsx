import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
})

function ThemeProvider(props: any) {
  const themes = ['light', 'dark']
  const preference = window.matchMedia('(prefers-color-scheme: dark)')

  const getSystemTheme = () => Number(preference.matches)

  const [theme, setTheme] = useState(themes[getSystemTheme()])

  const toggleTheme = () => {
    setTheme(theme === themes[0] ? themes[1] : themes[0])
  }

  const handleThemeChange = (e: any) => setTheme(themes[+e.matches])

  useEffect(() => {
    preference.addEventListener('change', handleThemeChange)
  }, [preference])

  const context = {
    theme,
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
