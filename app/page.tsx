import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const courses = [
  { id: "oop", name: "Object Oriented Programming", description: "Learn about classes, objects, inheritance, and more." },
  { id: "dsa", name: "Data Structures & Algorithms", description: "Master fundamental data structures and algorithms." },
  { id: "dbms", name: "Database Management Systems", description: "Learn about database design and SQL." },
  { id: "os", name: "Operating Systems", description: "Understand how operating systems work." },
  { id: "dccn", name: "data communication and Computer Networks", description: "Learn about network protocols and architecture." },
  { id: "fse", name: "Fundamentals of Software Engineering", description: "Study software development methodologies." },
  { id: "dld", name: "Digital Logic Design", description: "Learn about logic gates and digital circuits." },
  { id: "ai", name: "Introduction to Artificial Intelligence", description: "Explore AI concepts and applications." },
  { id: "micro", name: "Microcontroller and Interfacing", description: "Learn about microcontroller and implementations." },
  { id: "security", name: "Computer Security", description: "Study security principles and practices." },
  { id: "distributed", name: "Destributed system", description: "Learn about destributed system and deployment." },
  { id: "comparch", name: "Computer architecture", description: "Learn about computer architecture" },
  { id: "programing", name: "fundamentals of Programming", description: "Master Python programming language." },
  { id: "Compiler", name: "Compiler", description: "Learn compiler programming fundamentals." },
  { id: "fsa", name: "Fundamental of software engineering", description: "Learn about basics of software engineering" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/quiz/${course.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
