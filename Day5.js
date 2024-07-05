//reduce method
const num = [1,2,3,4,5,]

const sum = num.reduce((accumulator,num)=>{
 return num + accumulator
},2)


console.log(sum)

const products = [
    {
        product : 'A',
        price : 200,
        qty : 2
    },
    {
        product : 'B',
        price : 300,
        qty : 7
    },
    {
        product : 'A',
        price : 1100,
        qty : 8
    }
]
// const tan = products.reduce((cos,sin)=>{
//     return cos + sin.price*sin.qty
// },0)
// console.log(tan)

//next method 

const tan = products.reduce((cos,sin)=>{
    cos.total = sin.price * sin.qty + cos.total
    cos.totalQty = sin.qty + cos.totalQty
    return cos 
},{total : 0, totalQty : 0})

//working process
// 200*2 + 0 = 400
// 300*7 + 400 = 2500
// 1100*8 + 2500 = 11300
console.log(tan)

const reviews = [
    {
        rating : 2
    },
    {
        rating : 4
    },
    {
        rating : 5
    }
]

function review(hehe){
const rururating = hehe.reduce((avrg,haha)=>{
    return haha.rating + avrg
},0)
    const tutu = rururating/reviews.length
    console.log(tutu)
}
review(reviews)
