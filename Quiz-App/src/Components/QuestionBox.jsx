import React, { useState } from 'react';
import questions from '../Question';
import Result from './Result';

export default function QuestionBox() {
  const [score, setScore] = useState(0);
  const [currQues, setCurrQues] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAns = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQues = currQues + 1;
    if (nextQues < questions.length) {
      setCurrQues(nextQues);
    } else {
      // All questions answered, show the result
      setShowResult(true);
    }
  };

  const handleChange = () => {
    document.getElementById('question').style.color = 'red';
  };

  const handleColor = () => {
    document.getElementById('question').style.color = 'white';
  };
  const again = ()=>{
    setScore(0)
    setCurrQues(0)
    setShowResult(0)
}
  return (
    <>
      {showResult ? (
        <Result score={score} again={again} />
      ) : (
        <div className='questionBox'>
          <div id='question'>{questions[currQues].text}</div>

          {questions[currQues].options.map((option, index) => (
            <div key={index} className='option' onClick={() => handleAns(option.isCorrect)}>
              {option.text}
            </div>
          ))}

          <button className='highlight' onClick={handleChange}>HIGHLIGHT</button>
          <button className='highlight' onClick={handleColor}>UNHIGHLIGHT</button>
        </div>
      )}
    </>
  );
}
