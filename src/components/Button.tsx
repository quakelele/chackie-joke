import '../components/Button.css'

type Props = {
  fetchJoke: () => void
  addToFavorites: () => void
  interval: boolean 
  setInterval:  () => void
}
export const Button = ({ interval, fetchJoke, addToFavorites, setInterval }: Props) => {
  return (
    <>
      <button onClick={() => fetchJoke()}>Random joke</button>
      <button onClick={setInterval} className={interval ? 'greenColor' : 'grayColor'}>
        Joke with delay
      </button>
      <button onClick={() => addToFavorites()}>Add to favorites</button>
    </>
  )
}
