import { FaMedal } from 'react-icons/fa';
import {Container, Message } from './styles';

const WinnerText = ({text}) => {
  return (
    <Container>
      <Message>{text}</Message>
      <FaMedal size={60}/>
    </Container>
  )
}

export default WinnerText;