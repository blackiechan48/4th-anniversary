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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 12px 15px;
  margin: 10px 0;
  width: 90%;
  max-width: 300px;
  border: 3px solid #ccc;
  border-radius: 5px;
  font-size: clamp(1rem, 3vw, 1.2rem);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin: 8px 0;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  margin-top: 12px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: clamp(1rem, 3vw, 1.2rem);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
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

const OpenEndedClue = ({ clue }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.toLowerCase() === clue.answer.toLowerCase()) {
      navigate(clue.nextClue);
    } else {
      setError('Sorry, that is not correct. Please try again.');
    }
  };

  return (
    <CluePageContainer>
      <Question>{clue.question}</Question>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer..."
        />
        <Button type="submit">Submit Answer</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CluePageContainer>
  );
};

export default OpenEndedClue;
