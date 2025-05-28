"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  {
    id: 1,
    question: "What is the implicit return type of constructor?",
    options: ["Void", "Public"],
    answer: 0,
  },
  {
    id: 2,
    question: "When is the object created with a new keyword?",
    options: ["Compile time", "Run time"],
    answer: 1,
  },
  {
    id: 3,
    question: "Which of these is not a feature of OOP?",
    options: ["Data encapsulation", "Data abstraction", "Inheritance", "None of the above"],
    answer: 3,
  },
  {
    id: 4,
    question: "Which features of OOP are extensively used in implementing inheritance?",
    options: ["Dynamic binding", "Abstraction", "Operator overloading", "Polymorphism"],
    answer: 0,
  },
  {
    id: 5,
    question: "Member variables are initialized to zero when the first object of its class is created?",
    options: ["Static", "Local", "Global", "External"],
    answer: 0,
  },
  {
    id: 6,
    question: "A static member function can be called using the ____ name.",
    options: ["Class name", "Object name", "Constructors", "Main method"],
    answer: 0,
  },
  {
    id: 7,
    question: "When an object is created, initialization needs to be done which is automatically done by the ____ function?",
    options: ["Constructor", "Destructor", "Main method", "Member"],
    answer: 0,
  },
  {
    id: 8,
    question: "Which of these is a super class of all exceptional type classes?",
    options: ["String", "RuntimeExceptions", "Throwable", "Cachable"],
    answer: 2,
  },
  {
    id: 9,
    question: "Which of these classes is related to all the exceptions that can be caught by using catch?",
    options: ["Error", "Exception", "RuntimeException", "All of the mentioned"],
    answer: 1,
  },
  {
    id: 10,
    question: "Which of these keywords is used to generate an exception explicitly?",
    options: ["try", "finally", "throw", "catch"],
    answer: 2,
  },
];

export default function OOPQuiz() {
  const [selected, setSelected] = useState<{ [key: number]: number | null }>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleSelect = (qid: number, idx: number) => {
    setSelected({ ...selected, [qid]: idx });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((q) => {
      if (selected[q.id] === q.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowAnswers(true);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Object Oriented Programming Quiz</h1>
      <div className="space-y-6">
        {questions.map((q) => (
          <Card key={q.id} className="border shadow-md">
            <CardContent className="p-4">
              <p className="font-semibold text-lg mb-2">{q.id}. {q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, idx) => (
                  <Button
                    key={idx}
                    variant={
                      showAnswers
                        ? idx === q.answer
                          ? "default"
                          : idx === selected[q.id]
                          ? "destructive"
                          : "outline"
                        : selected[q.id] === idx
                        ? "default"
                        : "outline"
                    }
                    onClick={() => handleSelect(q.id, idx)}
                    className="w-full justify-start"
                    disabled={showAnswers}
                  >
                    {String.fromCharCode(65 + idx)}. {opt}
                  </Button>
                ))}
              </div>
              {showAnswers && (
                <p className="mt-2 text-sm">
                  {selected[q.id] === q.answer ? (
                    <span className="text-green-600 font-medium">Correct!</span>
                  ) : (
                    <span className="text-red-600 font-medium">
                      Incorrect. The correct answer is {String.fromCharCode(65 + q.answer)}.
                    </span>
                  )}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
        {!showAnswers ? (
          <Button onClick={calculateScore} className="w-full">
            Submit Answers
          </Button>
        ) : (
          <Card className="border shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-2">Quiz Results</h2>
              <p className="text-lg">
                You got <span className="font-bold text-primary">{score}</span> out of{" "}
                <span className="font-bold">{questions.length}</span> questions correct! (
                {Math.round((score! / questions.length) * 100)}%)
              </p>
              <Button 
                onClick={() => {
                  setSelected({});
                  setShowAnswers(false);
                  setScore(null);
                }}
                className="mt-4 w-full"
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 