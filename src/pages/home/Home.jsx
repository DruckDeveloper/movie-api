import { MovieList } from '../../components/movieList/MovieList'
import { usePopularMovies } from '../../hooks/usePopularMovies'
import { useRatedMovies } from '../../hooks/useRatedMovies'

const Home = () => {
  const { popularMovies, loading } = usePopularMovies()
  const { ratedMovies, loadingRated } = useRatedMovies()

  return (
    <main className='home'>
      <h1 className='home__title'>Popular Movies</h1>
      <MovieList movies={popularMovies} loading={loading} />
      <h2 className='home__title'>Top reated movies</h2>
      <MovieList movies={ratedMovies} loading={loadingRated} />
    </main>
  )
}

export { Home }
