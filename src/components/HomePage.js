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
  background-image: url("/wedding photo.JPG"); 
  background-size: cover;
  background-position: center;

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
  font-size: 5.5rem;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 5px 10px;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1rem;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

const VideoContainer = styled.div`
  margin-top: 150px;
  width: 80%;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-top: 100px;
    width: 100%;
  }
`;

const StartButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 100px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  font-size: 1.2rem;

  &:hover {
    background-color: red;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 16px;
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
        <Logo src={logo} alt="Logo" />
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
