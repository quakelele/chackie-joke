import { Favorites } from '../Pages/Favorites'
import { Home } from '../Pages/Home'
import { useLazyGetRandomJokeQuery, useGetRandomJokeQuery } from '../api'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Button } from '@components/Button'
import { JokeType } from 'api/_types'
import chucknorris_logo from '@assets/chucknorris_logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 15px;
`

export const Layout = () => {
  const [fetchJoke] = useLazyGetRandomJokeQuery()
  const { data: joke } = useGetRandomJokeQuery()
  const Local: JokeType[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  const [favorites, setFavorites] = useState<JokeType[]>(Local)

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = () => {
    fetchJoke()
    if (joke) {
      if (favorites.length <= 9) {
        setFavorites([...favorites, joke])
        return
      }
      setFavorites([...favorites.slice(1), joke])
    }
  }
  console.log(favorites.length)
  return (
    <Container>
        <img width={200} height={100} src={chucknorris_logo} alt="" />
      <Inner>
        <Link to="/">
          <Page>Home</Page>
        </Link>
        <Link to="favorites">
          <Page>Favorites</Page>
        </Link>
      </Inner>
      <ButtonBlock>
        <Button title={'random'} addButton={fetchJoke} />
        <Button title={'add with delay'} addButton={() => console.log('add with delay 3 sec')} />
        <Button title={'add to favorites'} addButton={addToFavorites} />
      </ButtonBlock>
      <Routes>
        <Route path="/favorites" element={<Favorites setFavorites={setFavorites} favorites={favorites} />} />
        <Route path="/" element={<Home joke={joke} />} />
      </Routes>
    </Container>
  )
}
