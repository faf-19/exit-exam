import { QuizContent } from "../[course]/quiz-content";

const questions = [
  {
      id: 1,
      question: "Algorithm Analysis is a theoretical study of computer-program performance and resource usage. Which of the following is/are more important than performance?",
      options: ["Correctness", "Maintainability", "Functionality", "All"],
      answer: 3,
      description: "While performance is important, correctness (the algorithm produces the right result), maintainability (how easy it is to modify the code), and functionality (what the algorithm does) are often considered more critical in software development.",
  },
  {
      id: 2,
      question: "You are sorting the following array in ascending order using Insertion Sort. What will be the content of the array after the 3rd iteration? Array: [7, 2, 6, 3, 1]",
      options: [
          "[2, 6, 7, 3, 1]",
          "[2, 3, 6, 7, 1]",
          "[6, 7, 2, 3, 1]",
          "[3, 2, 6, 7, 1]"
      ],
      answer: 0,
      description: "Insertion sort works by iteratively inserting each element into its correct position in the sorted subarray. \n1st iteration: [2, 7, 6, 3, 1]\n2nd iteration: [2, 6, 7, 3, 1]\n3rd iteration: [2, 6, 7, 3, 1]",
  },
  {
      id: 3,
      question: "The worst-case running time of binary search is______.",
      options: ["O(n)", "O(log n)", "O(n log n)", "None of the above"],
      answer: 1,
      description: "In the worst case, binary search repeatedly halves the search interval until the target element is found or the interval is empty, resulting in a time complexity of O(log n).",
  },
  {
      id: 4,
      question: "Suppose that an algorithm has time complexity T(n) = n². If executing an implementation of it takes t seconds for n inputs, how many inputs could we process on a new machine that is 64 times as fast in t seconds?",
      options: ["8n", "n²", "2n", "n⁴"],
      answer: 0,
      description: "If the new machine is 64 times faster, it can perform 64 times the work in the same time t. Let n' be the number of inputs processed by the new machine. Then (n')² = 64 * n², so n' = sqrt(64 * n²) = 8n.",
  },
  {
      id: 5,
      question: "How many binary trees are possible with three nodes?",
      options: ["8", "12", "16", "24"],
      answer: 0,
      description: "final Answer: (A)"
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
      description: "An Abstract Data Type (ADT) defines the logical properties of a data type (what it represents) and the operations that can be performed on it, without specifying how these operations are implemented.",
  },
  {
      id: 7,
      question: "Type of data structure in which elements are arranged hierarchically not sequentially is called _____.",
      options: ["Linear data structure", "List data structure", "Non-linear data structure", "Array"],
      answer: 2,
      description: "Non-linear data structures, such as trees and graphs, arrange elements in a hierarchical or network-like manner, unlike linear data structures where elements follow a sequential order.",
  },
  {
      id: 8,
      question: "To be an algorithm one should fulfill the following except ____.",
      options: ["Must be finite", "Must be Effective", "Must be correct", "Must have one or more inputs"],
      answer: 2,
      description: "While an algorithm should ideally produce the correct output, the formal definition emphasizes finiteness (it must terminate), effectiveness (each step must be feasible), and having zero or more inputs and one or more outputs.",
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
      description: "Master's theorem applies to recurrences of the form T(n) = aT(n/b) + f(n). Option C, T(n)=2n T(n) + 3n², does not fit this form because the recursive term has a coefficient that depends on n (2n).",
  },
  {
      id: 10,
      question: "What is the output if we put the following functions by increasing order of growth/complexity? (log n) n, n log n, 2log n/2, n log n, n²",
      options: [
          "(log n) n, n log n, 2log n/2, n log n, n²",
          "2log n/2, (log n) n, n log n, n log n, n²",
          "n², 2log n/2, n log n, (log n) n, n log n",
          "none"
      ],
      answer: 1,
      description: "final Answer: (B)"
  },
  {
      id: 11,
      question: "The solution for the following recurrence is T(n)=16T(n/4) + n³.",
      options: ["O(n²)", "O(n³)", "O(n⁴)", "O(n!)"],
      answer: 1,
      description: "We can use the Master Theorem. Final Answer: (B)"
  },
  {
      id: 12,
      question: "Which one of the following shows two main measures for the efficiency of an algorithm?",
      options: ["Processor and memory", "Complexity and capacity", "Time and space", "Data and space"],
      answer: 2,
      description: "The efficiency of an algorithm is primarily measured by its time complexity (how fast it runs) and space complexity (how much memory it uses).",
  },
  {
      id: 13,
      question: "In a worst-case scenario, the complexity of linear search algorithm is?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
      answer: 0,
      description: "In the worst case, linear search has to examine every element in the list to find the target or determine it's not present, resulting in a time complexity of O(n).",
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
      description: "final Answer: (D)"
  },
  {
      id: 15,
      question: "If f(n)=Ω(g(n)) and g(n)=Ω(h(n)) then h(n)=Ω(f(n)).",
      options: ["True", "False"],
      answer: 0,
      description: "final Answer: (A)"
  },
  {
      id: 16,
      question: "Suppose that an algorithm has time complexity T(n) = n², and that executing an implementation of it on a particular machine takes t seconds for n inputs. Now suppose that we are presented with another machine that is 100 times as fast. How many inputs could we process on the new machine in t seconds?",
      options: ["n²", "10n", "n¹⁰⁰", "none"],
      answer: 1,
      description: "final Answer: (B)"
  },
  {
      id: 17,
      question: "What will be the equivalent asymptotic notation for the following function T(n)=n(n²+n³)²?",
      options: ["O(n)", "O(n²)", "O(n⁶)", "O(n³)"],
      answer: 2,
      description: "final Answer: (C)"
  },
  {
      id: 18,
      question: "Which of the following is not a linear data structure?",
      options: ["Array", "Linked List", "Tree", "Graph"],
      answer: 2,
      description: "final Answer: (B)"
  },
  {
      id: 19,
      question: "Which of the following is not a linear data structure?",
      options: ["Array", "Linked List", "Tree", "Graph"],
      answer: 2,
      description: "final Answer: (B)"
  },
  {
      id: 20,
      question: "Which of the following is not a linear data structure?", 
      options: ["Array", "Linked List", "Tree", "Graph"],
      answer: 2,
      description: "final Answer: (B)"
  },
  
]

export default function OOPQuizPage() {
  return <QuizContent questions={questions} courseTitle="Data Structure and Algorithm" />;
} 