import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-confetti';

const FinalPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-image: url("/oback.png"); 
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
`;

const CongratsMessage = styled.h1`
  font-size: 6rem;
  color: white;
  text-align: center;
  margin-bottom: 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const PresentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  opacity: 0;
`;

const PresentImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 20px;
`;

const PresentText = styled.p`
  font-size: 2.2rem;
  color: yellow;
  text-align: center;
`;

const RevealButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: orange;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FinalPage = () => {
  const [revealed, setRevealed] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleRevealClick = () => {
    setRevealed(true);
    setConfettiActive(true);
    ;
  };

  return (
    <FinalPageContainer>
      <CongratsMessage>Congratulations! You've completed the scavenger hunt!</CongratsMessage>
      {revealed ? (
        <>
          <PresentContainer>
            <PresentImage src="/reveal.png" alt="Anniversary Present" />
            <PresentText>Your special anniversary present is a romantic weekend getaway!</PresentText>
          </PresentContainer>
          {confettiActive && <Confetti />}
        </>
      ) : (
        <RevealButton onClick={handleRevealClick}>Click to Reveal Your Present</RevealButton>
      )}
    </FinalPageContainer>
  );
};

export default FinalPage;
