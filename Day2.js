const days = ['sunday','monday','tuesday','wednesday']
/* console.log(days[2]) */
/*
days.push('thrusday')
days.pop()
days.unshift("hello")
days.shift()
*/


/*const data = days.slice(1,3)
console.log(days)

days.splice(1,1,'hii')
console.log(days)

days.splice(3,1,'bye')
console.log(days)
*/

const data = [1,2,3,4,5,6]
/* output =[1,'hello','bye','world',5,6]  */

// const vowels = ['N','A','M','X','O']

// vowels.splice(0,5,14,1,13,24,15)
// console.log(vowels)

// const text = 'I am from UK'
// const splittedData = text.split(" ")
// console.log(splittedData)

const languages = ['js','php','c']
languages.splice(1,0,'html')
console.log(languages)
/* splice used garra data bich ma halna sakinxaaa */


// data.splice(1,3,'hello','bye','world')
// console.log(data)


/*
var name = "Namxo"
function greet(){
    console.log("Namxo")
}

class person{
    name = "namxo"
    greet(){
        console.log("Namxo")
    }
*/

// const person ={
//     name : "Namxo",
//     address : "UK",
//     nationality : "korean",

/* object ma object.freeze halyoo vanna data change garna mildaina */

// console.log(person.name)

// person.age = 0
// console.log(person)

const datas ={
    name : ['Namx','Namee']
}
datas.name.push('sanjeev')
console.log(datas)

const text = [
    {
        name : 'Namx'
    },
    {
        name : 'namxee'
    }
]

text.push({
    name : 'sanjeev'
})
console.log(text)

const test2 = {
    name : ['namx','namxee','sanjeev']
}
test2.name.splice(0,3,1,2,3)
console.log(test2)