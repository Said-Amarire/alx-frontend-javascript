// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // allows dynamic properties like contract
}

// Example Teacher
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Task 2: Director interface extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Example Director
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Task 3: printTeacher function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// Traditional function syntax, exact return string required
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

// Example usage
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe

// -----------------------------------
// Task 4: StudentClass

// Interface for the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: 'Alice', lastName: 'Johnson' });
console.log(student.displayName());    // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working
