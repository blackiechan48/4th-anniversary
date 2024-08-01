import React from 'react';
import MultipleChoiceClue from './MultipleChoiceClues';
import OpenEndedClue from './OpenEndedClues';
import RiddleClue from './RiddleClue';

const CluePage = ({ clue }) => {
  switch (clue.type) {
    case 'multiple-choice':
      return <MultipleChoiceClue clue={clue} />;
    case 'open-ended':
      return <OpenEndedClue clue={clue} />;
    case 'riddle':
      return <RiddleClue clue={clue} />;
    default:
      return <div>Unknown clue type</div>;
  }
};

export default CluePage;
