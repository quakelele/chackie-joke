import { JokeType } from 'api/_types'
import styled from 'styled-components'
import chucky from '@assets/chukdance.gif'
const Container = styled.div`
  display: flex;
  width: 420px;
  height: 150px;
  align-items: center;
  border-radius: 10px;
  background: rgba(238, 238, 238, 0.856);
  padding: 33px;
  overflow: hidden;
  list-style-type: none;
  transition: 0.3s all ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  }

  h3 {
    color: rgb(71, 71, 71);
    font-size: 25px;
    font-family: 'Hitch Hike';
  }
`
type Props = {
  joke?: JokeType
}

export const Item = ({ joke }: Props) => {
  return (
    <div>
      <Container>
        <img src={chucky} width={111} height={111} alt="" />
        <h3>{joke?.value}</h3>
      </Container>
    </div>
  )
}

// { created_at, icon_url, id, updated_at, url, value }
