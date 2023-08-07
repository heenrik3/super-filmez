import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MoviesContextProvider from './store/movies-context.tsx'
import PaginationProvider from './store/pagination-context.tsx'
import ThemeProvider from './store/theme-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PaginationProvider>
        <MoviesContextProvider>
          <App />
        </MoviesContextProvider>
      </PaginationProvider>
    </ThemeProvider>
  </React.StrictMode>
)
