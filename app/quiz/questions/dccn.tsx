export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  description?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the main function of the Data Link Layer in the OSI model?",
    options: [
      "Error detection and correction",
      "Routing",
      "Encryption",
      "File transfer"
    ],
    answer: 0,
    description: "The Data Link Layer is responsible for error detection and correction in data frames, ensuring reliable point-to-point data delivery."
  },
  {
    id: 2,
    question: "Which protocol operates at the Network Layer?",
    options: [
      "TCP",
      "IP",
      "HTTP",
      "FTP"
    ],
    answer: 1,
    description: "IP (Internet Protocol) operates at the Network Layer (Layer 3) of the OSI model, handling addressing and routing."
  }
  // Add more DCCN questions here
];

export default questions; 