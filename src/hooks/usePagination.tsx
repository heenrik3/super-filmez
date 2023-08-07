import { useContext } from 'react'
import { PaginationContext } from '../store/pagination-context'

const usePagination = () => useContext(PaginationContext)

export default usePagination
