// client/src/pages/LessonPage.jsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { modules } from '../data/modules';
import Quiz from '../components/Quiz';

export default function LessonPage() {
  const { slug } = useParams();
  const [showQuiz, setShowQuiz] = useState(false);

  const module = modules.find((m) => m.slug === slug);

  if (!module) {
    return <div className="p-6 text-red-600">Module not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{module.title}</h1>
      {!showQuiz ? (
        <>
          <p className="mb-6 text-gray-700 whitespace-pre-line">{module.content}</p>
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Quiz
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Quiz</h2>
          <Quiz questions={module.quiz} />
        </>
      )}
    </div>
  );
}
