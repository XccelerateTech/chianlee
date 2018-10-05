class Person {
	constructor(option) {
		this.age = option.age;
		this.name = option.name;
	}

	info() {
		return "This person is called " + this.name + " and is " + this.age + " years old.";
	}
}

class Student extends Person {
  constructor(option) {
    super(option);
    this.gpa = option.gpa;
  }

  info() {
    return "The student is called " + this.name + " and is " + this.age + " years old. He has an overall GPA of " + this.gpa + " in the university.";
  }
}

const person = new Person( {age: 44, name: 'Tom' });

person.info() // The person is called Tom and is 44 years old

const student = new Student({ age: 23, name: 'Benny', gpa: 3.75});
student.info();