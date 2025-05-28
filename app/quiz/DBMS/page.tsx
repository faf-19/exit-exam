import { QuizContent } from "../[course]/quiz-content";

const questions = [
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
  },
    {
      "id": 21,
      "question": "Which of the following database model is record based logical model?",
      "options": ["Object Oriented Model", "Normalization", "Network Model", "E-R Model"],
      "answer": 2,
      "description": "The Network Model is a record-based logical model, where data is organized as records in a graph structure."
    },
    {
      "id": 22,
      "question": "A derived attribute should represent in the E-R Diagram using __________.",
      "options": ["Ellipse", "Dashed ellipse", "Rectangle", "Triangle"],
      "answer": 1,
      "description": "In an E-R Diagram, a derived attribute, which can be calculated from other attributes, is represented using a dashed ellipse."
    },
    {
      "id": 23,
      "question": "One of the following is true about the conceptual model.",
      "options": [
        "It is dependent on hardware",
        "It is dependent on software",
        "It is dependent on both hardware and software",
        "It is independent from hardware and software"
      ],
      "answer": 3,
      "description": "The conceptual model focuses on the high-level description of the data and their relationships, making it independent of specific hardware or software."
    },
    {
      "id": 24,
      "question": "The computer language that can specify the data to be retrieved without stipulating exactly the procedure is called ____________.",
      "options": ["Procedural DDL", "Non-procedural DML", "Procedural DML", "Non-procedural DDL"],
      "answer": 1,
      "description": "Non-procedural DML (Data Manipulation Language), like SQL's SELECT statement, allows users to specify what data to retrieve without detailing how to retrieve it."
    },
    {
      "id": 25,
      "question": "What is the main purpose of DML in database design?",
      "options": [
        "To describe the logical structure of the database.",
        "To add new structures into the database system.",
        "To manipulate and to process the database.",
        "To define the physical structure of the database system."
      ],
      "answer": 2,
      "description": "The primary purpose of DML is to enable users to access and manipulate data within the database (e.g., insert, update, delete, retrieve)."
    },
    {
      "id": 26,
      "question": "Which one of the following describes more the conceptual design of a database system?",
      "options": [
        "It is a documentation technique.",
        "It needs data volume and processing frequencies to determine the size of the database.",
        "It is designing the relational model.",
        "It involves modeling of the database independent of the DBMS."
      ],
      "answer": 3,
      "description": "Conceptual design focuses on modeling the entities, attributes, and relationships in the database from a business perspective, independent of any specific DBMS."
    },
    {
      "id": 27,
      "question": "An entity set that does not have sufficient attributes to form a primary key is called _______.",
      "options": ["Strong entity set", "Weak entity set", "Simple entity set", "Primary entity set"],
      "answer": 1,
      "description": "A weak entity set cannot be uniquely identified by its own attributes and depends on another (owner) entity set for its identification; it typically has a partial key."
    },
    {
      "id": 28,
      "question": "The syntax of a user query is verified by __________. A. Query optimizer C. Parser B. Query Manager D. Query processor",
      "options": ["Query optimizer", "Parser", "Query Manager", "Query processor"],
      "answer": 1,
      "description": "The parser checks the syntax of the SQL query to ensure it follows the grammar rules of the language."
    },
    {
      "id": 29,
      "question": "Which of the following command is used to completely delete a database?",
      "options": [
        "DELETE DATABASE_NAME;",
        "DROP DATABASE_NAME;",
        "DROP DATABASE DATABASE_NAME;",
        "DELETE DATABASE DATABASE_NAME;"
      ],
      "answer": 1,
      "description": "The `DROP DATABASE` command is used to remove an existing database and all its tables from the database system."
    },
    {
      "id": 30,
      "question": "Which command is the most commonly used DML command.",
      "options": ["Delete", "Update", "Select", "Alter"],
      "answer": 2,
      "description": "The `SELECT` command is the most frequently used DML command as it is used to retrieve data from one or more tables."
    },
    {
      "id": 31,
      "question": "____________occurs when two transactions, T1 and T2, are executed concurrently and the transaction (T1) is rolled back after the second transaction (T2) has already accessed the uncommitted data which leads to violation of the isolation property of transactions.",
      "options": [
        "Transaction failure",
        "Uncommitted data",
        "Inconsistent retrieval",
        "The lost update problem"
      ],
      "answer": 1,
      "description": "This scenario describes the 'uncommitted data' or 'dirty read' problem, where a transaction reads data that may later be rolled back."
    },
    {
      "id": 32,
      "question": "________________occurs when two transactions that access the same database items have their operations interleaved in a way that makes the value of some database item incorrect.",
      "options": [
        "The lost update problem",
        "The incorrect summary problem",
        "The uncommitted data",
        "Inconsistent retrieval"
      ],
      "answer": 0,
      "description": "The 'lost update problem' occurs when two transactions access and update the same data item, but the effects of one update are lost because of the other."
    },
    {
      "id": 33,
      "question": "What is the most restrictive lock granularity?",
      "options": ["Page", "Database", "Row", "Table"],
      "answer": 1,
      "description": "Database-level locking is the most restrictive as it locks the entire database, limiting concurrency significantly."
    },
    {
      "id": 34,
      "question": "A transaction is a _______unit of work that must be either entirely completed or aborted .",
      "options": ["Tangible", "Physical", "Logical", "Practical"],
      "answer": 2,
      "description": "A transaction is considered a logical unit of work, meaning a sequence of operations that should be treated as a single, indivisible operation (either all succeed or all fail)."
    },
    {
      "id": 35,
      "question": "The most common degree of relationship type is______________",
      "options": ["Unary Relationship", "Binary Relationship", "Ternary Relationship", "Quaternary Relationship"],
      "answer": 1,
      "description": "Binary relationships, which involve two entity sets, are the most common type of relationship in database models."
    },
    {
      "id": 36,
      "question": "A transaction acquires a _________prior to data access",
      "options": ["Grain", "Timestamp", "Lock", "Key"],
      "answer": 2,
      "description": "In concurrency control, a transaction typically acquires a lock on a data item before accessing it to manage concurrent access."
    },
    {
      "id": 37,
      "question": "Lock_____indicates the level of lock use.",
      "options": ["Granularity", "Growing", "Serializability", "Shrinking"],
      "answer": 0,
      "description": "Lock granularity refers to the size of the data item that is locked (e.g., row, page, table, database), indicating the level of lock use."
    },
    {
      "id": 38,
      "question": "The_______establishes the order in which the operations within concurrent transactions are executed",
      "options": ["Lock managaer", "Scheduler", "Transaction log", "Timer"],
      "answer": 1,
      "description": "The scheduler (or concurrency control manager) determines the order of execution of operations from concurrent transactions to ensure database consistency and isolation."
    },
    {
      "id": 39,
      "question": "As long as two transactions, T1 and T2, access _____data, there is no conflict, and the order of execution is irrelevant to the final outcome",
      "options": ["Shared", "Unrelated", "Locked", "Common"],
      "answer": 1,
      "description": "If two transactions access unrelated data items (different parts of the database), there will be no conflict, and their execution order does not affect the final outcome."
    },
    {
      "id": 40,
      "question": "A transaction that changes the contents of the database must alter the database from one_____state to another",
      "options": ["Dependent", "Independent", "Consistent", "Inconsistent"],
      "answer": 2,
      "description": "A transaction should ideally transform the database from one consistent state to another consistent state, adhering to integrity constraints."
    },
      {
        "id": 41,
        "question": "The information stored in the ________ is used by the DBMS for a recovery requirement triggered by a ROLLBACK statement, a program‟s abnormal termination, or a system failure such as a network discrepancy or a disk crash",
        "options": ["Transaction log", "Metadata", "Rollback manager", "Data dictionary"],
        "answer": 0,
        "description": "The transaction log records information about each transaction and the changes it makes to the database, which is crucial for recovery."
      },
      {
        "id": 42,
        "question": "Which lock granularity has the highest overhead?",
        "options": ["Filed", "Row", "Database", "Table"],
        "answer": 1,
        "description": "Row-level locking generally has the highest overhead due to the larger number of locks that might be needed."
      },
      {
        "id": 43,
        "question": "Which of the following is not stored in the lock table?",
        "options": [
          "The ID of a transaction",
          "The lock mode",
          "Record for the beginning of a transaction",
          "The data item ID"
        ],
        "answer": 2,
        "description": "The lock table typically stores the transaction ID, the lock mode (shared or exclusive), and the ID of the data item being locked. The beginning of a transaction is usually tracked elsewhere."
      },
      {
        "id": 44,
        "question": "Which lock type exists when concurrent transactions are granted read access on the basis of a common lock.",
        "options": ["Shared", "Binary", "Exclusive", "Two-phase"],
        "answer": 0,
        "description": "A shared lock allows multiple transactions to read a data item concurrently."
      },
      {
        "id": 45,
        "question": "The condition that occurs when two transactions wait for each other to unlock data is______",
        "options": ["Two-phase lock", "Binary lock", "Deadlock", "Exclusive"],
        "answer": 2,
        "description": "Deadlock is a situation where two or more transactions are blocked indefinitely because each is waiting for the other to release a lock."
      },
      {
        "id": 46,
        "question": "The____ approach is based on the assumption that the majority of the database operations do not conflict",
        "options": ["Optimistic", "Scheduled", "Default", "Basic"],
        "answer": 0,
        "description": "Optimistic concurrency control assumes that conflicts are rare and proceeds without locking, validating transactions at the end."
      },
      {
        "id": 47,
        "question": "A(n)______specifically reserves access to the transaction that locked the object",
        "options": ["Binary", "Deadlock", "Shared lock", "Exclusive"],
        "answer": 3,
        "description": "An exclusive lock grants the locking transaction exclusive access to the data item, preventing other transactions from reading or writing it."
      },
      {
        "id": 48,
        "question": "A _____phase in a two phase lock is a state when a transaction releases all locks and cannot obtain any new lock",
        "options": ["Shrinking", "Locking", "Unlocking", "Growing"],
        "answer": 0,
        "description": "The shrinking phase in two-phase locking is when a transaction releases locks it has acquired and cannot acquire any new locks."
      },
      {
        "id": 49,
        "question": "The transaction problem which occurs when a transaction calculates some summary(aggregate) functions over a set of data while other transactions are updating the data",
        "options": [
          "The transaction failure",
          "Inconsistent summary problem",
          "The lost update problem",
          "The dirty read problem"
        ],
        "answer": 1,
        "description": "The inconsistent summary problem arises when one transaction is performing an aggregate function while others are updating the data being aggregated, leading to an incorrect summary."
      },
      {
        "id": 50,
        "question": "When is the implicit beginning of a transaction?",
        "options": [
          "When the database is started",
          "When the COMMIT command is issued",
          "When the first SQL statement is encountered",
          "When a table is accessed for the first time"
        ],
        "answer": 2,
        "description": "Typically, a transaction implicitly begins when the first executable SQL statement (like SELECT, INSERT, UPDATE, DELETE) is encountered after a connection is established or after the end of a previous transaction."
      },
      {
        "id": 51,
        "question": "______refers to a condition in which data used during the execution of a transaction cannot be used by a second transaction until the first one is completed.",
        "options": ["Atomicity", "Serializability", "Isolation", "Time stamping"],
        "answer": 2,
        "description": "Isolation ensures that transactions execute in a way that appears as if they are running sequentially, preventing one transaction from interfering with another."
      },
      {
        "id": 52,
        "question": "One can define ___to help the DBMS ensure that the database remains in a consistent state.",
        "options": ["Business rules", "Stored procedures", "Integrity constraints", "Lock-level transactions"],
        "answer": 2,
        "description": "Integrity constraints are rules defined on the database schema to ensure the accuracy and consistency of data."
      },
      {
        "id": 53,
        "question": "A single user database system automatically ensures_____of the database, because only one transaction is executed at a time",
        "options": [
          "Serializability and durability",
          "Serializability and isolation",
          "Atomicity and serializability",
          "Atomicity and isolation"
        ],
        "answer": 1,
        "description": "In a single-user system, since transactions are executed one after another, the execution is inherently serializable and isolated."
      },
      {
        "id": 54,
        "question": "A disk page or a page is the equivalent of which of the following terms?",
        "options": ["Disk block", "Database schema", "Disk sector", "Database table"],
        "answer": 0,
        "description": "A disk page is often equivalent to a disk block, which is a contiguous section of storage on a disk."
      },
      {
        "id": 55,
        "question": "Which of the following is responsible for assigning and policing the locks used by the transactions?",
        "options": ["DBA", "Scheduler", "Lock manager", "Transaction log"],
        "answer": 2,
        "description": "The lock manager is the DBMS component responsible for granting, releasing, and managing locks on data items used by transactions."
      },
      {
        "id": 56,
        "question": "A lock type that allows concurrent transactions to access different rows of the same table is ______",
        "options": ["Row level", "Table level", "Database level", "Page level"],
        "answer": 0,
        "description": "Row-level locking allows different transactions to hold locks on different rows of the same table concurrently, increasing concurrency."
      },
      {
        "id": 57,
        "question": "A lock that prevents the use of any tables in the database from one transaction while another transaction is being accessed is_________ A. Table level B. Row level",
        "options": ["Table level", "Row level", "Database level", "Page level"],
        "answer": 2,
        "description": "A database-level lock prevents any transaction from accessing any table in the database while the lock is held."
      },
      {
        "id": 58,
        "question": "A lock that locks the entire disk page is_____",
        "options": ["Row level", "Transaction level", "Page level", "Table level"],
        "answer": 2,
        "description": "Page-level locking locks an entire disk page, which might contain multiple rows."
      },
      {
        "id": 59,
        "question": "Which of the following desired properties of transactions requires that all operations of a transaction be completed?",
        "options": ["Durability", "Atomicity", "Time stamping", "Specificity"],
        "answer": 1,
        "description": "Atomicity requires that a transaction be treated as a single, indivisible unit of work: either all its operations are performed, or none are."
      },
      {
        "id": 60,
        "question": "Which of the following locks lock the entire table preventing access to any row by a transaction while another transaction is using the table",
        "options": ["Page level", "Row level", "Database level", "Table level"],
        "answer": 3,
        "description": "Table-level locking acquires a lock on the entire table, preventing other transactions from accessing any row in that table."
      },
      
        {
          "id": 61,
          "question": "Which of the following are conflicting operations in a given transactions?",
          "options": [
            "Read_T1(X) and Write_T2(X)",
            "Write_T2(X) and Write_T1(Y)",
            "Read_T1(X) and Write_T1(X)",
            "Read_T1(X) and Read_T2(X)"
          ],
          "answer": 0,
          "description": "Conflicting operations involve different transactions accessing the same data item, and at least one of them is a write operation. Thus, Read_T1(X) and Write_T2(X) are conflicting."
        },
        {
          "id": 62,
          "question": "Precedence graph is mostly used for testing___________",
          "options": [
            "Recoverable schedule",
            "Concurrent schedules",
            "Conflict serializable schedule",
            "Starvation"
          ],
          "answer": 2,
          "description": "A precedence graph is used to test whether a schedule is conflict serializable. If the graph has no cycles, the schedule is conflict serializable."
        },
        {
          "id": 63,
          "question": "Privileges cannot be granted to which of the following database objects/subjects?",
          "options": ["view", "procedure", "function", "user"],
          "answer": 3,
          "description": "Privileges are granted to users or roles to perform actions on database objects like tables, views, procedures, and functions. You grant privileges *to* a user, not that privileges cannot be granted *to* a user."
        },
        {
          "id": 64,
          "question": "Which of the following causes degradation of database security goals?",
          "options": ["Loss of Integrity", "Loss of Availability", "Loss of Confidentiality", "Consistency"],
          "answer": 3,
          "description": "Loss of Integrity, Loss of Availability, and Loss of Confidentiality are direct threats to database security goals. Consistency is a desired property, not a cause of degradation."
        },
        {
          "id": 65,
          "question": "The commonly used model for multilevel security in mandatory access control that classifies subjects and objects into security classes is __________",
          "options": [
            "Bell-LaPadula",
            "Role Based Access Control",
            "Data Encryption Standard (DES)",
            "Discretionary Access Control (DAC)"
          ],
          "answer": 0,
          "description": "The Bell-LaPadula model is a classic model for mandatory access control that uses security classifications for subjects and objects."
        },
        {
          "id": 66,
          "question": "Which of the following terms does not belong to mandatory access control counter measures against database security threats?",
          "options": ["Secret", "Top Secret", "Classified", "Unclassified"],
          "answer": 3,
          "description": "'Unclassified' is a security classification level, just like Secret, Top Secret, and Classified. All these are part of mandatory access control."
        },
        {
          "id": 67,
          "question": "The multiple-granularity locking protocol uses multiple lock modes to ensure",
          "options": ["Sequence", "Serializability", "Deadlocks", "Locking"],
          "answer": 1,
          "description": "Multiple-granularity locking aims to improve performance and concurrency while ensuring serializability."
        },
        {
          "id": 68,
          "question": "Which of the following are deadlock prevention mechanisms",
          "options": [
            "Conservative two phase locking",
            "Lock time outs",
            "Starvation",
            "FIFO"
          ],
          "answer": 0,
          "description": "Conservative two-phase locking is a deadlock prevention technique where a transaction acquires all the locks it needs before it begins execution."
        },
        {
          "id": 69,
          "question": "A protocol that ensures the system will never enter a deadlock state is called",
          "options": [
            "Deadlock detection",
            "Deadlock elimination",
            "Deadlock prevention",
            "Deadlock recovery"
          ],
          "answer": 2,
          "description": "Deadlock prevention protocols are designed to ensure that the conditions necessary for a deadlock cannot occur."
        },
        {
          "id": 70,
          "question": "The two modes of locking a data item, are termed as 'shared' and",
          "options": ["Composite", "Compatible", "Exclusive", "Linear"],
          "answer": 2,
          "description": "The two basic lock modes are shared (for reading) and exclusive (for writing)."
        },
        {
          "id": 71,
          "question": "The deadlock prevention scheme named wound-wait is a",
          "options": [
            "Non-linear preemptive technique",
            "Linear preemptive technique",
            "Preemptive technique",
            "Nonpreemptive technique"
          ],
          "answer": 2,
          "description": "The wound-wait scheme is a preemptive deadlock prevention technique where an older transaction can 'wound' (abort) a younger conflicting transaction."
        },
        {
          "id": 72,
          "question": "The rigorous two-phase locking protocol permits releasing all locks at the",
          "options": [
            "Beginning of transaction",
            "During execution of transaction",
            "End of transaction",
            "Never in the life-time of transaction"
          ],
          "answer": 2,
          "description": "Rigorous two-phase locking requires that all locks are held until the transaction commits or aborts (i.e., the end of the transaction)."
        },
        {
          "id": 73,
          "question": "A scheme that creates a new version of a data item for each transaction is defined by",
          "options": [
            "Concurrency control scheme",
            "Multiversion concurrency control scheme",
            "Timestamp concurrency control scheme",
            "Wound concurrency control scheme"
          ],
          "answer": 1,
          "description": "Multiversion concurrency control (MVCC) maintains multiple versions of data items to improve concurrency."
        },
        {
          "id": 74,
          "question": "A set of rules applied over a transaction that may lock and unlock each of the data items in the database, is known to be",
          "options": ["Unlocking protocol", "Locking protocol", "Deadlock protocol", "Validation protocol"],
          "answer": 1,
          "description": "A locking protocol defines the rules for when a transaction can acquire and release locks."
        },
        {
          "id": 75,
          "question": "Two-phase locking does not ensure freedom from",
          "options": ["Obtain locks", "Release locks", "New locks", "Deadlocks"],
          "answer": 3,
          "description": "While two-phase locking ensures serializability, it does not inherently prevent deadlocks."
        },
        {
          "id": 76,
          "question": "Which of these statements about serializable schedules is true?",
          "options": [
            "Every serializable schedule contains no conflicting actions.",
            "Every 2PL schedule is serializable.",
            "Every serializable schedule is recoverable.",
            "Every schedule is serializable."
          ],
          "answer": 1,
          "description": "Every schedule produced by the two-phase locking (2PL) protocol is guaranteed to be serializable."
        },
        {
          "id": 77,
          "question": "Which of these statements about recoverable schedules is true?",
          "options": [
            "In a recoverable schedule, if a transaction T commits, then any other transaction that T read from must also have committed.",
            "In a recoverable schedule, no transaction will ever be aborted because a transaction that it read from has aborted.",
            "Every recoverable schedule is serializable.",
            "There is no recoverable schedule."
          ],
          "answer": 0,
          "description": "A schedule is recoverable if, for any transaction $T_j$ that reads a data item written by transaction $T_i$, if $T_j$ commits, then $T_i$ must have committed before $T_j$ commits."
        },
        {
          "id": 78,
          "question": "In which of the following situations is optimistic concurrency control with validation likely to perform better than locking with 2PL?",
          "options": [
            "Distributed databases where all the transactions need to read and write objects on multiple servers.",
            "A high-contention workload where all the transactions need to update a single record.",
            "A read-mostly workload, where most transactions just read a small number of data items, and a few transactions write data items.",
            "Locking will performed randomly."
          ],
          "answer": 2,
          "description": "Optimistic concurrency control performs well in read-mostly workloads because there are fewer conflicts, reducing the overhead of validation and restarts compared to the overhead of acquiring and releasing locks in 2PL."
        },
        {
          "id": 79,
          "question": "Which of these statements about deadlock are true?",
          "options": [
            "Once two transactions deadlock, one of them must be aborted to maintain correctness.",
            "Systems that support update locks (S, X and U modes) cannot deadlock.",
            "If all transactions use two-phase locking, they cannot deadlock.",
            "Validation based concurrency control schemes cannot deadlock."
          ],
          "answer": 0,
          "description": "When a deadlock occurs, one or more transactions involved must be aborted to break the cycle of waiting."
        },
        {
          "id": 80,
          "question": "Locks placed by command are called ________ .",
          "options": ["explicit locks", "exclusive locks"],
          "answer": 0,
          "description": "Locks that are explicitly requested by a transaction using a command are called explicit locks."
        },
        
          {
            "id": 81,
            "question": "The advantage of optimistic locking is that:",
            "options": [
              "The lock is obtained before the transaction has processed.",
              "the lock is obtained only after the transaction has processed.",
              "the lock never needs to be obtained.",
              "transactions that are best suited are those with a lot of activity."
            ],
            "answer": 1,
            "description": "Optimistic locking assumes that conflicts are rare, so locks are only checked and applied at the end of the transaction (after processing)."
          },
          {
            "id": 82,
            "question": "Which of the following disallows both dirty reads and nonrepeatable reads, but allows phantom reads?",
            "options": ["Read uncommitted", "Read committed", "Repeatable read", "Serializable"],
            "answer": 2,
            "description": "Repeatable read isolation level prevents dirty reads and nonrepeatable reads but does not prevent phantom reads."
          },
          {
            "id": 83,
            "question": "Dirty read, nonrepeatable, and phantom reads are not possible in this instance.",
            "options": ["Serializable", "Repeatable read", "Read committed", "Read uncommitted"],
            "answer": 0,
            "description": "The Serializable isolation level provides the highest level of isolation, preventing dirty reads, nonrepeatable reads, and phantom reads."
          },
          {
            "id": 84,
            "question": "A transaction in which either all of the database actions occur or none of them do is called:",
            "options": ["Isolated", "Consistent", "Durable", "Atomic"],
            "answer": 3,
            "description": "Atomicity is the property of a transaction that ensures that either all its operations are completed successfully, or none of them have any effect."
          },
          {
            "id": 85,
            "question": "Optimization that is basically related to the rewriter module is termed as _______.",
            "options": [
              "Semantic query optimization",
              "Global-semantic query optimization",
              "Global query optimization",
              "There is no rewriter query optimization"
            ],
            "answer": 0,
            "description": "Semantic query optimization uses the constraints of the database schema to rewrite queries into more efficient forms."
          },
          {
            "id": 86,
            "question": "Database security helps organizations to protect data from_________.",
            "options": ["External users", "Non-external users", "Internal users", "Non internal users"],
            "answer": 0,
            "description": "Database security aims to protect data from unauthorized access, which includes external users."
          },
          {
            "id": 87,
            "question": "_____________ joins are SQL server default",
            "options": ["Inner", "Outer", "Left", "Right"],
            "answer": 0,
            "description": "In SQL Server, if no join type is explicitly specified, the default join is an INNER JOIN."
          },
          {
            "id": 88,
            "question": "Ensuring isolation property is the responsibility of the________.",
            "options": [
              "Concurrency-control component of the DBMS",
              "Transaction-management component of the DBMS",
              "Buffer management component in DBMS",
              "Recovery-management component of the DBMS"
            ],
            "answer": 0,
            "description": "The concurrency-control component of the DBMS is responsible for managing the concurrent execution of transactions to ensure the isolation property."
          },
          {
            "id": 89,
            "question": "Which of the following is not steps in query processing?",
            "options": ["Parsing and translation", "Evaluation", "Optimization", "Merging (combining)"],
            "answer": 3,
            "description": "The typical steps in query processing are parsing and translation, optimization, and evaluation. Merging (combining) is not generally listed as a main step."
          },
          {
            "id": 90,
            "question": "A sequence of primitive operations that can be used to evaluate a query are called as __________.",
            "options": [
              "Query evaluation primitive",
              "Query evaluation engine",
              "Query evaluation plan",
              "Query evaluation algebra"
            ],
            "answer": 2,
            "description": "A query evaluation plan (or query execution plan) is a sequence of low-level operations used to retrieve the result of a query."
          },
          {
            "id": 91,
            "question": "Using which language can a user request information from a database?",
            "options": ["Structural", "Query", "Compiler", "Relational"],
            "answer": 1,
            "description": "A query language, such as SQL, allows users to request information from a database."
          },
          {
            "id": 92,
            "question": "The_____ operation allows combining two relations by merging pairs of tuples, one from each relation, into a single tuple.",
            "options": ["Union", "Select", "Join", "Intersection"],
            "answer": 2,
            "description": "The join operation combines tuples from two relations based on a related column between them."
          },
          {
            "id": 93,
            "question": "The result which operation contains all pairs of tuples from the two relations, regardless of whether their attribute values match.",
            "options": ["Cartesian product", "Set difference", "Join", "Intersection"],
            "answer": 0,
            "description": "The Cartesian product operation combines each tuple of the first relation with each tuple of the second relation."
          },
          {
            "id": 94,
            "question": "The _______operation performs a set union of two “similarly structured” tables",
            "options": ["Product", "Union", "Join", "Intersection"],
            "answer": 1,
            "description": "The union operation combines all distinct tuples from two relations that have compatible schemas."
          },
          {
            "id": 95,
            "question": "The most commonly used operation in relational algebra for projecting a set of tuple from a relation is__________.",
            "options": ["Projection", "Join", "Union", "Select"],
            "answer": 0,
            "description": "Projection in relational algebra selects specific columns (attributes) from a relation."
          },
          {
            "id": 96,
            "question": "The _________ provides a set of operations that take one or more relations as input and return a relation as an output.",
            "options": ["Scheme diagram", "Relational algebra", "Schematic representation", "Relation flow"],
            "answer": 1,
            "description": "Relational algebra is a formal system that provides a set of operations for manipulating relations."
          },
          {
            "id": 97,
            "question": "When we update any tuple in the relation which Authorization on a relation required?",
            "options": ["update authorization", "define authorization", "select authorization", "grant authorization"],
            "answer": 0,
            "description": "To modify data in a relation (update tuples), the user must have update authorization on that relation."
          },
          {
            "id": 98,
            "question": "Grants privileges on SQL authorization mechanism ____________.",
            "options": [
              "Entire relation and specified tuples",
              "Specified database",
              "Specified attributes",
              "Specified entity"
            ],
            "answer": 2,
            "description": "In SQL, you can grant privileges on specific attributes (columns) of a relation."
          },
          {
            "id": 99,
            "question": "Which term is used to revoke an authorization?",
            "options": ["Modify", "Define", "Revoke", "Alter"],
            "answer": 2,
            "description": "The `REVOKE` command in SQL is used to remove previously granted privileges."
          },
          {
            "id": 100,
            "question": "The grant privileges on SQL authorization mechanism don‟t have______.",
            "options": [
              "Specified attributes",
              "Entire relation Project Management",
              "Specified tuples Entire relation",
              "Specified column"
            ],
            "answer": 1,
            "description": "The options seem a bit jumbled. However, standard SQL `GRANT` allows granting privileges on specified attributes (columns) and the entire relation. Granting on 'specified tuples' directly is not a standard mechanism; conditions in queries achieve filtering. 'Project Management' is not a standard SQL privilege scope."
          }
        ] ;

export default function DBMSQuizPage() {
  return <QuizContent questions={questions} courseTitle="Database Management Systems" />;
} 