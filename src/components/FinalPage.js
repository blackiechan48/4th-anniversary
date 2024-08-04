import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-confetti';

// Styled-components for the page layout
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
  }
`;

const CongratsMessage = styled.h1`
  font-size: 2.5rem;
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
  position: relative;
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

// Styled-component for making the image link
const ImageLink = styled.a`
  position: relative;
  display: block;
  width: 250px;
  height: 250px;
  text-decoration: none;
`;

const FinalPage = () => {
  const [revealed, setRevealed] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const audioRef = useRef(null);

  const handleRevealClick = () => {
    setRevealed(true);
    setConfettiActive(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <FinalPageContainer>
      <CongratsMessage>Congratulations! You've completed the scavenger hunt!</CongratsMessage>
      {revealed ? (
        <>
          <PresentContainer>
            <ImageLink href="https://www.virginexperiencedays.co.uk/voucher/download?&token=a8fdfc15-bbef-4770-ad40-7a507bfa524a" target="_blank" rel="noopener noreferrer">
              <PresentImage src="V exp.png" alt="Anniversary Present" loading="lazy" />
            </ImageLink>
            <PresentText> a present for a  <strong>beautiful  </strong>mother and  And In July 2025, we are going to America and doing a road trip!!</PresentText>
          </PresentContainer>
          {confettiActive && <Confetti />}
        </>
      ) : (
        <RevealButton onClick={handleRevealClick}>Click to Reveal Your Present</RevealButton>
      )}
      <audio ref={audioRef} src="/susu trimed_01.mp3" />
    </FinalPageContainer>
  );
};

export default FinalPage;
