import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget, { Container, Header, List, ListItem } from '../styles/Quiz';
import questionsData from '../mock/perguntas.json';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';

const Quiz = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState('');
  const [nextQuizes, setNextQuizes] = useState(() => {
    return questionsData.quizes.slice(1, questionsData.quizes.length);
  });

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    return questionsData.quizes[0];
  });

 //TODO: criar state para salvar as questões respondidas com a alternativa selecionada.
 //

  const [isAnswered, setIsAnswered] = useState(false);
  const [correctQuestion, setCorrectQuestion] = useState('');

  const handleItemClick = useCallback((id) => {
    setSelectedItem(id);
  }, [setSelectedItem, setIsAnswered, isAnswered ]);

  const handleConfirmClick = useCallback((event) => {
    event.preventDefault();
    setIsAnswered(true);

  }, [setIsAnswered]);

  const handleNextQuestion = useCallback((event) => {
    if(nextQuizes.length === 0) return;
    
     const nextQuizesCopy = nextQuizes.slice();
     const question = nextQuizesCopy.shift();

     setCurrentQuestion(question);
     setNextQuizes(nextQuizesCopy);
     setIsAnswered(false);
  }, [ nextQuizes, currentQuestion, setNextQuizes, setIsAnswered, setCurrentQuestion ]);

  useEffect(() => {
    if(isAnswered) {
      const correctOption = currentQuestion.answers.find((answer) => answer.isRight);
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
            <p>{currentQuestion.question}</p>
                  <List>
                  {
                      currentQuestion.answers.map((resposta, index) => (
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
              </Widget.Content>
        
        {
          isAnswered 
          ? 
          <button onClick={handleNextQuestion}>Próxima</button>
          : 
          <button onClick={handleConfirmClick}>Confirmar</button>
        }
      </Widget>
  </Container>
  );
}

export default Quiz;
 