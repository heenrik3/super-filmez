import { createContext, useState } from 'react'

import usePagination from '../hooks/usePagination'

export const MoviesContext = createContext({
  movies: [],
  movie: {
    img: '',
    name: '',
    rating: 0,
    genre: [],
    director: '',
    year: 0,
    description: '',
  },
  totalMovies: 0,
  getMovies: () => {},
  getMovie: (id: string) => {
    id
  },
})

function MoviesContextProvider(props: any) {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState()

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

  const getMovie = async (id: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API}/movies/${id}`)
      const data = await response.json()

      setMovie(data.data)
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
    movie,
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
