import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is a database schema?",
    options: [
      "Data structure",
      "Database design",
      "Query language",
      "Data type"
    ],
    answer: 1,
    description: "A database schema is the structure that represents the logical view of the entire database, defining how the data is organized and how the relations among them are associated."
  },
  {
    id: 2,
    question: "What is normalization in DBMS?",
    options: [
      "Data compression",
      "Data organization to minimize redundancy",
      "Data encryption",
      "Data deletion"
    ],
    answer: 1,
    description: "Normalization is the process of organizing data to minimize redundancy and dependency by dividing larger tables into smaller ones that are linked by relationships."
  },
  {
    id: 3,
    question: "What is a primary key?",
    options: [
      "A key that can contain null values",
      "A unique identifier for a record in a table",
      "A foreign key reference",
      "A composite key"
    ],
    answer: 1,
    description: "A primary key is a column or set of columns in a table that uniquely identifies each row in that table."
  },
  {
    id: 4,
    question: "What is a foreign key?",
    options: [
      "A primary key in a table",
      "A key that can contain duplicates",
      "A reference to a primary key in another table",
      "A unique key"
    ],
    answer: 2,
    description: "A foreign key is a column or set of columns in a table that creates a relationship with another table by referencing the primary key of that table."
  },
  {
    id: 5,
    question: "What is an SQL JOIN?",
    options: [
      "A way to delete records",
      "A way to combine rows from two or more tables",
      "A way to update records",
      "A way to create tables"
    ],
    answer: 1,
    description: "SQL JOIN is used to combine rows from two or more tables based on a related column between them."
  },
  {
    id: 6,
    question: "What is ACID in database transactions?",
    options: [
      "A type of database",
      "A type of key",
      "Properties ensuring reliable processing of transactions",
      "A query language"
    ],
    answer: 2,
    description: "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties that ensure reliable processing of database transactions."
  },
  {
    id: 7,
    question: "What is a view in DBMS?",
    options: [
      "A physical table",
      "A virtual table based on result of an SQL statement",
      "A primary key",
      "A foreign key"
    ],
    answer: 1,
    description: "A view is a virtual table based on the result set of an SQL statement. It contains rows and columns, just like a real table."
  },
  {
    id: 8,
    question: "What is an index in DBMS?",
    options: [
      "A table of contents",
      "A primary key",
      "A data structure improving retrieval speed",
      "A foreign key"
    ],
    answer: 2,
    description: "An index is a data structure that improves the speed of data retrieval operations on a database table."
  },
  {
    id: 9,
    question: "What is a trigger in DBMS?",
    options: [
      "A type of key",
      "A stored procedure",
      "A special type of view",
      "A program executing automatically on events"
    ],
    answer: 3,
    description: "A trigger is a special type of stored procedure that automatically executes when certain events occur in the database."
  },
  {
    id: 10,
    question: "What is a stored procedure?",
    options: [
      "A saved SQL query",
      "A type of index",
      "A precompiled collection of SQL statements",
      "A type of key"
    ],
    answer: 2,
    description: "A stored procedure is a prepared SQL code that can be saved and reused multiple times."
  },
  {
    id: 11,
    question: "What is data integrity?",
    options: [
      "Data backup",
      "Data accuracy and consistency",
      "Data deletion",
      "Data compression"
    ],
    answer: 1,
    description: "Data integrity refers to the accuracy, consistency, and reliability of data throughout its lifecycle."
  },
  {
    id: 12,
    question: "What is a transaction in DBMS?",
    options: [
      "A table join",
      "A view",
      "A logical unit of work in database",
      "An index"
    ],
    answer: 2,
    description: "A transaction is a logical unit of work that contains one or more SQL statements, which must be executed as a single unit."
  },
  {
    id: 13,
    question: "What is denormalization?",
    options: [
      "Normal form conversion",
      "Adding redundancy for performance",
      "Removing redundancy",
      "Data integrity check"
    ],
    answer: 1,
    description: "Denormalization is the process of adding redundant data to a normalized database to improve read performance."
  },
  {
    id: 14,
    question: "What is a composite key?",
    options: [
      "A single column key",
      "A foreign key",
      "Multiple columns forming a unique identifier",
      "A primary key"
    ],
    answer: 2,
    description: "A composite key is a combination of two or more columns that uniquely identify a row in a table."
  },
  {
    id: 15,
    question: "What is referential integrity?",
    options: [
      "Data backup",
      "Maintaining relationships between tables",
      "Data compression",
      "Index creation"
    ],
    answer: 1,
    description: "Referential integrity ensures that relationships between tables remain consistent, meaning foreign key values always reference existing primary keys."
  },
  {
    id: 16,
    question: "What is a candidate key?",
    options: [
      "A foreign key",
      "A column that could be primary key",
      "A composite key",
      "An index"
    ],
    answer: 1,
    description: "A candidate key is a column or set of columns that could potentially serve as the primary key for a table."
  },
  {
    id: 17,
    question: "What is a deadlock in DBMS?",
    options: [
      "System crash",
      "Data corruption",
      "Circular wait between transactions",
      "Query timeout"
    ],
    answer: 2,
    description: "A deadlock occurs when two or more transactions are waiting for each other to release locks, resulting in a circular wait condition."
  },
  {
    id: 18,
    question: "What is a checkpoint in DBMS?",
    options: [
      "A backup point",
      "A synchronization point for recovery",
      "A savepoint",
      "A rollback point"
    ],
    answer: 1,
    description: "A checkpoint is a point in time when the DBMS writes all its dirty buffers to disk, helping in recovery after system failure."
  },
  {
    id: 19,
    question: "What is a cursor in DBMS?",
    options: [
      "A pointer to screen",
      "A database object to traverse result set",
      "A type of key",
      "A type of join"
    ],
    answer: 1,
    description: "A cursor is a database object that enables traversal over the rows of a result set from a query."
  },
  {
    id: 20,
    question: "What is BCNF (Boyce-Codd Normal Form)?",
    options: [
      "A type of key",
      "A type of constraint",
      "A higher version of 3NF",
      "A type of index"
    ],
    answer: 2,
    description: "BCNF is a higher version of the Third Normal Form (3NF) that deals with certain types of anomalies not handled by 3NF."
  }
];

export default questions; 