import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from './anniversary-logo-.png';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  position: relative; /* Allows positioning of header and footer absolutely within this container */
  
  @media (max-width: 768px) {
    padding: 10px;
    height: auto;
  }
`;

const Header = styled.header`
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: orange;
  font-size: clamp(2rem, 4vw, 5.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const Logo = styled.img`
  width: clamp(40px, 5vw, 50px);
  height: clamp(40px, 5vw, 50px);
  margin-right: 10px;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  position: absolute;
  bottom: 0;
`;

const VideoContainer = styled.div`
  margin-top: clamp(100px, 15vw, 150px);
  width: 80%;
  max-width: 600px;
  z-index: 0;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 100px;
  }
`;

const StartButton = styled.button`
  padding: clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 20px);
  margin-bottom: clamp(50px, 10vw, 100px);
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: clamp(1rem, 3vw, 1.2rem);
  cursor: pointer;

  &:hover {
    background-color: red;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/clue1');
  };

  return (
    <HomePageContainer>
      <Header>
        <Logo src={logo} alt="Anniversary Logo" />
        Our Special Day
      </Header>

      <VideoContainer>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/WDd-jMYJiqo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>

      <StartButton onClick={handleStartClick}>Start Your Scavenger Hunt</StartButton>

      <Footer>Happy Anniversary ❤️ Love you lots</Footer>
    </HomePageContainer>
  );
};

export default HomePage;
