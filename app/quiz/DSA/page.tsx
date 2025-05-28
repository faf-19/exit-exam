"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
    {
      id: 1,
      question: "Algorithm Analysis is a theoretical study of computer-program performance and resource usage. Which of the following is/are more important than performance?",
      options: ["Correctness", "Maintainability", "Functionality", "All"],
      answer: 3,
    },
    {
      id: 2,
      question: "You are sorting the following array in ascending order using Insertion Sort. What will be the content of the array after the 3rd iteration?",
      options: [
        "1, 2, 6, 7",
        "2, 3, 6, 7",
        "1, 6, 2, 7",
        "3, 2, 1, 6"
      ],
      answer: 0,
    },
    {
      id: 3,
      question: "The worst-case running time of binary search is______.",
      options: ["O(n)", "O(log n)", "O(n log n)", "None of the above"],
      answer: 1,
    },
    {
      id: 4,
      question: "Suppose that an algorithm has time complexity T(n) = n². If executing an implementation of it takes t seconds for n inputs, how many inputs could we process on a new machine that is 64 times as fast?",
      options: ["8n", "n²", "2n", "n⁴"],
      answer: 0,
    },
    {
      id: 5,
      question: "How many binary trees are possible with three nodes?",
      options: ["8", "12", "16", "24"],
      answer: 1,
    },
    {
      id: 6,
      question: "Which of the following statements holds true about abstract data types?",
      options: [
        "It specifies the operations on specific data type",
        "It specifies the implementations of specific data type",
        "It specifies the properties of specific data type",
        "A and C"
      ],
      answer: 3,
    },
    {
      id: 7,
      question: "Type of data structure in which elements are arranged hierarchically not sequentially is called _____.",
      options: ["Linear data structure", "List data structure", "Non-linear data structure", "Array"],
      answer: 2,
    },
    {
      id: 8,
      question: "To be an algorithm one should fulfill the following except ____.",
      options: ["Must be finite", "Must be Effective", "Must be correct", "Must have one or more inputs"],
      answer: 2,
    },
    {
      id: 9,
      question: "Which of the following recursion cannot be solved using Master’s theorem?",
      options: [
        "T(n)=3T(n/2) + n²",
        "T(n)=log8 T(n/4) + n",
        "T(n)=2n T(n) + 3n²",
        "T(n)=T(n) + n³"
      ],
      answer: 2,
    },
    {
      id: 10,
      question: "What is the output if we put the following functions by increasing order of growth/complexity?",
      options: [
        "(log n) n, n log n, 2log n/2, n log n, n²",
        "n log n, n², n log n, 2log n/2, (log n) n",
        "n², 2log n/2, n log n, (log n) n, n log n",
        "none"
      ],
      answer: 1,
    },
    {
      id: 11,
      question: "The solution for the following recurrence is T(n)=16T(n/4) + n³.",
      options: ["O(n²)", "O(n³)", "O(n)", "O(n!)"],
      answer: 1,
    },
    {
      id: 12,
      question: "Which one of the following shows two main measures for the efficiency of an algorithm?",
      options: ["Processor and memory", "Complexity and capacity", "Time and space", "Data and space"],
      answer: 2,
    },
    {
      id: 13,
      question: "In a worst-case scenario, the complexity of linear search algorithm is?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
      answer: 0,
    },
    {
      id: 14,
      question: "Which of the following statements is not correct?",
      options: [
        "if f(n)=θ(g(n)) and g(n)=θ(h(n)), then f(n)=θ(h(n))",
        "f(n)=θ(g(n)) if and only if g(n)=θ(f(n))",
        "f(n)=O(g(n)) if and only if g(n)=Ω(f(n))",
        "if f(n)=O(g(n)) and g(n)=O(h(n)), then h(n) ≠ Ω(f(n))"
      ],
      answer: 3,
    },
    {
      id: 15,
      question: "If f(n)=Ω(g(n)) and g(n)=Ω(h(n)) then h(n)=Ω(f(n)).",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 16,
      question: "Suppose that an algorithm has time complexity T(n) = n², and that executing an implementation of it on a particular machine takes t seconds for n inputs. Now suppose that we are presented with another machine that is 100 times as fast. How many inputs could we process on the new machine in t seconds?",
      options: ["n²", "10n", "n¹⁰⁰", "none"],
      answer: 1,
    },
    {
      id: 17,
      question: "What will be the equivalent asymptotic notation for the following function T(n)=n(n²+n³)²?",
      options: ["O(n)", "O(n²)", "O(n⁶)", "O(n³)"],
      answer: 2,
    },
    {
      id: 18,
      question: "For which of the following functions can O(n²) be an equivalent asymptotic notation?",
      options: [
        "T(n)=(n⁴+n²+log n)¹/²",
        "T(n)=n/4(n²+n³)²",
        "T(n)=16T(n/4)+n³",
        "T(n)=32T(n)+n!"
      ],
      answer: 3,
    },
    {
      id: 19,
      question: "Given: Function “maximum( )” takes n² time to do its task and function “calculate( )” takes log n time. Find the running time function of the following code segment and what is the running time in Big-Oh? for (i=0; i<n; i++) { for (j=0; j<n; j++) { A[j] = maximum(n); } calculate(A, n); }",
      options: ["O(n² + log n)", "O(n⁴)", "O(n³ log n)", "O(n⁴ log n)"],
      answer: 0,
    },
    {
      id: 20,
      question: "Stack is used for?",
      options: ["CPU Resource Allocation", "Breadth First Traversal", "Recursion", "None of the above"],
      answer: 2,
    },
    {
      id: 21,
      question: "How many swaps are required to sort the given array using bubble sort - {2, 5, 1, 3, 4}?",
      options: ["4", "5", "6", "7"],
      answer: 2,
    },
    {
      id: 22,
      question: "If a queue is implemented using arrays, what would be the worst run time complexity of queue and dequeue operations?",
      options: ["O(n), O(n)", "O(n), O(1)", "O(1), O(1)", "O(1), O(n)"],
      answer: 0,
    },
    {
      id: 23,
      question: "Which data structure allows deleting data elements from front and inserting at rear?",
      options: ["Stacks", "Queues", "Deques", "Binary search tree"],
      answer: 1,
    },
    {
      id: 24,
      question: "Which of the following data structures is a non-linear type?",
      options: ["Strings", "Lists", "Stacks", "None of the above"],
      answer: 3,
    },
    {
      id: 25,
      question: "To represent hierarchical relationship between elements, which structure is suitable?",
      options: ["Dequeue", "Tree", "Priority", "All of the above"],
      answer: 1,
    },
    {
      id: 26,
      question: "Which of the following sorting algorithms is of divide-and-conquer type?",
      options: ["Bubble sort", "Insertion sort", "Quick sort", "All of the above"],
      answer: 2,
    }
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