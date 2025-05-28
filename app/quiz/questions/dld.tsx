import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is a flip-flop?",
    options: [
      "A combinational circuit",
      "A sequential circuit that stores one bit",
      "A type of gate",
      "An oscillator"
    ],
    answer: 1,
    description: "A flip-flop is a sequential circuit that can store one bit of information. It's a basic memory element in digital circuits."
  },
  {
    id: 2,
    question: "What is the boolean expression for NAND gate?",
    options: [
      "A + B",
      "A · B",
      "(A · B)'",
      "A' + B'"
    ],
    answer: 2,
    description: "NAND gate is the complement of AND gate, so its boolean expression is (A · B)' where ' denotes complement."
  }
  // Add more DLD questions here
];

export default questions; 