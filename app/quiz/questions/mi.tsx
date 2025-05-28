import type { Question } from "./dccn";

const questions: Question[] = [
  {
    id: 1,
    question: "What is a microcontroller?",
    options: [
      "A type of memory",
      "A single chip containing CPU, memory, and I/O ports",
      "A type of processor",
      "An interface device"
    ],
    answer: 1,
    description: "A microcontroller is a compact integrated circuit designed to govern a specific operation in an embedded system. It includes a processor, memory, and programmable I/O peripherals."
  },
  {
    id: 2,
    question: "What is the purpose of UART in microcontrollers?",
    options: [
      "Memory management",
      "Processing calculations",
      "Serial communication",
      "Analog to digital conversion"
    ],
    answer: 2,
    description: "UART (Universal Asynchronous Receiver-Transmitter) is used for serial communication between devices, converting parallel data to serial format and vice versa."
  }
  // Add more MI questions here
];

export default questions; 