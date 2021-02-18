import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Widget, { Container, Header, List, ListItem } from '../styles/Quiz';
import questionsData from '../mock/perguntas.json';
import { Button } from '../styles/Button';
import { ImRadioUnchecked, ImRadioChecked } from 'react-icons/im';
import WinnerText from '../components/WinnerText';

const Quiz = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState('');
  const [nextQuizes, setNextQuizes] = useState(() => {
    return questionsData.quizes.slice(1, questionsData.quizes.length);
  });

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    return questionsData.quizes[0];
  });
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctQuestion, setCorrectQuestion] = useState('');

  const [myHits, setMyHits] = useState(0);

  const handleItemClick = useCallback((id) => {
    setSelectedItem(id);
  }, [setSelectedItem, setIsAnswered, isAnswered ]);

  const handleConfirmClick = useCallback((event) => {
    event.preventDefault();
    setIsAnswered(true);

  }, [setIsAnswered]);

  const handleNextQuestion = useCallback((event) => {
    if(nextQuizes.length === 0) {
      return;
    }
    
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
      if(selectedItem === correctOption.id)
        setMyHits(myHits + 1);
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
            {
              isAnswered && nextQuizes.length === 0 ?
                <WinnerText text={`Você acertou ${myHits} de ${questionsData.quizes.length}`} />
                            : (
                          <>
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
                      </>
                              
                            )
            }
          </Widget.Content>
        
        {
          (() => {
            if(isAnswered && nextQuizes.length === 0) return '';
            if(isAnswered) return <Button onClick={handleNextQuestion}>Próxima</Button>;

            return <Button onClick={handleConfirmClick}>Confirmar</Button>;
          })()
        }
      </Widget>
  </Container>
  );
}

export default Quiz;
 