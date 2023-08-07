import { createContext, useState } from 'react'

import usePagination from '../hooks/usePagination'

export const MoviesContext = createContext({
  movies: [],
  totalMovies: 0,
  getMovies: () => {},
  getMovie: (id: string, handler: any) => {
    id
    handler
  },
})

function MoviesContextProvider(props: any) {
  const [movies, setMovies] = useState([])

  const { page, resultsPerPage } = usePagination()

  const getMovies = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/movies`)
      const data = await response.json()

      setMovies(data.data)
      return true
    } catch (error) {
      return false
    }
  }

  const getMovie = async (id: string, handler: any) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/movies/${id}`)
      const data = await response.json()

      handler(data.data)
      return true
    } catch (error) {
      return false
    }
  }

  const getResultsPerPage = () => {
    const start = (page - 1) * resultsPerPage,
      end = page * resultsPerPage

    return movies.slice(start, end)
  }

  const context: any = {
    movies: getResultsPerPage(),
    totalMovies: movies.length,
    getMovies,
    getMovie,
  }

  return (
    <MoviesContext.Provider value={context}>
      {props.children}
    </MoviesContext.Provider>
  )
}

export default MoviesContextProvider
