'use client';

import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  description?: string;
}

interface QuizContentProps {
  questions: Question[];
  courseTitle: string;
}

export function QuizContent({ questions, courseTitle }: QuizContentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerClick = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowFeedback(true);
    setIsCorrect(optionIndex === questions[currentQuestion].answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
    setShowFeedback(false);
  };

  if (showScore) {
    return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Quiz Completed!</h2>
                  <p className="text-xl text-center">
                    Your score: {score} out of {questions.length}
                  </p>
                  <p className="text-center">
                    Percentage: {((score / questions.length) * 100).toFixed(2)}%
                  </p>
                  <div className="mt-8 text-center">
                    <button
                      onClick={handleRestartQuiz}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Restart Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">{courseTitle}</h2>
                <p className="text-lg font-medium mb-4">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
                <p className="mb-4">{currentQuestionData.question}</p>
                <div className="space-y-2">
                  {currentQuestionData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      className={`w-full p-3 text-left rounded-lg transition-colors ${
                        selectedAnswer === index
                          ? showFeedback
                            ? index === currentQuestionData.answer
                              ? 'bg-green-500 text-white'
                              : 'bg-red-500 text-white'
                            : 'bg-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      disabled={showFeedback && selectedAnswer !== index}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {showFeedback && (
                  <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    <p className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {isCorrect ? 'Correct!' : 'Incorrect!'}
                    </p>
                    {currentQuestionData.description && (
                      <p className="mt-2 text-gray-700">{currentQuestionData.description}</p>
                    )}
                    {!isCorrect && (
                      <p className="mt-2 text-gray-700">
                        The correct answer is: {currentQuestionData.options[currentQuestionData.answer]}
                      </p>
                    )}
                  </div>
                )}
                <div className="mt-8 text-center">
                  {showFeedback && (
                    <button
                      onClick={handleNextQuestion}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 