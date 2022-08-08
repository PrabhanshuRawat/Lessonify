import React, { useState } from 'react'
import TextToSpeech from 'text-to-speech-js';
import { questions } from './assets/questions/questions';
import SpellQuestion from './components/SpellQuestion';


const Spelling = () => {
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const size = questions.length;

  const startAssessment = () => {
    setStart(true);
  }

  const checkAnswer = (answer, correctAnswer) => {
    const correct = answer.toLowerCase() === correctAnswer.toLowerCase();
    if (correct) {
      setScore(score + 1);
    }
    console.log(score);
  }

  const finishTest = () => {
    setShowResult(true);
    setStart(false);
  }

  // calculate percentage of correct answers
  const percentage = (score / size) * 100;

  return (
    <>
      {(!start && !showResult) && <div style={{ marginTop: '200px' }}>
        <h1>SPELLSCREEN: Free spelling test</h1>
        <div style={{ width: '50%', margin: '3rem auto' }}>
          <h3>Test your spelling skills</h3>
          <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            This is a free spelling test. You will be asked to spell out the words
            in the text. You will be given a short time to spell each word.
          </p>
          <p>
            You will be given a short time to spell each word. If you do not spell
            the word correctly, you will be given a chance to correct your spelling.
            If you do not spell the word correctly, you will be given a chance to
            correct your spelling.
          </p>
          <div style={{ margin: '2rem auto' }}><button onClick={startAssessment} style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem' }}>Start</button></div>
        </div>
      </div>}
      {
        start && <SpellQuestion question={questions[question]} checkAnswer={checkAnswer} next={setQuestion} size={size} index={question} showResult={finishTest} />
      }
      {
        showResult && <div style={{margin: '200px 0',display: 'flex', whiteSpace: 'nowrap', justifyContent: 'center'}}><h3>Your score is {percentage}%</h3></div>
      }
    </>
  );
}

export default Spelling
