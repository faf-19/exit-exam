import { notFound } from "next/navigation";
import { QuizContent } from "./quiz-content";

type CourseId = 'oop' | 'dsa' | 'dld' | 'dccn' | 'os' | 'dbms' | 'ds' | 'cd' | 'mi' | 'ca' | 'fp' | 'cs' | 'fsa' | 'ai';

const courseTitles: Record<CourseId, string> = {
  oop: "Object Oriented Programming",
  dsa: "Data Structures & Algorithms",
  dld: "Digital Logic Design",
  dccn: "Data Communication & Computer Networks",
  os: "Operating Systems",
  dbms: "Database Management Systems",
  ds: "Distributed Systems",
  cd: "Compiler Design",
  mi: "Microcontroller and Interfacing",
  ca: "Computer Architecture",
  fp: "Fundamentals of Programming",
  cs: "Computer Security",
  fsa: "Formal System and Automata",
  ai: "Introduction to Artificial Intelligence"
};

// Example questions for OOP (you'll replace this with actual questions in each course's page.tsx)
const questions = [
  {
    id: 1,
    question: "What is the implicit return type of constructor?",
    options: ["Void", "Public", "Private", "Protected"],
    answer: 0,
    description: "A constructor in Java has an implicit return type of void. It doesn't need to be explicitly specified."
  }
];

export default function QuizPage({
  params,
}: {
  params: { course: string };
}) {
  // Get the course from params and convert to uppercase
  const courseUpper = params.course.toUpperCase();
  
  // Get the course title, with type checking
  const courseKey = params.course.toLowerCase() as CourseId;
  const courseTitle = courseTitles[courseKey];

  // If the course doesn't exist, show 404
  if (!courseTitle) {
    notFound();
  }

  // Import and return the course-specific component
  const QuizComponent = require(`../${courseUpper}/page`).default;
  return <QuizComponent />;
} 