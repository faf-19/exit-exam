import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is machine learning?",
    options: [
      "Computer hardware",
      "The ability of machines to learn from data",
      "A programming language",
      "A type of computer"
    ],
    answer: 1,
    description: "Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed."
  },
  {
    id: 2,
    question: "What is deep learning?",
    options: [
      "Basic programming",
      "Surface level learning",
      "Neural network based machine learning",
      "Database management"
    ],
    answer: 2,
    description: "Deep learning is a subset of machine learning that uses artificial neural networks with multiple layers to progressively extract higher-level features from raw input."
  }
  // Add more AI questions here
];

export default questions; 