import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is a variable in programming?",
    options: [
      "A fixed value",
      "A named storage location",
      "A mathematical equation",
      "A programming language"
    ],
    answer: 1,
    description: "A variable is a named storage location in computer memory that can hold different values during program execution."
  },
  {
    id: 2,
    question: "What is a loop in programming?",
    options: [
      "A type of variable",
      "A one-time execution",
      "A repetitive execution of code",
      "A programming error"
    ],
    answer: 2,
    description: "A loop is a programming construct that allows a set of instructions to be repeated until a specific condition is met."
  }
  // Add more FP questions here
];

export default questions; 