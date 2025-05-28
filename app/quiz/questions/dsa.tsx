import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    answer: 1,
    description: "Binary search has a time complexity of O(log n) as it divides the search space in half with each iteration."
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    answer: 1,
    description: "Stack follows LIFO principle where the last element inserted is the first one to be removed."
  }
  // Add more DSA questions here
];

export default questions; 