import '../components/Button.css'

type Props = {
  intervalHandler: (arg: void) => void
  fetchJoke: (arg: void) => void
  addToFavorites: (arg: void) => void
  isRunning?: boolean
}
export const Button = ({ isRunning, fetchJoke, addToFavorites, intervalHandler }: Props) => {
  return (
    <>
      <button onClick={() => fetchJoke()}>Random joke</button>
      <button onClick={() => intervalHandler()} className={isRunning ? 'greenColor' : 'grayColor'}>
        Joke with delay
      </button>
      <button onClick={() => addToFavorites()}>Add to favorites</button>
    </>
  )
}
