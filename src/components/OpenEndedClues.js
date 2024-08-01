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
   background-image: url("/lake.png"); 
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
`;

const Question = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 80%;
  max-width: 300px;
  border: 3px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
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
        />
        <Button type="submit">Submit Answer</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </CluePageContainer>
  );
};

export default OpenEndedClue;
