#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Person class
class Person {
  personality: string = "Mystrey";
  answer: string;

  constructor(answer: string) {
    this.answer = answer;
  }

  getPersonality() {
    if (this.answer === "You would rather keep to yourself") {
      this.personality = "Introvert";
      console.log(chalk.bold.hex("#071CB0")(`You are an ${this.personality}`));
    } else {
      this.personality = "Extravert";
      console.log(chalk.bold.hex("#071CB0")(`You are a ${this.personality}`));
    }
  }
}

// Student class inherit by person class
class Student extends Person{
    private _name = ""
    
    public get userName(): string{
        return this._name
    }
    public set userName(value: string){
        this._name = value
    }

    getPersonality() {
        if (this.answer === "You would rather keep to yourself") {
          this.personality = "Introvert";
          console.log(chalk.bold.hex("#071CB0")(`\nYour name is ${chalk.italic(this._name)} and your personality is "${chalk.green.italic(this.personality)}"`));
        } else {
          this.personality = "Extravert";
          console.log(chalk.bold.hex("#071CB0")(`\nYour name is ${chalk.italic(this._name)} and your personality is "${chalk.green.italic(this.personality)}"`));
        }
      } 
}

// Welcome Message
console.log(chalk.bold.hex("#071CB0")("***********************************************************"));

console.log(chalk.bold.italic.hex("#071CB0")("\n\t\tWELCOME TO OOP MY PERSONALITY\n"));

console.log(chalk.bold.hex("#071CB0")("***********************************************************"));

// Ask for name
let ans = await inquirer.prompt({
    name: "ans",
    message: chalk.bold.yellow("\nEnter your name"),
    type: "input"
}) 

// Ask for habbit
let userInput = await inquirer.prompt(
  {
    name: "ans",
    message: chalk.bold.yellow("\nPlesae select a type of personality"),
    type: "list",
    choices: [
      "You like to talk to others",
      "You would rather keep to yourself",
    ],
  },
);

// First object only prints personality
// let person = new Person(userInput.ans)
// person.getPersonality() // Comment for show one statement

// Second object prints name and personality
let student = new Student(userInput.ans)
student.userName = ans.ans
student.getPersonality()
