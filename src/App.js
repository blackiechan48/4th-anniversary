import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import CluePage from './components/CluePage';
import FinalPage from './components/FinalPage';
import HomePage from './components/HomePage';

const clues = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "We got married later than planned because of lockdown, what was our initial planned date?",
    options: ["June 12th", "June 20th", "July 20th", "July 15th"],
    answer: "June 20th",
    nextClue: "/clue2"
  },
  {
    id: 2,
    type: 'open-ended',
    question: "Where did we take our first vacation together?",
    answer: "Calella",
    nextClue: "/clue3"
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Where were we going to when you first found out i dont like to walk?",
    options: ["On a walking tour","Walking to a light house","On a walking date","We werent even walking"],
    answer: "Walking to a light house",
    nextClue: "/clue4"
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "What was the first song i heard you sing like a wierdo",
    options: ["Some rock song", "Airplanes by Bob", "A song by pink", "Party in the USA"],
    answer: "Airplanes by Bob",
    nextClue: "/clue5"
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "Where were you when we had our first video call?",
    options: ["Somerset","Dawlishw road","Hotel", "In the streets"],
    answer: "In the streets",
    nextClue: "/clue6"
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "why did i buy you flowers for the first time ever?",
    options: ["Im a romantic man","As a start to a date","To prove your mum wrong", "To aplogise"],
    answer: "To prove your mum wrong",
    nextClue: "/clue7"
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "Where did we go on our second date",
    options: ["Dessert shop", "Ferris Wheel", "Ice skating", "Cinema"],
    answer: "Ferris Wheel",
    nextClue: "/clue8"
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: "What position did i play on the field when i played my last game of american football?",
    options: ["Running back","Quater back","Line Backer","O-Lineman"],
    answer: "Line Backer",
    nextClue: "/clue9"
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "We got really drunk when we found out your brother was getting engaged, when was the other time we got that  drunk?",
    options: ["In barcelona","At the comedy club","When we were drinking all the alcohol at long nuke","Georgie and Arthurs wedding"],
    answer: "At the comedy club",
    nextClue: "/clue10"
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: "Which restaurant have we NOT been to together?",
    options: ["TGI Friday", "Weatherspoons", "Chiquito", "Simpsons"],
    answer: "Simpsons",
    nextClue: "/final"
  }
];

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {clues.map((clue, index) => (
          <Route 
            key={index} 
            path={`/clue${clue.id}`} 
            element={<CluePage clue={clue} />} 
          />
        ))}
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </>
  );
};

export default App;
