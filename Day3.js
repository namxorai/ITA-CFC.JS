const isRaining = true

if(isRaining){
    console.log("Carry umbrella")
}
else{
    console.log("Don't carry umbrella")
}

//tempary operation
// const result = isRaining ? "Carry umbrella" : "Don't carry umbrella"
// console.log(result)

//short circuit
isRaining && console.log("Carry umbrella")

// const age =21
// if(age > 18){
//     console.log("you can cast vote")
// }
// else{
//     console.log("you cannot cast vote")
// }

// const age ="21"
// if(age === 21){
//     console.log("Age equals 21")
// }
// else{
//     console.log("Age doesn't equals 21")
// }

const temperature = 27
if(temperature > 30){
    console.log("Hot")
}
else if(temperature > 20){
    console.log("Moderate")
}
else{
    console.log("Cool")
}

// const grade = 70
// if(grade > 80){
//     console.log("A")
// }
// else if(grade > 70){
//     console.log("B+")
// }
// else if(grade > 60){
//     console.log("B")
// }
// else{
//     console.log("fail")
// }

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
//first method
// for(var i = 0; i < days.length; i++){
// console.log(days[i])
// }

//second method
for(let abc of days){
    console.log(abc)
}

const data = {
    name : "Manish",
    age : 22,
    address : "Itahari"
}

for(let key in data){
    console.log(key, "is" ,data[key])
    //another way
    // console.log(data[key])
}

// console.log(1+2)
// console.log(3+5)
// console.log(8+2)

//regular function
function add(a,b,c){
    console.log(a + b + c)
}

add(1,2,3)

add(2,8,9)

//named regular function

// const add = function(a,b){
//     console.log(a + b)
// }
// const add = (a,b)=>{
//     console.log(a + b)
// }
//()=>{
    //console.log("hello world")
//}

const numbers = [1,2,3,4,5]
function number(numbers){
    //output[1,2,3,4,5]
    for( let asf of numbers ){
       console.log(asf)
    }
   //ouput[1,4,9,16,25]
   for( let data of numbers){
    console.log(data*data)
   }
}
number(numbers)
const info =
{
    status: 200,
    message: "Code found",
    code: [
        {
            _id: "668510da18d90581711b6292",
            text: "test\n",
            userId: "f959757",
            title: "test",
            ipAddress: "49.244.110.12",
            createdAt: "2024-07-03T08:50:34.704Z"
           
        }
    ]
}
function haha(info){
    console.log(info.code[0].userId)
    console.log(info.code[0].title)
    console.log(info.code[0].ipAddress)
}
haha(info)


