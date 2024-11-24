import { Item } from '@components/Item'
import { JokeType } from 'api/_types'
type Props = {
  joke?: JokeType
}

export const Home = ({ joke }: Props) => {
  return (
    <>
      <Item joke={joke} />
    </>
  )
}
