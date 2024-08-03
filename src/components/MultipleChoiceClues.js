import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CluePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`;

const Question = styled.h1`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  color: black;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  margin: 5px 0;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 80%;
  max-width: 300px;
  font-size: clamp(1rem, 3vw, 1.2rem);
  transition: background-color 0.3s ease;

 

  @media (max-width: 768px) {
    padding: 8px 16px;
    margin: 5px 0;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  font-size: clamp(0.8rem, 2.5vw, 1rem);

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

const MultipleChoiceClue = ({ clue }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === clue.answer) {
      navigate(clue.nextClue);
    } else {
      setError('Sorry, that is not correct. Please try again.');
    }
  };

  return (
    <CluePageContainer>
      <Question>{clue.question}</Question>
      {clue.options.map((option, index) => (
        <OptionButton key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </OptionButton>
      ))}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CluePageContainer>
  );
};

export default MultipleChoiceClue;
