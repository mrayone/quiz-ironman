import { useState, useCallback } from 'react';
import Widget, { Container, Header } from '../styles/Home';
import Link from 'next/link';

export default function Home() {
  const [ nome, setNome ] = useState('');

  const handleInput = useCallback((event) => {
    setNome(event.target.value);
  }, [setNome]);

  return (
    <Container>
      <img src="" />
        <Widget>
          <Header>
            <Widget.Title>
              Iron Main
            </Widget.Title>
          </Header>
          <Widget.Content>
            <p>Teste seus conhecimentos conhecendo o mundo do homem de ferro e divirta-se com Alura-Quiz</p>

            <Widget.TextBox 
               onInput={handleInput}
               placeholder="Digite o seu nome"/>
            <Link href={
             {
               pathname: '/quiz',
               query: { name: nome },
             }
            }>
              <Widget.Button>Iniciar { nome }</Widget.Button>
            </Link>
          </Widget.Content>
        </Widget>

        <Widget>
          
        </Widget>
    </Container>
  )
}
