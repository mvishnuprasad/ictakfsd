// Callback functions 
//Theyt are basically , calling a function from another function.

// function first(callback) {
//     console.log("First");
//     callback();
// }
// function second() {
//     console.log("Second");

// }

// first(second);


//Example 2 Ice cream shop, having two 
//functions. order and production. order
let stocks = {
    fruits: ["apple", "orange", "banana"],
    liquids: ["water", "milk", "juice"],
    toppings: ["chocolate", "nuts", "sprinkles"]

};

// let order = (fruitName, callProduction) => {
//     setTimeout(() => {

//         console.log(`Order placed call production for ${stocks.fruits[fruitName]} shake`);

//     }, 2000);
//     callProduction()

// };
// let production = () => {
//     setTimeout(() => {
//         console.log("Order got starting production");
//         setTimeout(() => {
//             console.log("Fruit is chopped");
//             setTimeout(() => {
//                 console.log("Machine has been started");

//                 setTimeout(() => {
//                     console.log(`${stocks.liquids[1]} and ${stocks.fruits[1]} is mixed`)
//                     setTimeout(() => {
//                         console.log(` Adding ${stocks.toppings[0]} toppings`)
//                         setTimeout(() => {
//                             console.log("Ice cream is ready");
//                         }, 2000)
//                     }, 2300)
//                 }, 15000)
//             }, 2000)
//         }, 2000);
//     }, 5000)

// };

// order(0, production);

// In the above example there are two functions , order and production.
//production is passed as an argument to order function using concept of 
//callback. 
//Inside order function, function output has given a delay of 2 seconds.
//while the production functoin has given a delay of 5` seconds.
//This is called callback HELL.
//......................................................................................................


//Promises



//Promises--> Pending state ---> Reject----> .catch ------>
//                 |                                      |
//                 |                                  .finally
//                 |                                      |
//              Resolve--->(Multiple .then stages)--------->


//Promises are used to handle asynchronous operations.
//In this code A function called orders that accept two parameters is 
//created. here time is the time taken to complete the task and work is
//just the simple arrow function that prints the fruits name.
//using the concept of callbacks the arrow function is passed ad callback
//. Inside the orders , rather than simply calling the callback , it is called through 
//resolve

// let isShopOpen = true;
// let orders = (time, work) => {

//     return new Promise((resolve, reject) => {
//         if (isShopOpen) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time)


//         }
//         else {
//             reject(console.log("Shop is closed"))

//         }

//     });
// };

// orders(2000, ()=>{console.log(`${stocks.fruits[0]} is selected by customer`)})

// .then(
//     ()=>{
//         return  orders (0000 , ()=>{console.log(`Production started immediately`)})
//     }
// )

// .then(
//     ()=>{
//         return  orders (2000 , ()=>{console.log(`It took 2 seconds to cut ${stocks.fruits[0]}`)})
//     }
// )

// .then(
//     ()=>{
//         return orders(2000, ()=>{console.log (`Mixing it with ${stocks.liquids[1]}`)})
//     }
// )

// .then(
//     ()=>{
//         return orders(2000, ()=>{console.log (`Starting the machine and making`)})
//     }
// )
// .then(
//     ()=>{
//         return orders(3000 , ()=>{console.log(`${stocks.toppings[1]} is added as topping`)})
//     }
// )
// .then(
//     ()=>{
//         return orders(2000, ()=>{console.log (`Serving the customer`)})
//     }
// )
// //Error handling
// .catch(
//     ()=>{
//         console.log("Customer left the shop")
//     }
// )

// .finally(()=>{
//     setTimeout(()=>{
//         console.log("Day Ended. Sale is done for the day")
//     } , 24000)
// })

// Do not add semicolons between the then catch and finally statements


// async function orders1() {
//     try{
//         await nonExistantFunction();
//     } catch (error) {
//         console.log("error ! Function doesnt exist" );
//     } finally{
//         console.log("finally block runs code anyways");
//     }

// }

// orders1();

let toppingschoice = () => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => { 
                    resolve(
                        console.log("Choose your toppings") 
                    )
                    
                }, 5000
            )
        }
    )
}

async function kitchen() {
console.log("A");
console.log("B");
console.log("C");

// THe above three tasks are done

await toppingschoice(); //Going to finish another function
console.log("D");
console.log("E");
// above tasks will be done only after the toppingschoice function is done
}

kitchen()

console.log("cleaning the dishes");
console.log("cleaning the table");
console.log("taking other orders");