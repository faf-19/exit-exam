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
    question: "What is the implicit return type of constructor?",
    options: ["Void", "Public", "Private", "Protected"],
    answer: 0,
    description: "A constructor in Java has an implicit return type of void. It doesn't need to be explicitly specified."
  },
  {
    id: 2,
    question: "When is the object created with a new keyword?",
    options: ["Compile time", "Run time", "None", "None"],
    answer: 1,
    description: "Objects are created at runtime when using the new keyword."
  },
  // ... Add all 100 OOP questions here
];

export default questions; 