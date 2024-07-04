//callback function
// haha(function(){

// })

//higher order function(HOF)
 const fruits = ["mango","Apple","Orange"]

 //foreach 
//  fruits.forEach(function(fruit){
//     console.log(fruit)
//  })

//map
//  fruits.map(function(fruit){
//     console.log(fruit)
//  })

 //reduce


//  //output square of nums 
//  const nums = [1,2,3,4,5]

//  const square=[ ]

//  nums.forEach(function(num){
//     square.push(num*num)
//  })
//  console.log(square)

 const datas= [
    {
        fristname : "Manish",
        lastname : "Basnet",
        address : "Itahari"
    },

    {
        fristname : "Pranjal",
        lastname : "Sharma",
        address : "basbari"
    },

    {
        fristname : "Bob",
        lastname : "Marley",
        address : "Balgram"
    }
 ]

 //map use garerw

 const huhu = datas.map((naam)=>{
    return{
        ...naam,
        Fullname : naam.fristname + " " + naam.lastname
    }
 })
 console.log(huhu)

//  const result = datas.map((object)=>{
//     return(
//         fullname = object.fristname + " " + object.lastname
//     )
//  })
// console.log(result)

 //foreach used
//  datas.forEach((data)=>{
//     console.log(data.fristname + " " + data.lastname)
//  })

//  const nums2 = [2,4,6,8,]
//  const squared = nums2.map((num)=>{
//     return num * num
//  })
//  console.log(nums2)
//  console.log(square)

 const numbers = [1,2,3,4,5]
 const haha = numbers.map((hehe)=>{
    return{
        text : 'A',
        number : hehe
    }
 })
 console.log(haha)

 //filter method
 
//  const numberData = [1,2,3,4,5,6,7,8,9,10]
//  const oddNumbers = numberData.filter((number)=>{
//     return number%2 !== 0
//  })
//  console.log(oddNumbers)

const number = [1,2,3,4,5,6,7,8,9,10]
 const lastdata = number.filter((namu)=>{
    return namu>5
 })
 console.log(lastdata)

//  const books = [
//     {
//         title : "You can win",
//         author : 'shiv khera',
//         publishedAt : 2001
//     },
//     {
//         title : "Think like a monk",
//         author : 'Jay shetty',
//         publishedAt : 2022
//     },
//     {
//         title : "Cashflow quadrant",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 1909
//     },
//     {
//         title : "You can win2",
//         author : 'shiv khera',
//         publishedAt : 1990
//     },
//     {
//         title : "Think like a monk2",
//         author : 'Jay shetty',
//         publishedAt : 1999
//     },
//     {
//         title : "Cashflow quadrant2",
//         author : 'Robert T. Kiyosaki',
//         publishedAt : 2010
//     }
// ]
// const jiji = books.filter((gigi)=>{
//     return gigi.publishedAt > 2000
// })
// console.log(jiji)

// const files = ["index.html","app.java","app.js","style.css","text.js"]
// const bids = files.filter((ila)=>{
//     return ila.endsWith(".js")
// })
// console.log(bids)

// const lasttask = [1,2,null,undefined,"manish","haha","hehe"]
// const chipi = lasttask.filter((chapa)=>{
//     return chapa != null && chapa != undefined
// })
// console.log(chipi)

const lastData =[
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]

const sam = lastData.filter((ram)=>{
    return ram.marks > 500 && ram.name.endsWith("sh") && ram.status === "pass"
})
console.log(sam)