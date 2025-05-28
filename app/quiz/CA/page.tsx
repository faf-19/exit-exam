import { QuizContent } from "../[course]/quiz-content";

const questions = [
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
  },
  {
    id: 3,
    question: "What is RISC?",
    options: [
      "Complex instruction set",
      "Reduced instruction set computing",
      "Regular instruction set computing",
      "Random instruction set computing"
    ],
    answer: 1,
    description: "RISC (Reduced Instruction Set Computing) is a CPU design philosophy that advocates for simpler and fewer instructions."
  },
  {
    id: 4,
    question: "What is the purpose of the ALU?",
    options: [
      "Memory management",
      "Input/Output operations",
      "Arithmetic and logical operations",
      "Instruction fetching"
    ],
    answer: 2,
    description: "The Arithmetic Logic Unit (ALU) performs arithmetic and logical operations in the CPU."
  },
  {
    id: 5,
    question: "What is virtual memory?",
    options: [
      "Physical RAM",
      "Cache memory",
      "Using disk space as RAM extension",
      "ROM memory"
    ],
    answer: 2,
    description: "Virtual memory is a memory management technique that uses disk space to extend the available RAM."
  },
  {
    id: 6,
    question: "What is a bus in computer architecture?",
    options: [
      "A CPU component",
      "A communication pathway",
      "A memory unit",
      "An instruction set"
    ],
    answer: 1,
    description: "A bus is a communication pathway that transfers data between computer components."
  },
  {
    id: 7,
    question: "What is the function of the control unit?",
    options: [
      "Perform calculations",
      "Store data",
      "Coordinate CPU operations",
      "Handle I/O operations"
    ],
    answer: 2,
    description: "The control unit coordinates and controls the operations of the CPU and other computer components."
  },
  {
    id: 8,
    question: "What is branch prediction?",
    options: [
      "Memory allocation",
      "Predicting program branches",
      "CPU scheduling",
      "Cache management"
    ],
    answer: 1,
    description: "Branch prediction is a technique used to guess the outcome of conditional branches to improve pipeline efficiency."
  },
  {
    id: 9,
    question: "What is the purpose of registers?",
    options: [
      "Long-term storage",
      "External memory",
      "Fast temporary storage",
      "Permanent storage"
    ],
    answer: 2,
    description: "Registers are small, fast storage locations within the CPU used for temporary data storage during processing."
  },
  {
    id: 10,
    question: "What is instruction pipelining?",
    options: [
      "Sequential execution",
      "Parallel instruction processing",
      "Memory management",
      "I/O handling"
    ],
    answer: 1,
    description: "Instruction pipelining is a technique where multiple instructions are processed simultaneously in different stages."
  }
];

export default function CAQuizPage() {
  return <QuizContent questions={questions} courseTitle="Computer Architecture" />;
} 