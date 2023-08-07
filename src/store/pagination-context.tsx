import { createContext, useEffect, useState } from 'react'

export const PaginationContext = createContext({
  page: 0,
  resultsPerPage: 0,
  postsPerPage: [],
  handlePageChanges: (direction: string) => {},
  handlePostsPerPageChanges: (value: number) => {},
})

function PaginationProvider(props: any) {
  const postsPerPage = [10, 15, 25]
  const [page, setPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(postsPerPage[0])

  const saveState = (state: object) => {
    localStorage.setItem('preferences', JSON.stringify(state))
  }

  const getState = () => {
    const preferences = localStorage.getItem('preferences')

    if (preferences) {
      const prefObj = JSON.parse(preferences)

      setPage(prefObj.page)
      setResultsPerPage(prefObj.resultsPerPage)
    }
  }

  const handlePageChanges = (direction: string) => {
    const newPage = direction === 'next' ? page + 1 : page - 1

    setPage(newPage)

    saveState({ page: newPage, resultsPerPage })
  }

  const handlePostsPerPageChanges = (value: number) => {
    if (postsPerPage.includes(value)) {
      setPage(1)
      setResultsPerPage(value)

      saveState({ page: 1, resultsPerPage: value })
    }
  }

  const context: any = {
    page,
    resultsPerPage,
    postsPerPage,
    handlePageChanges,
    handlePostsPerPageChanges,
  }

  useEffect(() => {
    // TODO: get context from storage
    getState()
  }, [])

  return (
    <PaginationContext.Provider value={context}>
      {props.children}
    </PaginationContext.Provider>
  )
}

export default PaginationProvider
