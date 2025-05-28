import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is lexical analysis?",
    options: [
      "Code optimization",
      "Converting tokens to parse tree",
      "Converting source code to tokens",
      "Code generation"
    ],
    answer: 2,
    description: "Lexical analysis is the first phase of a compiler which converts the input source code into a sequence of tokens."
  },
  {
    id: 2,
    question: "What is a symbol table?",
    options: [
      "A table of operators",
      "A data structure containing identifiers and their attributes",
      "A table of keywords",
      "A parsing table"
    ],
    answer: 1,
    description: "A symbol table is a data structure used by a compiler to store information about variable names, function names, and other identifiers in the source program."
  }
  // Add more CD questions here
];

export default questions; 