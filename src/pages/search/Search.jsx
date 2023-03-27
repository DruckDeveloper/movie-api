import { useState } from 'react'
import { useSearchMovie } from '../../hooks/useSearchMovie'
import { MovieList } from '../../components/movieList/MovieList'

const Search = () => {
  const [form, setForm] = useState('')

  const { movies, loading, handleSubmit } = useSearchMovie(form)

  return (
    <section className='search'>
      <form
        className='search__form'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          className='search__form--input'
          placeholder='Search'
          value={form}
          onChange={e => setForm(e.target.value)}
        />
        <button className='search__form--submit' type='submit'>buscar</button>
      </form>
      {loading ? <p>Loading</p> : <MovieList movies={movies} />}
    </section>
  )
}

export { Search }
