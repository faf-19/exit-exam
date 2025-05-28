const dsaQuestions = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    answer: 1,
    description: "Binary search has a time complexity of O(log n) as it divides the search space in half with each iteration."
  },
  {
    id: 2,
    question: "Which data structure follows LIFO principle?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    answer: 1,
    description: "Stack follows Last In First Out (LIFO) principle where the last element inserted is the first one to be removed."
  },
  {
    id: 3,
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
    answer: 2,
    description: "Quicksort's worst-case time complexity is O(n²) when the pivot is always the smallest or largest element."
  },
  {
    id: 4,
    question: "What is the best data structure for implementing a priority queue?",
    options: ["Array", "Linked List", "Heap", "Stack"],
    answer: 2,
    description: "A Heap is the most efficient data structure for implementing a priority queue with O(log n) insertion and deletion."
  },
  {
    id: 5,
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    answer: 1,
    description: "Merge sort requires O(n) extra space to store the merged arrays during sorting."
  },
  {
    id: 6,
    question: "What is a balanced binary tree?",
    options: ["Tree with equal nodes", "Height difference ≤ 1", "Complete binary tree", "Perfect binary tree"],
    answer: 1,
    description: "A balanced binary tree has a height difference of at most 1 between the left and right subtrees of every node."
  },
  {
    id: 7,
    question: "What is the time complexity of inserting into a hash table?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    answer: 0,
    description: "Hash table insertion has an average time complexity of O(1) when using a good hash function."
  },
  {
    id: 8,
    question: "What is the purpose of a B-tree?",
    options: ["Binary search", "Database indexing", "Sorting", "Graph traversal"],
    answer: 1,
    description: "B-trees are commonly used for database indexing and file systems due to their efficient disk access patterns."
  },
  {
    id: 9,
    question: "What is dynamic programming?",
    options: ["Recursion", "Iteration", "Overlapping subproblems", "Greedy approach"],
    answer: 2,
    description: "Dynamic programming solves complex problems by breaking them into simpler overlapping subproblems."
  },
  {
    id: 10,
    question: "What is the time complexity of breadth-first search?",
    options: ["O(V + E)", "O(V²)", "O(E log V)", "O(V)"],
    answer: 0,
    description: "BFS has a time complexity of O(V + E) where V is the number of vertices and E is the number of edges."
  }
  // Note: This is a sample of 10 questions. In practice, you would add all 100 questions here.
];

export default dsaQuestions; 