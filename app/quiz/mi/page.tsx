import { QuizContent } from "../[course]/quiz-content"; 

const questions = [
  {
    id: 1,
    question: "What is a deadlock in operating systems?",
    options: [
      "When a process is waiting for resources",
      "When two or more processes are waiting for each other's resources",
      "When a process is terminated",
      "When system crashes"
    ],
    answer: 1,
    description: "A deadlock occurs when two or more processes are waiting for each other's resources, creating a circular wait condition."
  },
  {
    id: 2,
    question: "Which scheduling algorithm has the shortest completion time?",
    options: [
      "First Come First Serve",
      "Round Robin",
      "Shortest Job First",
      "Priority Scheduling"
    ],
    answer: 2,
    description: "Shortest Job First (SJF) scheduling minimizes the average waiting time by executing the shortest jobs first."
  }
  // Add more OS questions here
];

export default function OOPQuizPage() {
  return <QuizContent questions={questions} courseTitle=" incorrect Microinterfacing" />;
} 