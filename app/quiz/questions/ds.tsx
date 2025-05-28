import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is a distributed system?",
    options: [
      "A single computer system",
      "Multiple independent computers that appear as a single system",
      "A network of printers",
      "A database system"
    ],
    answer: 1,
    description: "A distributed system is a collection of independent computers that appears to its users as a single coherent system."
  },
  {
    id: 2,
    question: "What is the CAP theorem?",
    options: [
      "Consistency, Availability, Performance",
      "Consistency, Availability, Partition tolerance",
      "Consistency, Authentication, Performance",
      "Caching, Availability, Performance"
    ],
    answer: 1,
    description: "The CAP theorem states that a distributed system can only provide two out of three guarantees: Consistency, Availability, and Partition tolerance."
  }
  // Add more DS questions here
];

export default questions; 