import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget, { Container, Header, List, ListItem } from '../styles/Quiz';
import questions from '../mock/perguntas.json';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';

const Quiz = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctQuestion, setCorrectQuestion] = useState('');

  const handleItemClick = useCallback((id) => {
    setSelectedItem(id);
  }, [setSelectedItem, setIsAnswered, isAnswered ]);

  const handleConfirmClick = useCallback((event) => {
    event.preventDefault();
    setIsAnswered(true);

  }, [setIsAnswered, setCorrectQuestion]);

  useEffect(() => {
    if(isAnswered) {
      const correctOption = questions.quiz[0].answers.find((answer) => answer.isRight);
      setCorrectQuestion(correctOption.id);
    }
  }, [isAnswered]);

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
            <p>{questions.quiz[0].question}</p>
            {/* <ImRadioChecked  size={20}/> */}
            <List>
             {
                questions.quiz[0].answers.map((resposta, index) => (
                  <ListItem 
                  key={resposta.id} 
                  isSelected={selectedItem === resposta.id }
                  isCorrect={ correctQuestion === resposta.id }
                  onClick={
                    (event) => {
                      if(isAnswered) {
                        event.preventDefault();
                        return;
                      }
                      handleItemClick(resposta.id);
                    }
                  }>
                    { resposta.label } 

                    {
                      selectedItem === resposta.id ?
                      <ImRadioChecked  size={20}/> : 
                      <ImRadioUnchecked size={20} />
                    }
                  </ListItem>
                ) )
              }
            </List>

            <button onClick={handleConfirmClick}>Confirmar</button>
        </Widget.Content>
      </Widget>
  </Container>
  );
}

export default Quiz;
 