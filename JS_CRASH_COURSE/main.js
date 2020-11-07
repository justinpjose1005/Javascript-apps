
//Strings
const s = 'Hello World' 
const l = 'tech, computer, it, code'
console.log(s.length)                       //11
console.log(s.toUpperCase())                //HELLO WORLD
console.log(s.toLowerCase())                //hello world
console.log(s.substring(0,4).toUpperCase()) //HELL
console.log(s.split(''))                    //["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
console.log(l.split(', '))                  //["tech", "computer", "it", "code"]

/*
// Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers)                        //[1, 2, 3, 4, 5]
const fruits = ['apples','oranges','pears']
console.log(fruits)                         //["apples", "oranges", "pears"]
console.log(fruits[1])                      //oranges
fruits[3] = 'grapes'
console.log(fruits)                         //["apples", "oranges", "pears", "grapes"]
fruits.push("mangos")
console.log(fruits)                         //["apples", "oranges", "pears", "grapes", "mangos"]
fruits.unshift("strawberries")
console.log(fruits)                         //["strawberries", "apples", "oranges", "pears", "grapes", "mangos"]
fruits.pop()
console.log(fruits)                         //["strawberries", "apples", "oranges", "pears", "grapes"]
console.log(Array.isArray(fruits))          //true
console.log(Array.isArray('hello'))         //false
console.log(fruits.indexOf('oranges'))      //2
*/

/*
//Objects
const person = {
    firstName: 'Justin',
    lastName: 'Jose',
    age: 30,
    hobbies: ['music','movies','sports'],
    address: {
        street: 'Manipal County Road',
        city: 'bangalore',
        status: 'KA'
    }
}
console.log(person)
console.log(person.firstName, person.lastName)  //Justin Jose
console.log(person.hobbies[1])                  //movies
console.log(person.address.city)                //bangalore

const { firstName, lastName, address: { city } } = person;
console.log(firstName)                          //Justin
console.log(city)                               //bangalore
person.email = 'justin@gmail.com'               //Add properties to person object
console.log(person)

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    },
]
console.log(todos)
console.log(todos[1].text)              //Meeting with boss
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)                   //array converted to JSON format

for (let todo of todos) {
    console.log(todo.text)
}

//High order array methods for iterating through arrays
//forEach - loop through an array
todos.forEach(function(todo) {
    console.log("forEach Loop "+todo.text)
})

//map - create new array from an array
const todoText = todos.map(function(todo) {
    return todo.text
})
console.log(todoText)

//filter - create new array from a conditon
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true
})
console.log(todoCompleted)

//Print only the text
const todoCompleted2 = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) {
    return todo.text
})
console.log(todoCompleted2)
*/

/*
//Functions
const addNums = (num1, num2) => num1 + num2
console.log(addNums(5,4))
*/

/*
//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//instantiate object
const person1 = new Person('Justin','Jose','05-10-1999')
const person2 = new Person('Vanessa','J','10-05-1999')
console.log(person1.firstName)
console.log(person1.dob)                //Mon May 10 1999 00:00:00 GMT+0530 (India Standard Time)
console.log(person1.dob.getFullYear())  //1999
console.log(person1.getBirthYear())     //1999
console.log(person1.getFullName())      //Justin Jose
console.log(person1)
*/

/*
//DOM
//Single Element
const form = document.getElementById('my-form')
console.log(form)
console.log(document.querySelector('.container'))
console.log(document.querySelector('h1'))

//Multiple Element Selector
console.log(document.querySelectorAll('.item'))

//looping using selectors
const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item))

const ul = document.querySelector('.items')
//ul.remove()
//ul.lastElementChild.remove()
ul.firstElementChild.textContent = "hello"
ul.children[1].innerText = 'Justin'
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn')
btn.style.background = 'red'
*/

/*
//button onClick
const btn = document.querySelector('.btn')
btn.addEventListener('mouseover',(e) => {
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items')
    .lastElementChild.innerHTML = "<h1>Hello</h1>"
})
*/

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit',onsubmit)

function onsubmit(e) {
    e.preventDefault()
    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all the fields first'
        setTimeout(() => msg.remove(), 3000)
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)

        //clear fields
        nameInput.value = ''
        emailInput.value = ''
    }
}