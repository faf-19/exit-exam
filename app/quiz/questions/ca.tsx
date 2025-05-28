import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is pipelining in computer architecture?",
    options: [
      "A memory management technique",
      "A technique to execute multiple instructions simultaneously",
      "A type of cache",
      "A type of bus"
    ],
    answer: 1,
    description: "Pipelining is a technique where multiple instructions are overlapped in execution, allowing for parallel processing and improved throughput."
  },
  {
    id: 2,
    question: "What is cache memory?",
    options: [
      "Main memory",
      "Virtual memory",
      "Fast memory between CPU and main memory",
      "Secondary storage"
    ],
    answer: 2,
    description: "Cache memory is a small, fast memory that acts as a buffer between RAM and the CPU, storing frequently accessed data to improve processing speed."
  }
  // Add more CA questions here
];

export default questions; 