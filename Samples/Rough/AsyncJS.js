// Callback functions 
//Theyt are basically , calling a function from another function.

function first(callback){
    console.log("First");
    callback();
}
function second (){
    console.log("Second");
   
}

first(second);


//Example 2 Ice cream shop, having two 
//functions. order and production. order
let stocks ={
fruits: ["apple","orange","banana"],
liquids: ["water","milk","juice"],
toppings:["chocolate","nuts","sprinkles"]

};

let order = (fruitName , callProduction)=>{
    setTimeout ( ()=>{
    
        console.log(`Order placed call production for ${stocks.fruits[fruitName]} shake`);
        
    },2000 );
    callProduction()
   
};
let production = ()=>{
    setTimeout(()=>{
        console.log("Order got starting production");
        setTimeout(()=>{
            console.log("Fruit is chopped");
            setTimeout(()=>{
                console.log("Machine has been started");
                
                setTimeout(()=>{
                    console.log(`${stocks.liquids[1]} and ${stocks.fruits[1]} is mixed`)
                    setTimeout(()=>{
                        console.log(` Adding ${stocks.toppings[0]} toppings`)
                        setTimeout(()=>{
                            console.log("Ice cream is ready");
                        },2000)
                    }, 2300)
                },15000)
            },2000)
        },2000);
    },5000)
    
};

order(0 , production);

// In the above example there are two functions , order and production.
//production is passed as an argument to order function using concept of 
//callback. 
//Inside order function, function output has given a delay of 2 seconds.
//while the production functoin has given a delay of 5` seconds.
//This is called callback HELL