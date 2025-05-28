import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is a finite automaton?",
    options: [
      "An infinite state machine",
      "A mathematical model with finite states",
      "A programming language",
      "A type of computer"
    ],
    answer: 1,
    description: "A finite automaton is a mathematical model of computation with a finite number of states and transitions between those states."
  },
  {
    id: 2,
    question: "What is a regular expression?",
    options: [
      "A programming language",
      "A type of variable",
      "A pattern matching notation",
      "A computer program"
    ],
    answer: 2,
    description: "A regular expression is a sequence of characters that defines a search pattern, mainly for use in pattern matching with strings."
  }
  // Add more FSA questions here
];

export default questions; 