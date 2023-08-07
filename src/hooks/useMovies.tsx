import { useContext } from 'react'
import { MoviesContext } from '../store/movies-context'

const useMovies = () => useContext(MoviesContext)

export default useMovies
