import styled from 'styled-components'
import { JokeType } from 'api/_types'
import chucky from '@assets/chukdance.gif'
const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  button {
    cursor: pointer;
    font-size: 10px;
    height: 30px;
    border: 0 solid gray;
    background-color: #a15858;
    color: white;
    border-radius: 10px;
    padding: 5px;
    transition: 0.2s all ease-in;
    &:hover {
      background-color: #ff0000c0;
      box-shadow: 0 3px 5px rgba(82, 82, 82, 0.4);
    }
  }
`
const List = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 450px;
 background-color: #e0e0e0;
  border: 0 solid grey;
  padding: 10px;
  border-radius: 15px;
  list-style-type: none;
  transition: 0.3s all ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }
  button {
    cursor: pointer;
    font-size: 10px;
    height: 30px;
    border: 0 solid gray;
    background-color: #a15858;
    color: white;
    border-radius: 10px;
    padding: 5px;
    transition: 0.2s all ease-in;
    &:hover {
      background-color: #ff0000c0;
      box-shadow: 0 3px 5px rgba(82, 82, 82, 0.4);
    }
  }
  h3 {
    color: rgb(90, 90, 90);
    font-size: 18px;
    font-family: 'Hitch Hike';
  }
`
type Props = {
  favorites: JokeType[]
  setFavorites: (arg: JokeType[]) => void
}
export const Favorites = ({ favorites, setFavorites }: Props) => {
  const deleteFromFavorites = (jokeId: string | undefined) => {
    const deleteById = favorites.filter(item => item.id !== jokeId)
    setFavorites(deleteById)
  }

  return (
    <Container>
      <button onClick={()=> setFavorites([])}>clear all</button>
      {favorites.map(item => (
        <List key={item.id}>
          <img src={chucky} width={50} height={50} alt="" />
          <h3>{item.value}</h3>
          <button onClick={() => deleteFromFavorites(item.id)}>delete</button>
        </List>
      ))}
    </Container>
  )
}
