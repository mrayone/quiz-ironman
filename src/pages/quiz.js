import { useRouter } from 'next/router';
import Widget, { Container, Header } from '../styles/Quiz';
const Quiz = () => {
  const router = useRouter();
  
  return (
    <Container>
    <img src="" />
      <Widget>
        <Header>
          <Widget.Title>
            Responda as perguntas {router.query.name}
          </Widget.Title>
        </Header>
        <Widget.Content>
        </Widget.Content>
      </Widget>
  </Container>
  );
}


export default Quiz;
 