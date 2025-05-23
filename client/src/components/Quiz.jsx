// client/src/components/Quiz.jsx
import { useState } from 'react';

export default function Quiz({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (choice) => {
    const updated = [...selectedAnswers];
    updated[currentIndex] = choice;
    setSelectedAnswers(updated);
  };

  const next = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const score = selectedAnswers.reduce((total, answer, idx) => {
    return total + (answer === questions[idx].answer ? 1 : 0);
  }, 0);

  if (isComplete) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="p-4 bg-white border rounded shadow mt-6">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Quiz Complete</h2>
        <p className="text-gray-800 mb-1">You scored {score} out of {questions.length}</p>
        <p className={`font-semibold ${percent >= 80 ? 'text-green-600' : 'text-red-600'}`}>
          {percent >= 80 ? '✅ Passed' : '❌ Not Passed — Try again'}
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white border rounded shadow mt-6">
      <h3 className="text-lg font-bold text-blue-800 mb-2">Question {currentIndex + 1} of {questions.length}</h3>
      <p className="text-gray-800 mb-4">{currentQuestion.question}</p>
      <div className="space-y-2 mb-4">
        {currentQuestion.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(choice)}
            className={`w-full text-left px-4 py-2 rounded border ${
              selectedAnswers[currentIndex] === choice
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-gray-300 hover:bg-blue-100'
            }`}
          >
            {choice}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="text-sm px-3 py-1 border rounded disabled:opacity-40"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="bg-blue-600 text-white text-sm px-4 py-1 rounded hover:bg-blue-700"
        >
          {currentIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}
