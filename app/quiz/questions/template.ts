interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  description?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Sample question 1?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 0,
    description: "Explanation for the correct answer"
  },
  // Add more questions here
];

export default questions; 