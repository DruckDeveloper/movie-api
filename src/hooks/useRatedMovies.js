import { useState, useEffect } from 'react'
import { topRatedMoviesUrl } from '../constants/constants'

const useRatedMovies = () => {
  const [ratedMovies, setRatedMovies] = useState([])
  const [loadingRated, setLoadingRated] = useState(true)

  useEffect(() => {
    fetch(topRatedMoviesUrl)
      .then(response => response.json())
      .then(data => {
        setRatedMovies(data.results)
        setLoadingRated(false)
      })
  }, [])

  return { ratedMovies, loadingRated }
}

export { useRatedMovies }
