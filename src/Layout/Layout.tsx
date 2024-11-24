import { Favorites } from '../Pages/Favorites'
import { Home } from '../Pages/Home'
import { useLazyGetRandomJokeQuery, useGetRandomJokeQuery } from '../api'
import styled, { keyframes } from 'styled-components'
import './Layout.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Button } from '@components/Button'
import chucknorris_logo from '@assets/chucknorris_logo.png'
import { useInterval } from '../hooks/useInterval'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { JokeType } from '../api/_types'

export const Layout = () => {
  const [fetchJoke] = useLazyGetRandomJokeQuery()
  const [interval, setInterval] = useInterval(false, fetchJoke)
  const { data: joke } = useGetRandomJokeQuery()
  const [favorites, setFavorites] = useLocalStorage('[]', 'favorites')
  const isJokeInFavorite = favorites.find((item: JokeType) => item.id === joke?.id)
  const deleteFromFavorite = favorites.filter((item: JokeType) => item.id !== joke?.id)

  const addAndDeleteHandler = () => {
    if (joke) {
      if (!isJokeInFavorite) {
        setFavorites([...favorites, joke])
        return
      }
      setFavorites(deleteFromFavorite)
    }
  }

  const addToFavorites = () => {
    if (joke) {
      if (favorites.length <= 9) {
        setFavorites([...favorites, joke])
        return
      }
      setFavorites([...favorites.slice(1), joke])
    }
  }
  return (
    <Container>
      <Image src={chucknorris_logo} alt="" />
      <Inner>
        <StyledLink to="/">
          <Page>Home</Page>
        </StyledLink>

        <StyledLink to="favorites">
          <Page>Favorites</Page>
        </StyledLink>
      </Inner>
      <ButtonBlock>
        <Button interval={interval} fetchJoke={fetchJoke} setInterval={setInterval} addToFavorites={addToFavorites} />
      </ButtonBlock>
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites setFavorites={setFavorites} addAndDeleteHandler={addAndDeleteHandler} favorites={favorites} />
          }
        />
        <Route path="/" element={<Home joke={joke} />} />
      </Routes>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const shakeAnimation = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-5px, -5px) rotate(-5deg);
  }
  50% {
    transform: translate(5px, 5px) rotate(5deg);
  }
  75% {
    transform: translate(-5px, 5px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`
const Image = styled.img`
  width: 300px;
  height: 200px;
  transition: transform 0.3s ease;

  &:hover {
    animation: ${shakeAnimation} 0.5s ease-in-out infinite;
  }
`
const Inner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`
const ButtonBlock = styled.div`
  margin-bottom: 15px;
  display: flex;
  gap: 30px;
  flex-direction: row;
`
const Page = styled.h3`
  font-size: 44px;
  text-decoration: none !important;
  margin: 0;
  padding: 11px;
  line-height: 1;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  outline: none;
  color: rgb(71, 71, 71);
  font-family: 'Hitch Hike';
  transition: 0.3s all ease;

  h3:hover {
    transform: scale(1.1) rotate(2deg);
    transition: 0.5s all ease;
  }
`
