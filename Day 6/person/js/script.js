class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }
}

// Example usage:
let person1 = new Person("Raja", "Durai", 23, "vrajadurai.248@gmail.com");
console.log(person1.getFullName()); // Output: Raja Durai
console.log(person1.getAge()); // Output: 23
console.log(person1.getEmail()); // Output: vrajadurai.248@gmail.com

person1.updateEmail("rajadurai.8478@gmail.com");
console.log(person1.getEmail()); // Output: vrajadurai.248@gmail.com