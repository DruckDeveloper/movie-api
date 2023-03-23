import { useEffect, useState } from 'react'
import { apiUrl } from '../constants/constants'

const usePopularMovies = () => {
  const [popularMovies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])
  console.log(popularMovies)
  return { popularMovies, loading }
}

export { usePopularMovies }
