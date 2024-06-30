// import styled from 'styled-components'
import '../components/Button.css'
// const Buttons = styled.button`

// `

type Props = {
  title: string
  addButton: (arg: void) => void
  isRunning?: boolean
}
export const Button = ({ title, addButton, isRunning }: Props) => {
  return (
    <>
      <button className={isRunning ? 'greenColor' : 'grayColor'} onClick={() => addButton()}>
        {title}
      </button>
    </>
  )
}
