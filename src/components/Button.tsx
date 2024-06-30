import styled from 'styled-components'

const Buttons = styled.button`
  background-color: #b3b3b3;
  color: white;
  border-radius: 10px;
  padding: 5px;
  width: 136px;
  border: 0 solid gray;
  cursor: pointer;
  transition: 0.5s all ease;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #7a7a7ac0;
    box-shadow: 0 3px 5px rgba(82, 82, 82, 0.4);
  }
`

type Props = {
  title: string
  addButton: (arg: void) => void
}
export const Button = ({ title, addButton }: Props) => {
  return (
    <>
      <Buttons onClick={() => addButton()}> {title} </Buttons>
    </>
  )
}
