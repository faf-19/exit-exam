import { QuizContent } from "../[course]/quiz-content";

const questions = [
    {
      "id": 1,
      "question": "Who developed the basic architecture of computer?",
      "options": ["Blaise Pascal", "Charles Babbage", "John Von Neumann", "None of the above"],
      "answer": 2
    },
    {
      "id": 2,
      "question": "Which of the following is not considered as a peripheral device?",
      "options": ["CPU", "Keyboard", "Monitor", "Microphone"],
      "answer": 0
    },
    {
      "id": 3,
      "question": "Which of the following computer memory is fastest?",
      "options": ["Register", "Hard disk", "RAM", "CD"],
      "answer": 0
    },
    {
      "id": 4,
      "question": "Which of the following operations is/are not performed by the ALU?",
      "options": ["Data manipulation", "Square root", "Exponential", "Interconnections"],
      "answer": 1
    },
    {
      "id": 5,
      "question": "Which of the following format is used to store data?",
      "options": ["Decimal", "Octal", "BCD", "Hexadecimal"],
      "answer": 2
    },
    {
      "id": 6,
      "question": "Which of the following memory of the computer is used to speed up the computer processing?",
      "options": ["Cache memory", "ROM", "RAM", "None of the above"],
      "answer": 0
    },
    {
      "id": 7,
      "question": "Computer address bus is -",
      "options": ["Multidirectional", "Bidirectional", "Unidirectional", "None of the above"],
      "answer": 2
    },
    {
      "id": 8,
      "question": "Which of the following circuit is used to store one bit of data?",
      "options": ["Flip Flop", "Decoder", "Encoder", "Register"],
      "answer": 0
    },
    {
      "id": 9,
      "question": "Which of the following is a way in which the components of a computer are connected to each other?",
      "options": ["Computer parts", "Computer architecture", "Computer hardware", "None of the above"],
      "answer": 1
    },
    {
      "id": 10,
      "question": "Which of the following circuit convert the binary data into a decimal?",
      "options": ["Decoder", "Encoder", "Code converter", "Multiplexer"],
      "answer": 0
    },
    {
      "id": 11,
      "question": "The address in the main memory is known as -",
      "options": ["Logical address", "Physical address", "Memory address", "None of the above"],
      "answer": 1
    },
    {
      "id": 12,
      "question": "Subtraction in computers is carried out by -",
      "options": ["1's complement", "2's complement", "3's complement", "9's complement"],
      "answer": 1
    },
    {
      "id": 13,
      "question": "Which of the following computer bus connects the CPU to a memory on the system board?",
      "options": ["Expansion bus", "Width bus", "System bus", "None of the above"],
      "answer": 2
    },
    {
      "id": 14,
      "question": "Which of the following memory unit communicates directly with the CPU?",
      "options": ["Auxiliary memory", "Main memory", "Secondary memory", "None of the above"],
      "answer": 1
    },
    {
      "id": 15,
      "question": "The collection of 8-bits is known as -",
      "options": ["Byte", "Nibble", "Word", "Record"],
      "answer": 0
    },
    {
      "id": 16,
      "question": "Which of the following register can interact with the secondary storage?",
      "options": ["PC", "MAR", "MDR", "IR"],
      "answer": 2
    },
    {
      "id": 17,
      "question": "In which of the following form the computer stores its data in memory?",
      "options": ["Hexadecimal form", "Octal form", "Binary form", "Decimal form"],
      "answer": 2
    },
    {
      "id": 18,
      "question": "Which of the following is a combinational logic circuit which sends data from a single source to two or more separate destinations?",
      "options": ["Multiplexer", "Demultiplexer", "Incoder", "Decoder"],
      "answer": 1
    },
    {
      "id": 19,
      "question": "Which of the following is a group of bits that tells the computer to perform a particular operation?",
      "options": ["Accumulator", "Register", "Instruction code", "None of the above"],
      "answer": 2
    },
    {
      "id": 20,
      "question": "Where is the document temporarily stored during working on a document on PC?",
      "options": ["ROM", "CPU", "RAM", "Flash memory"],
      "answer": 2
    },
    {
      "id": 21,
      "question": "What does MIMD stand for?",
      "options": [
        "Multiple Instruction Memory Data",
        "Multiple Instruction Multiple Data",
        "Memory Instruction Multiple Data",
        "Memory Information Memory Data"
      ],
      "answer": 1
    },
    {
      "id": 22,
      "question": "The Program Counter is also called as -",
      "options": ["Instruction Pointer", "Data Counter", "Memory pointer", "None of the above"],
      "answer": 0
    },
    {
      "id": 23,
      "question": "Which of the following is correct about memory and storage?",
      "options": [
        "Memory is temporary, Storage is temporary",
        "Memory is temporary, Storage is permanent",
        "Memory is permanent, Storage is temporary",
        "Memory is slow, Storage is Fast"
      ],
      "answer": 1
    },
    {
      "id": 24,
      "question": "What is the content of stack pointer (SP)?",
      "options": [
        "Address of the top element in the stack",
        "Address of current instruction",
        "Address of next instruction",
        "None of the above"
      ],
      "answer": 0
    },
    {
      "id": 25,
      "question": "What does a computer bus line consists of?",
      "options": ["Set of parallel lines", "Accumulators", "Registers", "None of the above"],
      "answer": 0
    },
        {
          "id": 26,
          "question": "Which of the following is a combinational logic circuit that has 2n input lines and a single output line?",
          "options": ["Multiplexer", "Demultiplexer", "Encoder", "Decoder"],
          "answer": 2
        },
        {
          "id": 27,
          "question": "Which of the following is the circuit board on which chips and processor are placed?",
          "options": ["Master circuit", "Big board", "Motherboard", "None of the above"],
          "answer": 2
        },
        {
          "id": 28,
          "question": "Which of the following computer register collects the result of computation?",
          "options": ["Accumulator", "Instruction Pointer", "Storage register", "Program counter"],
          "answer": 0
        },
        {
          "id": 29,
          "question": "CISC stands for -",
          "options": [
            "Complex Instruction Set Computer",
            "Complete Instruction Sequential Compilation",
            "Complex Instruction Sequential Compiler",
            "Complex Instruction Sequential Compilation"
          ],
          "answer": 0
        },
        {
          "id": 30,
          "question": "What does EEPROM stands for?",
          "options": [
            "Electrically Erasable and Programmable Read-Only Memory",
            "Electronically Erasable and Programmable Read-Only Memory",
            "Electrically Enabled and Programmable Read-Only Memory",
            "None of the above"
          ],
          "answer": 0
        },
        {
          "id": 31,
          "question": "Which one of the following is a volatile memory?",
          "options": ["RAM", "ROM", "Hard Disk", "EEPROM"],
          "answer": 0
        },
        {
          "id": 32,
          "question": "Which of the following memory types is built using only transistors?",
          "options": ["SRAM", "DRAM", "Magnetic disk", "Magnetic Tape"],
          "answer": 0
        },
        {
          "id": 33,
          "question": "Which one of the following is true about the logical locations of computer system elements?",
          "options": [
            "CPU, Cache, Main Memory",
            "CPU, Hard Disk, Main Memory",
            "CPU, I/O Module, RAM",
            "CPU, Main Memory, Cache"
          ],
          "answer": 3
        },
        {
          "id": 34,
          "question": "If you have to design a memory with 1024 addressable words, how many number of address bits/lines are required?",
          "options": ["11", "10", "8", "32"],
          "answer": 1
        },
        {
          "id": 35,
          "question": "The tendency of a processor to access the same set of memory locations repetitively over a short period of time is referred to as:",
          "options": ["Probability of success", "Frequency", "Locality of Reference", "Randomness"],
          "answer": 2
        },
        {
          "id": 36,
          "question": "If we have a 4GB of RAM with byte addressable mode, how many number of address bits are required so that we can fully address all the segments?",
          "options": ["128", "64", "32", "16"],
          "answer": 2
        },
        {
          "id": 37,
          "question": "When the CPU attempts to read a word from memory, a check is made to determine if the word is in cache, and if the word is found in the target, we call it:",
          "options": ["Cache Miss", "Cache Access", "Cache Hit", "Cache waste"],
          "answer": 2
        },
        {
          "id": 38,
          "question": "In which one of the following cache mapping techniques, each memory location (address) is mapped to exactly one location (line) in cache?",
          "options": ["Fully-associative Mapping", "Set-associative Mapping", "Flexible Mapping", "Direct mapping"],
          "answer": 3
        },
        {
          "id": 39,
          "question": "For fully-associative and set-associative mapping, which of the following is not a replacement policy they could be employed?",
          "options": ["First in First Out", "First in Last Out", "Least Frequently Used", "Pick Randomly"],
          "answer": 1
        },
        {
          "id": 40,
          "question": "A storage method in which data is written into the cache and the corresponding main memory location at the same time is referred to as:",
          "options": ["Store Output", "Store Back", "Write Back", "Write Through"],
          "answer": 3
        },
        {
          "id": 41,
          "question": "Which one of the following is not a memory accessing techniques?",
          "options": ["Sequential Accessing", "Direct Accessing", "Random Accessing", "Reverse Accessing"],
          "answer": 3
        },
        {
          "id": 42,
          "question": "To read a block of instructions from a Disk, we employ",
          "options": ["Random accessing", "Associative accessing", "Direct Accessing", "Sequential accessing"],
          "answer": 2
        },
        {
          "id": 43,
          "question": "Based on the their speed, which one of the following ordering from the highest to the lowest is true",
          "options": [
            "Dynamic RAM, Static RAM, Magnetic Disk",
            "Static RAM, Dynamic RAM, Magnetic Disk",
            "Magnetic Disk, Static RAM, Dynamic RAM",
            "Magnetic Disk, Dynamic RAM, Static RAM"
          ],
          "answer": 1
        },
        {
          "id": 44,
          "question": "The part of a Hard Disk that is temporarily reserved as a RAM in order to enable a computer compensate for physical memory shortages is known as:",
          "options": ["Primary Memory", "Secondary Memory", "External Memory", "Virtual Memory"],
          "answer": 3
        },
        {
          "id": 45,
          "question": "Which one of the following is not the reason as to why we interface I/O devices via I/O modules instead of directly interfacing them with the CPU?",
          "options": [
            "Because I/O devices are slower than CPU",
            "Because different I/O devices have different instruction format",
            "Because different I/O devices operate at different speeds",
            "Because different I/O devices deliver the same amount of data"
          ],
          "answer": 3
        },
        {
          "id": 46,
          "question": "It is not a technique that could be employed by the CPU to interact with the I/O modules",
          "options": ["Indirect I/O", "Interrupt Driven I/O", "Programmed I/O", "Direct Memory Accessing"],
          "answer": 0
        },
        {
          "id": 47,
          "question": "In a computer system, when the memory for the instruction and data are separated, the architecture, conventionally, known as:",
          "options": ["Harvard Architecture", "Von-neuman Architecture", "Severed Architecture", "Blended Architecture"],
          "answer": 0
        },
        {
          "id": 48,
          "question": "If you were to design a processor that can perform 199 operations, how many bits would you allocate for the operation codes (op-code)?",
          "options": ["2", "4", "8", "10"],
          "answer": 2
        },
        {
          "id": 49,
          "question": "Which one of the following instruction is written using a zero address format?",
          "options": ["ADD [100]", "ADD R1, R2", "ADD [100],[101]", "ADD"],
          "answer": 3
        },
        {
          "id": 50,
          "question": "An array variable in any of high-level programming languages could be represented using one of the following machine instructions?",
          "options": ["LB R1, R2", "LB R1, 100[R2]", "LB R1, (R2)", "LB R1, [R2]"],
          "answer": 1
        },
            {
              "id": 51,
              "question": "Where does a processor store its current status when it gets interrupted before heading to handle the corresponding Interrupt Service Routine (ISR)?",
              "options": ["In the Stack", "In the Hard Disk", "In one of the registers", "In the Control Unit"],
              "answer": 0
            },
            {
              "id": 52,
              "question": "Pertaining registers, it is not an issue during designing a CPU?",
              "options": [
                "How wide registers are",
                "How many registers are required",
                "Whether they are user-visible",
                "How fast they are"
              ],
              "answer": 3
            },
            {
              "id": 53,
              "question": "An instruction could be represented by one or more atomic operations, and these mini operations are called:",
              "options": ["Commanding operations", "Micro-operations", "Brunching operations", "Data movement operations"],
              "answer": 1
            },
            {
              "id": 54,
              "question": "Which one of the following is one of the main functions of the Control Unit?",
              "options": [
                "Arithmetic and logical operation",
                "Sequencing",
                "Temporary storage",
                "Cooling off the CPU"
              ],
              "answer": 1
            },
            {
              "id": 55,
              "question": "It is a Control Unit type which has a control-memory within",
              "options": [
                "Micro-programmed Control Unit",
                "Hardwired Control Unit",
                "Multiplexed Control Unit",
                "Decoder-like Control Unit"
              ],
              "answer": 0
            },
            {
              "id": 56,
              "question": "Once the instructions are within the CPU, which one of the following is not a factor to determine the time taken by a processor to complete a program?",
              "options": [
                "The number of instructions in the program,",
                "The average number of clock cycles required to execute an instruction, and",
                "The clock cycle time",
                "The depth of the RAM"
              ],
              "answer": 3
            },
            {
              "id": 57,
              "question": "It took the interests of Operating Systems Programmers and those who take processor speed a priority",
              "options": [
                "CISC based processor",
                "RISC based processor",
                "Hybrid (both CISC and RISC) based",
                "such processors have not been designed yet"
              ],
              "answer": 1
            },
            {
              "id": 58,
              "question": "Of all the pipeline related hazards, which category fits the following instructions well? ADD R1, R2 ADD R3, R1",
              "options": ["Data hazard", "Control hazard", "Resource hazard", "They are hazard free"],
              "answer": 0
            },
            {
              "id": 59,
              "question": "It is a technique to minimize pipelining related hazards except",
              "options": [
                "Using loop buffer",
                "Predicting branches and take an appropriate path",
                "Delaying branches to the end",
                "Adding more registers"
              ],
              "answer": 0
            },
            {
              "id": 60,
              "question": "If a CPU requires 5 clock cycles per instruction, how long does it take(in clock cycles) to process a program of 100 instructions using 5 stages of pipelining.",
              "options": ["500", "104", "15", "55"],
              "answer": 1
            },
            {
              "id": 61,
              "question": "Which component of a computer is responsible for executing instructions?",
              "options": ["CPU", "GPU", "RAM", "Hard Drive"],
              "answer": 0
            },
            {
              "id": 62,
              "question": "What does CPU stand for?",
              "options": [
                "Central Processing Unit",
                "Computer Processing Unit",
                "Central Processor Unit",
                "Control Processing Unit"
              ],
              "answer": 0
            },
            {
              "id": 63,
              "question": "Which of the following is NOT a component of the CPU?",
              "options": ["Arithmetic Logic Unit (ALU)", "Control Unit (CU)", "Memory Unit (MU)", "Register Unit (RU)"],
              "answer": 2
            },
            {
              "id": 64,
              "question": "Which unit of the CPU is responsible for performing arithmetic and logical operations?",
              "options": ["ALU", "CU", "MU", "RU"],
              "answer": 0
            },
            {
              "id": 65,
              "question": "Which component stores the instructions and data that the CPU is currently processing?",
              "options": ["Cache", "RAM", "CPU Register", "Hard Drive"],
              "answer": 1
            },
            {
              "id": 66,
              "question": "Which of the following is NOT a type of CPU cache?",
              "options": ["L1 Cache", "L2 Cache", "L3 Cache", "Virtual Cache"],
              "answer": 3
            },
            {
              "id": 67,
              "question": "Which CPU architecture is commonly found in most personal computers?",
              "options": ["x86", "ARM", "MIPS", "PowerPC"],
              "answer": 0
            },
            {
              "id": 68,
              "question": "Which of the following is a characteristic of a Reduced Instruction Set Computer (RISC)?",
              "options": [
                "Complex instruction set",
                "Fewer instructions",
                "Emphasis on hardware complexity",
                "Commonly used in high-performance servers"
              ],
              "answer": 1
            },
            {
              "id": 69,
              "question": "Which CPU architecture is commonly found in smartphones and tablets?",
              "options": ["x86", "ARM", "MIPS", "PowerPC"],
              "answer": 1
            },
            {
              "id": 70,
              "question": "Which of the following is responsible for fetching instructions from memory to the CPU?",
              "options": ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Memory Unit (MU)", "Register Unit (RU)"],
              "answer": 0
            },
            {
              "id": 71,
              "question": "Which component is responsible for coordinating and controlling the activities of the CPU?",
              "options": ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Memory Unit (MU)", "Register Unit (RU)"],
              "answer": 0
            },
            {
              "id": 72,
              "question": "Which of the following is NOT a part of the Von Neumann architecture?",
              "options": ["Arithmetic Logic Unit (ALU)", "Control Unit (CU)", "Memory Unit (MU)", "Input/Output Unit (IOU)"],
              "answer": 3
            },
            {
              "id": 73,
              "question": "Which type of memory is directly accessed by the CPU for storing frequently used data?",
              "options": ["Cache", "ROM", "Virtual Memory", "Hard Drive"],
              "answer": 0
            },
            {
              "id": 74,
              "question": "Which of the following is a measure of the CPU's processing speed?",
              "options": ["Clock speed", "RAM capacity", "Cache size", "Hard drive capacity"],
              "answer": 0
            },
            {
              "id": 75,
              "question": "Which component is responsible for decoding instructions and generating control signals?",
              "options": ["Control Unit (CU)", "Arithmetic Logic Unit (ALU)", "Memory Unit (MU)", "Register Unit (RU)"],
              "answer": 0
            },
                {
                  "id": 76,
                  "question": "Which of the following is NOT a register commonly found in CPUs?",
                  "options": [
                    "Program Counter (PC)",
                    "Stack Pointer (SP)",
                    "Memory Address Register (MAR)",
                    "Random Access Memory (RAM)"
                  ],
                  "answer": 3
                },
                {
                  "id": 77,
                  "question": "Which technology allows multiple CPU cores to work together on a single task?",
                  "options": ["Multi-core processing", "Hyperthreading", "Parallel processing", "Overclocking"],
                  "answer": 0
                },
                {
                  "id": 78,
                  "question": "Which CPU architecture is commonly used in supercomputers and high-performance computing?",
                  "options": ["x86", "ARM", "MIPS", "PowerPC"],
                  "answer": 3
                },
                {
                  "id": 79,
                  "question": "Which of the following is responsible for temporarily storing intermediate calculation results in the CPU?",
                  "options": ["Registers", "Cache", "RAM", "Hard Drive"],
                  "answer": 0
                },
                {
                  "id": 80,
                  "question": "Which of the following is responsible for transferring data between the CPU and other components?",
                  "options": ["Data Bus", "Control Bus", "Address Bus", "System Bus"],
                  "answer": 3
                },
                {
                  "id": 81,
                  "question": "Which component stores the address of the next instruction to be executed by the CPU?",
                  "options": [
                    "Program Counter (PC)",
                    "Stack Pointer (SP)",
                    "Memory Address Register (MAR)",
                    "Instruction Register (IR)"
                  ],
                  "answer": 0
                },
                {
                  "id": 82,
                  "question": "Which of the following is NOT a step in the instruction execution cycle of a CPU?",
                  "options": ["Fetch", "Decode", "Execute", "Store"],
                  "answer": 3
                },
                {
                  "id": 83,
                  "question": "Which CPU feature allows it to execute multiple threads simultaneously?",
                  "options": ["Hyperthreading", "Overclocking", "Cache coherency", "Pipelining"],
                  "answer": 0
                },
                {
                  "id": 84,
                  "question": "Which technology allows a CPU to operate at a frequency higher than its rated speed?",
                  "options": ["Overclocking", "Hyperthreading", "Parallel processing", "Virtualization"],
                  "answer": 0
                },
                {
                  "id": 85,
                  "question": "Which of the following is responsible for storing the data currently being processed by the CPU?",
                  "options": ["Registers", "Cache", "RAM", "Hard Drive"],
                  "answer": 0
                },
                {
                  "id": 86,
                  "question": "Which component of a computer is responsible for permanently storing instructions and data?",
                  "options": ["Hard Drive", "RAM", "Cache", "CPU"],
                  "answer": 0
                }
              ];

export default function CompArchQuizPage() {
  return <QuizContent questions={questions} courseTitle="Computer Architecture" />;
} 