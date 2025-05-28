"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const courses = [
  { id: "oop", name: "Object Oriented Programming" },
  { id: "dsa", name: "Data Structures & Algorithms" },
  { id: "dld", name: "Digital Logic Design" },
  { id: "dccn", name: "Data Communication & Computer Networks" },
  { id: "os", name: "Operating Systems" },
  { id: "dbms", name: "Database Management Systems" },
  { id: "ds", name: "Distributed Systems" },
  { id: "cd", name: "Compiler Design" },
  { id: "mi", name: "Microcontroller and Interfacing" },
  { id: "ca", name: "Computer Architecture" },
  { id: "fp", name: "Fundamentals of Programming" },
  { id: "cs", name: "Computer Security" },
  { id: "fsa", name: "Formal System and Automata" },
  { id: "ai", name: "Introduction to Artificial Intelligence" }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="border-b sticky top-0 bg-background z-50">
      <nav className="container mx-auto flex items-center space-x-4 lg:space-x-6 overflow-x-auto py-4">
        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
            pathname === "/" ? "text-primary font-bold" : "text-muted-foreground"
          )}
        >
          Home
        </Link>
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/quiz/${course.id}`}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary whitespace-nowrap",
              pathname === `/quiz/${course.id}`
                ? "text-primary font-bold"
                : "text-muted-foreground"
            )}
          >
            {course.name}
          </Link>
        ))}
      </nav>
    </div>
  );
} 