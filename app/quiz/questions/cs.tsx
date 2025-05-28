import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is encryption?",
    options: [
      "Data compression",
      "Data conversion to unreadable format",
      "Data deletion",
      "Data backup"
    ],
    answer: 1,
    description: "Encryption is the process of converting data into a coded format that can only be read by authorized parties with the correct decryption key."
  },
  {
    id: 2,
    question: "What is a firewall?",
    options: [
      "An antivirus program",
      "A backup system",
      "A network security system",
      "A type of malware"
    ],
    answer: 2,
    description: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules."
  }
  // Add more CS questions here
];

export default questions; 