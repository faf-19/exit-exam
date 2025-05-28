import { QuizContent } from "../[course]/quiz-content";

const questions = [
  {
    id: 1,
    question: "What is the implicit return type of constructor?",
    options: ["Void", "Public","private","none"],
    answer: 0,
  },
  {
    id: 2,
    question: "When is the object created with a new keyword?",
    options: ["Compile time", "Run time","none","none"],
    answer: 1,
  },
  {
    id: 3,
    question: "Which of these is not a feature of OOP?",
    options: ["Data encapsulation", "Data abstraction", "Inheritance", "None of the above"],
    answer: 3,
  },
  {
    id: 4,
    question: "Which features of OOP are extensively used in implementing inheritance?",
    options: ["Dynamic binding", "Abstraction", "Operator overloading", "Polymorphism"],
    answer: 0,
  },
  {
    id: 5,
    question: "Member variables are initialized to zero when the first object of its class is created?",
    options: ["Static", "Local", "Global", "External"],
    answer: 0,
  },
  {
    id: 6,
    question: "A static member function can be called using the ____ name.",
    options: ["Class name", "Object name", "Constructors", "Main method"],
    answer: 0,
  },
  {
    id: 7,
    question: "When an object is created, initialization needs to be done which is automatically done by the ____ function?",
    options: ["Constructor", "Destructor", "Main method", "Member"],
    answer: 0,
  },
  {
    id: 8,
    question: "Which of these is a super class of all exceptional type classes?",
    options: ["String", "RuntimeExceptions", "Throwable", "Cachable"],
    answer: 2,
  },
  {
    id: 9,
    question: "Which of these classes is related to all the exceptions that can be caught by using catch?",
    options: ["Error", "Exception", "RuntimeException", "All of the mentioned"],
    answer: 1,
  },
  {
    id: 10,
    question: "Which of these keywords is used to generate an exception explicitly?",
    options: ["try", "finally", "throw", "catch"],
    answer: 2,
  },
  {
    id: 11,
    question: "What will be the output of the following program?",
    options: [
      "10, 5, 0, 20, 0",
      "10, 30, 20",
      "60, 5, 0, 20",
      "60, 30, 0, 20, 0"
    ],
    answer: 3,
  },
  {
    id: 12,
    question: "Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
    options: [
      "javap tool",
      "javaw command",
      "Javadoc tool",
      "javah command"
    ],
    answer: 2,
  },
  {
    id: 13,
    question: "Which option is false about the final keyword?",
    options: [
      "A final method cannot be overridden in its subclasses.",
      "A final class cannot be extended.",
      "A final class cannot extend other classes.",
      "A final method can be inherited."
    ],
    answer: 2,
  },
  {
    id: 14,
    question: "Which of these classes are the direct subclasses of the Throwable class?",
    options: [
      "RuntimeException and Error class",
      "Exception and VirtualMachineError class",
      "Error and Exception class",
      "IOException and VirtualMachineError class"
    ],
    answer: 2,
  },
  {
    id: 15,
    question: "Which keyword is used for accessing the features of a package?",
    options: [
      "package",
      "import",
      "extends",
      "export"
    ],
    answer: 1,
  },
  {
    id: 16,
    question: "Which of these access specifiers can be used for an interface?",
    options: [
      "Public",
      "Protected",
      "Private",
      "All of the mentioned"
    ],
    answer: 0,
  },
  {
    id: 17,
    question: "Which of the following is the correct way of implementing an interface salary by class manager?",
    options: [
      "class manager extends salary {}",
      "class manager implements salary {}",
      "class manager imports salary {}",
      "none of the mentioned"
    ],
    answer: 1,
  },
  {
    id: 18,
    question: "Which of this keyword must be used to inherit a class?",
    options: [
      "Super",
      "This",
      "Extent",
      "extends"
    ],
    answer: 3,
  },
  {
    id: 19,
    question: "Package in Java contains a set of classes for implementing graphical user interface, which includes classes for windows, buttons, lists, menus, and so on.",
    options: [
      "java.util",
      "java.awt",
      "java.net",
      "java.lang"
    ],
    answer: 1,
  },
  {
    id: 20,
    question: "Which of these methods can be used to know which key is pressed?",
    options: [
      "getActionEvent()",
      "getActionKey()",
      "getModifier()",
      "getKey()"
    ],
    answer: 3,
  },
  {
    id: 21,
    question: "JFrame myFrame = new JFrame(); Any command (such as the one listed above) which creates a new object of a specific class (in this case a new JFrame object called myFrame) is generally called a ...",
    options: [
      "Constructor",
      "Layout manager",
      "Parameterized Parameter",
      "AWT"
    ],
    answer: 0,
  },
  {
    id: 22,
    question: "In Java, what do you call an area on the screen that has nice borders and various buttons along the top border?",
    options: [
      "Window",
      "A screen",
      "Border layout",
      "A frame"
    ],
    answer: 3,
  },
  {
    id: 23,
    question: "Suppose you are developing a Java Swing application and want to toggle between various views of the design area. Which views are present for the users to toggle?",
    options: [
      "Design View",
      "Requirements View",
      "Source View",
      "Management View"
    ],
    answer: 0,
  },
  {
    id: 24,
    question: "The size of a frame on the screen is measured in:",
    options: [
      "Inches",
      "Nits",
      "Dots",
      "Pixels"
    ],
    answer: 3,
  },
  {
    id: 25,
    question: "Thread priority in Java is?",
    options: [
      "Integer",
      "Float",
      "Double",
      "long"
    ],
    answer: 0,
  },
  {
    id: 26,
    question: "What is the name of the method used to start a thread execution?",
    options: ["resume();", "run();", "start();", "init();"],
    answer: 2,
  },
  {
    id: 27,
    question: "What is the valid range of priority of a thread in Java multi-threading?",
    options: ["1 to 10", "0 to 10", "0 to 9", "1 to 9"],
    answer: 2,
  },
  {
    id: 28,
    question: "Which class cannot create its instance?",
    options: ["Parent class", "Nested class", "Anonymous class", "Abstract class"],
    answer: 3,
  },
  {
    id: 29,
    question: "Which of these statements is incorrect?",
    options: [
      "Two threads in Java can have the same priority",
      "A thread can exist only in two states, running and blocked",
      "By multitasking, CPU idle time is minimized, and we can take maximum use of it",
      "By multitasking, CPU idle time is minimized, and we can take maximum use of it"
    ],
    answer: 1,
  },
  {
    id: 30,
    question: "Which of the following methods is not used to suspend the execution of a thread?",
    options: ["sleep()", "wait()", "yield()", "join()"],
    answer: 2,
  },
  {
    id: 31,
    question: "Which of the following is the correct way of importing an entire package ‘pkg’?",
    options: ["Import pkg.", "Import pkg.", "import pkg.*", "Import pkg.*"],
    answer: 2,
  },
  {
    id: 32,
    question: "Which of the following is incorrect statement about packages?",
    options: [
      "Interfaces are specified public if they are to be accessed by any code in the program.",
      "Interfaces specify what class must do but not how it does.",
      "All variables in interface are implicitly final and static.",
      "All variables are static and methods are public if interface is defined public."
    ],
    answer: 3,
  },
  {
    id: 33,
    question: "Which of the following packages is used to include classes to create user interface like Button and Checkbox?",
    options: ["java.io", "java.awt", "java.net", "java.lang"],
    answer: 1,
  },
  {
    id: 34,
    question: "Java Source Code is compiled into ______________.",
    options: ["Obj", "Exe", "Sourcecode", "Bytecode"],
    answer: 3,
  },
  {
    id: 35,
    question: "Which of the tools is used to compile java code?",
    options: ["Java", "Jar", "Javac", "Javadoc"],
    answer: 2,
  },
  {
    id: 36,
    question: "How to compile java code in command prompt?",
    options: ["java filename", "javac filename", "java filename.java", "javac filename.java"],
    answer: 3,
  },
  {
    id: 37,
    question: "Automatic type conversion in Java takes place when:",
    options: [
      "Two types are compatible and size of destination type is equal to source type.",
      "Two types are compatible and size of destination type is larger than source type.",
      "Two types are compatible and size of destination type is shorter than source type.",
      "All of the above"
    ],
    answer: 1,
  },
  {
    id: 38,
    question: "Which of these cannot be used for a variable name in Java?",
    options: ["identifier & keyword", "Keyword", "Identifier", "none of the mentioned"],
    answer: 0,
  },
  {
    id: 39,
    question: "Which of the following is a type of polymorphism in Java?",
    options: ["Multiple polymorphism", "Compile time polymorphism", "Runtime polymorphism", "None of the above"],
    answer: 1,
  },
  {
    id: 40,
    question: "Runtime polymorphism feature in Java is:",
    options: ["method overriding", "method overloading", "operator overloading", "constructor overloading"],
    answer: 0,
  },
  {
    id: 41,
    question: "Encapsulation concept in Java is:",
    options: ["method hiding", "Hiding constructor", "Hiding complexity", "None of the above"],
    answer: 2,
  },
  {
    id: 42,
    question: "Which of the below is an invalid identifier with the main method?",
    options: ["final", "static", "private", "public"],
    answer: 0,
  },
  {
    id: 43,
    question: "Which system property stores installation directory of JRE?",
    options: ["user.home", "java.home", "user.dir", "java.class.path"],
    answer: 1,
  },
  {
    id: 44,
    question: "How to use environment properties in the class?",
    options: ["@Variable", "@Property", "@Autowired", "@Environment"],
    answer: 3,
  },
  {
    id: 45,
    question: "Which of these keywords is used to refer to member of base class from a subclass?",
    options: ["super", "final", "this", "None of the mentioned"],
    answer: 0,
  },
  {
    id: 46,
    question: "Inheritance relationship in Java language is:",
    options: ["Is-A", "Has-A", "Association", "None"],
    answer: 0,
  },
  {
    id: 47,
    question: "What would be the result if a class extends two interfaces and both have a method with the same name and signature?",
    options: ["Runtime error", "Compile time error", "Code runs successfully", "None"],
    answer: 1,
  },
  {
    id: 48,
    question: "Which of these packages contains the abstract keyword?",
    options: ["java.lang", "java.util", "java.io", "java.system"],
    answer: 0,
  },
  {
    id: 49,
    question: "All classes in Java are inherited from which class?",
    options: ["java.lang.class", "java.class.inherited", "java.class.object", "java.lang.Object"],
    answer: 3,
  },
  {
    id: 50,
    question: "Which of these is the correct way of calling a constructor having no parameters, of superclass A by subclass B?",
    options: ["super(void);", "superclass();", "super.A();", "super();"],
    answer: 3,
  },
  {
    id: 51,
    question: "What is the output of the below Java program on the references of Superclass and Subclass?",
    options: [
      "FOOD FOOD FOOD FOOD",
      "FOOD FOOD TOASTED FOOD",
      "FOOD TOASTED FOOD FOOD",
      "Compiler error"
    ],
    answer: 1,
  },
  {
    id: 52,
    question: "What will be the output of the following Java program?",
    options: [
      "2 2",
      "3 3",
      "2 3",
      "3 2"
    ],
    answer: 3,
  },
  {
    id: 53,
    question: "What will be the output of the following Java program?",
    options: [
      "1 2",
      "2 1",
      "Runtime Error",
      "Compilation Error"
    ],
    answer: 0,
  },
  {
    id: 54,
    question: "Which of these methods of class String is used to compare two String objects for their equality?",
    options: ["equals()", "Equals()", "isequal()", "Isequal()"],
    answer: 0,
  },
  {
    id: 55,
    question: "Java String object cannot be changed after creation as it is marked __________.",
    options: ["final", "Constant", "transient", "volatile"],
    answer: 0,
  },
  {
    id: 56,
    question: "Method used to register a keyboard event listener.",
    options: ["KeyListener()", "addKistener()", "addKeyListener()", "eventKeyboardListener()"],
    answer: 2,
  },
  {
    id: 57,
    question: "Which of these methods are used to register a mouse motion listener?",
    options: ["addMouse()", "addMouseListener()", "addMouseMotionListener()", "eventMouseMotionListener()"],
    answer: 2,
  },
  {
    id: 58,
    question: "Which of these events is generated when a button is pressed?",
    options: ["KeyEvent", "ActionEvent", "WindowEvent", "AdjustmentEvent"],
    answer: 1,
  },
  {
    id: 59,
    question: "Which of these events is generated when the window is closed?",
    options: ["TextEvent", "FocusEvent", "MouseEvent", "WindowEvent"],
    answer: 3,
  },
  {
    id: 60,
    question: "Which method can be defined only once in a program?",
    options: ["static method", "main method", "finalize method", "private method"],
    answer: 1,
  },
  {
    id: 61,
    question: "The main method should be static for what reason?",
    options: [
      "It can be accessed easily by the class loader.",
      "It can be executed without creating any instance of the class.",
      "It can be accessed by every method or variable without any hindrance.",
      "None of the above"
    ],
    answer: 1,
  },
  {
    id: 62,
    question: "Which one creates an anonymous inner class from within class Bar?",
    options: [
      "Boo f = new Bar() {}",
      "Boo f = new Boo(24) {}",
      "Bar f = new Boo(String s) {}",
      "Boo f = new Boo.Bar(String s) {}"
    ],
    answer: 0,
  },
  {
    id: 63,
    question: "When the operators have the same priority, they are evaluated from:",
    options: ["left to right", "right to left", "any of the above", "none of the above"],
    answer: 0,
  },
  {
    id: 64,
    question: "Which feature of Java describes that its programs will not crash because of its exception handling and memory management?",
    options: ["Distributed", "Simple", "Robust", "Portable"],
    answer: 2,
  },
  {
    id: 65,
    question: "Which feature interacts one object with another object?",
    options: ["Message reading", "Message passing", "Data transfer", "Data binding"],
    answer: 1,
  },
  {
    id: 66,
    question: "Which type of modifier is visible in all classes in the same package and subclass in another package?",
    options: ["Public", "Private", "Protected", "default (none)"],
    answer: 0,
  },
  {
    id: 67,
    question: "In inheritance, which is the most significant feature that OOP used?",
    options: ["Code efficiency", "Code reusability", "Code readability", "Flexibility"],
    answer: 1,
  },
  {
    id: 68,
    question: "Which of the following does not have a body?",
    options: ["Abstract method", "Constructor method", "Class", "Interface"],
    answer: 0,
  },
  {
    id: 69,
    question: "Which of these access specifiers can be used for an interface?",
    options: ["Public", "Protected", "Private", "default (none)"],
    answer: 0,
  },
  {
    id: 70,
    question: "One of the following keywords is used by a class to use an interface?",
    options: ["extends", "imports", "implements", "Uses"],
    answer: 2,
  },
  {
    id: 71,
    question: "One of the following statements is not true?",
    options: [
      "No method bodies in Interface",
      "No method body’s in abstract class",
      "Multiple parent interfaces",
      "Only one parent class"
    ],
    answer: 1,
  },
  {
    id: 72,
    question: "Which of the following OOP concepts allows the same method to take more than one form?",
    options: ["Inheritance", "Polymorphism", "Data abstraction", "Encapsulation"],
    answer: 1,
  },
  {
    id: 73,
    question: "The 'super' keyword in Java is used to:",
    options: ["Access instance of child class", "Access instance of the parent class", "Access instance of friend class", "Access instance of the same class"],
    answer: 1,
  },
  {
    id: 74,
    question: "Which feature of OOPS describes the reusability of code?",
    options: ["Abstraction", "Encapsulation", "Polymorphism", "Inheritance"],
    answer: 3,
  },
  {
    id: 75,
    question: "Which of the following is a valid identifier in Java?",
    options: ["3hour", "Hour3", "Hour@wage", "cast"],
    answer: 1,
  },
  {
    id: 76,
    question: "Which feature of Java is known as 'Write once, run anywhere'?",
    options: ["Platform independent", "Simple", "Robust", "Distributed"],
    answer: 0,
  },
  {
    id: 77,
    question: "One of the following is false for abstract class?",
    options: [
      "We cannot create objects directly.",
      "All abstract methods must be implemented by subclasses.",
      "All the methods in an abstract class should be abstract methods.",
      "We cannot declare abstract constructors."
    ],
    answer: 2,
  },
  {
    id: 78,
    question: "Which Java method is used to convert an object to string?",
    options: ["createString()", "object.string()", "toString()", "string()"],
    answer: 2,
  },
  {
    id: 79,
    question: "Which of the following class is known as the generic class?",
    options: ["Final class", "Abstract class", "Template class", "Anonymous class"],
    answer: 2,
  },
  {
    id: 80,
    question: "Which of the following OOP concepts binds the code and data together and keeps them secure from the outside world?",
    options: ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation"],
    answer: 3,
  },
  {
    id: 81,
    question: "Which member of the superclass is never accessible to the subclass?",
    options: ["Public member", "Protected member", "Private member", "Friendly member"],
    answer: 2,
  },
  {
    id: 82,
    question: "Which class cannot create its instance?",
    options: ["Parent class", "Anonymous class", "Generic class", "Abstract class"],
    answer: 3,
  },
  {
    id: 83,
    question: "In which type of inheritance, the child or derived class inherits the features of the superclass and simultaneously this child class acts as a superclass for another derived class?",
    options: ["Hybrid inheritance", "Multiple inheritances", "Hierarchical inheritance", "Multilevel inheritance"],
    answer: 3,
  },
  {
    id: 84,
    question: "Consider the following strings: String str1 = 'ethics'; String str2 = 'Ethics'; What is the output of System.out.println(str1.compareTo(str2));",
    options: ["Any positive number", "Any negative number", "0", "Nothing"],
    answer: 1,
  },
  {
    id: 85,
    question: "What is the value of A[1] after execution of the following program: int[] A = {0, 2, 4, 1, 3}; for(int i = 0; i < A.length; i++){ A[i] = A[(A[i] + 3) % A.length]; }",
    options: ["1", "2", "0", "3"],
    answer: 0,
  },
  {
    id: 86,
    question: "What are the contents of arr after the following code has been executed? int [][] arr = { {3,2,1},{1,2,3} }; int value = 0; for (int row = 1; row < arr.length; row++) { for (int col = 1; col < arr[0].length; col++) { if (arr[row][col] % 2 == 1) { arr[row][col] = arr[row][col] + 1; } if (arr[row][col] % 2 == 0) { arr[row][col] = arr[row][col] * 2; } } }",
    options: [
      "{ {6, 4, 2}, {2, 4, 6} }",
      "{ {3, 2, 1}, {1, 4, 6} }",
      "{ {3, 2, 1}, {1, 4, 8} }",
      "{ {4, 4, 2}, {2, 4, 4} }",
      "{ {3, 2, 1}, {2, 4, 4} }"
    ],
    answer: 4,
  },
  {
    id: 87,
    question: "What will be the output of the following code? class Main { public static void main(String args[]) { char array_variable [] = new char[10]; for (int i = 0; i < 10; ++i) { array_variable[i] = 'i'; System.out.print(array_variable[i] + ' '); } } }",
    options: [
      "1 2 3 4 5 6 7 8 9 10",
      "0 1 2 3 4 5 6 7 8 9 10",
      "i j k l m n o p q r",
      "i i i i i i i i i i"
    ],
    answer: 3,
  },
  {
    id: 88,
    question: "What is the output of the following code? class Test extends Exception { } class Main { public static void main(String args[]) { try { throw new Test(); } catch(Test t) { System.out.println('Got the Test Exception'); } finally { System.out.println('Inside finally block '); } } }",
    options: [
      "Got the Test Exception Inside finally block",
      "Got the Test Exception",
      "Inside finally block",
      "None"
    ],
    answer: 0,
  },
  {
    id: 89,
    question: "What is the output of this program? class Main { public static void main(String args[]) { try { int i, sum; sum = 10; for (i = -1; i < 3; ++i) { sum = (sum / i); System.out.print(i); } } catch(ArithmeticException e) { System.out.print('0'); } } }",
    options: [
      "-1",
      "0",
      "Compiler Error",
      "-10"
    ],
    answer: 1,
  },
  {
    id: 90,
    question: "Which of the following statements are true about finalize() method?",
    options: [
      "It can be called Zero or one times.",
      "It can be called Zero or more times.",
      "It can be called exactly once.",
      "It can be called one or more times."
    ],
    answer: 0,
  },
  {
    id: 91,
    question: "What will be the output for the following code? Note: file is made in c drive",
    options: [
      "true false",
      "false true",
      "true true",
      "false false"
    ],
    answer: 0,
  },
  {
    id: 92,
    question: "What will be the output of the following code?",
    options: [
      "java",
      "system",
      "java/system",
      "/java/system"
    ],
    answer: 1,
  },
  {
    id: 93,
    question: "Which method is used to write a byte to the current output stream?",
    options: [
      "public void flush()throws IOException",
      "public void close()throws IOException",
      "public void write(int)throws IOException",
      "public void write(byte[])throws IOException"
    ],
    answer: 2,
  },
  {
    id: 94,
    question: "Which of these classes is used to read from a file?",
    options: [
      "FileInputStream",
      "InputStream",
      "BufferedInputStream",
      "BufferedFileInputStream"
    ],
    answer: 0,
  },
  {
    id: 95,
    question: "What is the priority of the thread in the following Java Program?",
    options: [
      "True",
      "False",
      "Main thread interrupted",
      "None of the mentioned"
    ],
    answer: 1,
  },
  {
    id: 96,
    question: "What is an event in the delegation event model used by Java programming language?",
    options: [
      "An event is a class used for defining object, to create events",
      "An event is an object that describes a state change in a source",
      "An event is an object that describes a state change in processing",
      "An event is an object that describes any change by the user and system"
    ],
    answer: 1,
  },
  {
    id: 97,
    question: "After calling wait(2000);, when will thread A become a candidate to get another turn at the CPU?",
    options: [
      "Two seconds after thread A is notified",
      "Two seconds after lock B is released",
      "After thread A is notified or after two seconds",
      "After the lock on B is released or after two seconds"
    ],
    answer: 2,
  },
  {
    id: 98,
    question: "Which one of the following is incorrect?",
    options: [
      "start() method is used to begin execution of the thread",
      "A thread can be formed by a class that extends thread class",
      "A thread can be formed by implementing Runnable interface only",
      "run() method is used to begin execution of a thread before start() method in special case"
    ],
    answer: 3,
  },
  {
    id: 99,
    question: "Which one of the following statements is incorrect?",
    options: [
      "String objects are immutable, they cannot be changed",
      "StringBuffer class is used to store string in a buffer for later use",
      "String object can point to some other reference of String variable",
      "None of the mentioned"
    ],
    answer: 3,
  },
  {
    id: 100,
    question: "Which one of the following statements is incorrect?",
    options: [
      "replace() method replaces all the characters in invoking string with another character.",
      "replace() method replaces all occurrences of one character in invoking string with another character.",
      "replace() method replaces only first occurrences of a character in invoking string with another character.",
      "replace() method replaces last occurrence of a character in invoking string with another character."
    ],
    answer: 3,
  }
];

export default function OOPQuizPage() {
  return <QuizContent questions={questions} courseTitle="Object Oriented Programming" />;
} 