import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { modules } from '../data/modules';

export default function LessonPage() {
  const { slug } = useParams();
  const module = modules.find((m) => m.slug === slug);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load previous quiz results from localStorage
    const stored = localStorage.getItem(`quiz_${slug}`);
    if (stored) {
      setAnswers(JSON.parse(stored));
      setSubmitted(true);
    }
  }, [slug]);

  const handleChange = (qIndex, choice) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: choice }));
  };

  const handleSubmit = () => {
    localStorage.setItem(`quiz_${slug}`, JSON.stringify(answers));
    setSubmitted(true);
  };

  if (!module) return <div className="p-6 text-red-600">Module not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{module.title}</h1>
      <p className="mb-4 text-gray-700">{module.content}</p>

      {module.quiz && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Quiz</h2>
          {module.quiz.map((q, idx) => (
            <div key={idx} className="mb-6">
              <p className="font-medium mb-2">{q.question}</p>
              <div className="space-y-1">
                {q.options.map((opt) => {
                  const isSelected = answers[idx] === opt;
                  const isCorrect = submitted && opt === q.answer;
                  const isWrong = submitted && isSelected && opt !== q.answer;

                  return (
                    <label
                      key={opt}
                      className={`block px-4 py-2 border rounded-md cursor-pointer transition 
                        ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} 
                        ${isCorrect ? 'bg-green-100 border-green-500' : ''} 
                        ${isWrong ? 'bg-red-100 border-red-500' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`q-${idx}`}
                        value={opt}
                        checked={isSelected}
                        onChange={() => handleChange(idx, opt)}
                        disabled={submitted}
                        className="mr-2"
                      />
                      {opt}
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <p className={`mt-1 text-sm ${answers[idx] === q.answer ? 'text-green-700' : 'text-red-600'}`}>
                  {answers[idx] === q.answer ? 'Correct' : `Incorrect. Correct answer: ${q.answer}`}
                </p>
              )}
            </div>
          ))}

          {!submitted && (
            <button
              onClick={handleSubmit}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Quiz
            </button>
          )}
        </div>
      )}
    </div>
  );
}
