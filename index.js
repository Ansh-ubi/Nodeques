//Remove duplicate values from an array
// const user= [
//     { id: 1, name: 'Aman' },
//     {id:2, name:'Ansh'},
//     { id: 1, name: 'Aman' }
// ]

//const { error } = require("winston");

// const unique = [...new Map(user.map((user => [user.id,user]))).values()];
// console.log(unique);
    

// Count vowels in a string
// function coutEachvowel(str){
//     const vowels = 'aeiou';
//     const result = {a:0,e:0,i:0,o:0,u:0};

//     for(let char of str.toLowerCase()){
//         if(vowels.includes(char)){
//             result[char]++;
//         }
//     }
//     return result;
// }
// console.log(coutEachvowel('Ansh Saravgi'));


//Find maximum and minimum in an array
// const arr = [22,56,78,90,45,23,12,67,89,34,21,10];

// let max = arr[0];
// let min = arr[0];

// for(let num of arr){
//     if(num > max){
//         max = num;
//     }
//      if(num < min){
//         min = num;
//     }
// }
// console.log('Maximum value is:', max);
// console.log('Minimum value is:', min);

// Check if a string is a palindrome
// function plaindromeCheck(str){
//     str = str.toLowerCase();
//      let left = 0;
//      let right = str.length - 1;

//      while(left < right){
//         if(str[left] !== str[right])return false;
//         left++;
//         right--;
//      }
//      return true;
// }
// console.log(plaindromeCheck('Racecar')); //true
// console.log(plaindromeCheck('Ansh')); //false

// Find the sum of all numbers in an array
// const items = [
//     {name:'Bike', price:100},
//     {name:'TV', price:200},
//     {name:'Album', price:10},
// ]
//  const total = items.reduce((accumulator, item) => accumulator + item.price, 0);
//  console.log(total); //310

//Merge two sorted arrays into one sorted array  
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];

// const mergedArray = arr1.concat(arr2).sort((a,b) => a - b);
//  console.log(mergedArray);

//Flatten a nested array of arbitrary depth
// function flattenArray(arr){
//     let result = [];
    
//     arr.forEach(items => {
//         if(Array.isArray(items)){
//             result = result.concat(flattenArray(items));
//         }else{
//             result.push(items);
//         }
       
//     });
//      return result;
// }
// console.log(flattenArray([1,[2,[3,[4]]]]));


//Convert a callback-based function into a Promise-based one
// function getdata(callback){
//     setTimeout(() => {
//         callback(null, 'Data received')
//     },1000)
   
// }
//  getdata((err, result) => {
//     console.log(result)  
// })

// function getdataPromise(){
//     return new Promise((resolve,reject)=>{
//         getdata((err,result) => {
//             if(err)reject(err);
//             else resolve(result);
//         });
//     });
// }


//Implement a custom Array.map function
// Array.prototype.myMap = function(callback){
//     const result = [];

//     for(let i = 0; i  < this.length; i++){
//         if(this.hasOwnProperty(i)){
//         result.push(callback(this[i],i,this))
//     }
// }
// return result;
// }
// const nums = [1,2,3,4,5];
//  const dubbled = nums.myMap((nums , index) => {
//     return nums * 2 ;
//  });

//  console.log(dubbled);

//Implement a debounce utility function
// function debounce (func,delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func.apply(this,args);
//         },delay);
//     };
// }

// function handleSearch(text){
//      console.log("Searching for:", text);
// }
// const debouncedSearch =  debounce(handleSearch,500);

// debouncedSearch("Ansh");
// debouncedSearch("Ansh S");
// debouncedSearch("Ansh Sa");
// debouncedSearch("Ansh Sar");
// debouncedSearch("Ansh Sarav");
// debouncedSearch("Ansh Saravg");
// debouncedSearch("Ansh Saravgi");

//Implement a throttle utility function
// function throttle(func,delay){
//     let lastCall = 0;
//     return function(){
//         const now  = new Date().getTime();
//         if(now - lastCall < delay){
//             lastCall = now;
//             func();
//         }
//     }
// }

// function logMessage() {
//   console.log("Called at", Date.now());
// }

// const throttledLog = throttle(logMessage, 100);

// setInterval(throttledLog, 200);

//Generate Fibonacci sequence up to N terms
// function fibonnaci(n){
//    let a = 0, b = 1, next;
//    for(let i = 0; i<n; i++){
//     console.log(a);
//     next = a +b;
//     a = b;
//     b = next;
//    }
// }
// fibonnaci(10);

//Sort an array using bubble sort without Array.sort()
// function bubbleSort(arr){
//     let n = arr.length;
//     let swapped;
      

//     for(let i= 0; i<n-1;i++){
//         swapped = false;
//         for(let j=0; j<n-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 //swap
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 swapped = true;
//             }
//         }
//         if(!swapped) break;
//     }
//     return arr;
// }

// let arr = [64,34,25,12,22,11,90];
// console.log(bubbleSort(arr));

// function chunkArray(arr,size){
//     let result = [];
//     let chunk = [];

//     for(let i=0; i<arr.length; i++){
//         chunk.push(arr[i]);
//         if(chunk.length === size){
//             result.push(chunk);
//             chunk = [];
//         }
//     }
//     if(chunk.length > 0){
//         result.push(chunk);
//     }
//     return result;
// }
// console.log(chunkArray([1,2,3,4,5,6,7,8,9],4));

/* Implement a simple event emitter class with methods to register, emit, and remove event listeners.
 class EventEmitter{
    constructor(){
        this.event = {};
        
    }
    on(eventName , callback){ // Register an event listener
        console.log("Event registered:", eventName);
        if(!this.event[eventName]){
            console.log("Creating new event:", eventName);
            this.event[eventName] = [];
        }
        this.event[eventName].push(callback);
        console.log("Current listeners for",eventName,":",this.event[eventName].length);

    }
    emit(eventName,data){ // Trigger an event
    if(!this.event[eventName]) return;
    this.event[eventName].forEach(listner => {
        listner(data);
    });
   }
   Off(eventName , callback){ // Remove an event listener
    if(!this.event[eventName]) return;
    this.event[eventName] = this.event[eventName].filter(l => l !== listner);

   }
 }
 const emitter  = new EventEmitter();
function greet(name){ 
    console.log('Hello ,' + name); 

}
emitter.on('greet', greet);  // Registering the event listener
emitter.on('greet', (name) => console.log("Hi", name));
emitter.on('greet', (name) => console.log("Welcome", name));

emitter.emit('greet', (name) => { 
    console.log('Hello', name );
});
emitter.emit('greet', 'Ansh'); // Triggering the event with data
*/



/* Implement a simple HTTP server that can handle GET requests and parse query parameters from the URL. The server should respond with a JSON object containing the parsed query parameters.

const http = require('http');
const { URL } = require('url');

//sample data
const products = [
     { id: 1, name: "Laptop", category:"Electronics", price: 1000 },
      { id: 2, name: "Shoes", category:"fashion", price: 100 },
       { id: 3, name: "Watch", category:"Fashion", price: 200 },
        { id: 4, name: "pizza", category:"Food", price: 230 },
         { id: 5, name: "Phone", category:"Electronics", price: 300 },
];

const server = http.createServer((req,res) =>{
    const url = new URL(req.url, 'http://${req.headers.host}');

    const params = url.searchParams;

    let result = [...products];

    // filtering 
    const category = params.get('category');
    if(category){
        result = result.filter(products => products.category === category);
    }
    // sorting 
    const sort = params.get("sort");
    if(sort === "asc"){
     result.sort((a,b) => a.price - b.price);
    }
    
    //Pagination
    const page = parseInt(params.get('page')) || 1;
    const limit = parseInt(params.get('limit')) || 2;

    const start = (page - 1) * limit;
    const end = start + limit;

    result = result.slice(start,end);

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(result));
});


server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
*/

/* Implement a simple file system logger that writes log messages to a file. The logger should have methods for logging messages at different levels (e.g., info, warning, error) and should include timestamps in the log entries. Additionally, implement a method to read the log file and display its contents in a readable format. 
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "logs.txt");


fs.readFile(filePath, "utf8", (err , data) => {
    if(err){
        if(err.code === "ENOENT"){
            console.log("file not found. Creating a new one...");

        fs.writeFile(filePath, "utf8", (writeErr) => {
            if(writeErr){
                console.error("Failed to create file:", writeErr);
                return;
            }
            console.log("File created successfully. It's empty now.");  
        });
        }else{
            console.error("Unxpected error :" , err);
        }
        return;
    }
 console.log("File content:", data);

 const lines = data.split("\n");

 let errorCount = 0;

  console.log("Error logs:");

  lines.forEach(line => {
    if(line.includes("ERROR")){
        console.log(line);
        errorCount++;
    }

  });
  console.log("\nTotal number of errors:", errorCount);
});
*/

/*. Implement a simple RESTful API using Node.js and Express that allows users to perform CRUD (Create, Read, Update, Delete) operations on a collection of products. Each product should have an id, name, category, and price. The API should include endpoints for creating a new product, retrieving all products, retrieving a single product by id, updating a product by id, and deleting a product by id. Additionally, implement error handling for cases where a product is not found or when invalid data is provided in the request body.
const express = require('express');
const app = express();

app.use(express.json());

let products = [

    {id: 1, name: "Laptop", category:"Electronics", price: 1000 },
    {id: 2, name: "Shoes", category:"fashion", price: 100 },
    {id: 3, name: "Watch", category:"Fashion", price: 200 },
    {id: 4, name: "pizza", category:"Food", price: 230 },
    {id: 5, name: "Phone", category:"Electronics", price: 300 },
]

//create
app.post("/products", (req,res) => {
    const {name, category , price} = req.body;

    if(!name || !category || !price){
        return res.status(400).json({message: "All fields are required"});

    }
    const neProduct = {
        id: products.length+1,
        name,
        category,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);

});


//read All products
app.get("/products",(req,res) => {

    res.json(products);
});


//read single product
app.get("/products/:id",(req,res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if(!product){
        return res.status(404).json({message: "Product not found "});

    }
    res.json(product);
});

//update product
app.put("/products/:id",(req,res)=> {
    const Product = products.find(p => p.id === parseInt(req.params.id));
    if(!Product){
        return res.status(404).json({mesaage: 'Product not found'});
    }
    const {name,category,price} = req.body;
    if(name) products.name = name;
    if(category) products.category = category;
    if(price) products.price = price;
    res.json(products);

});

// delete product
app.delete("/products/:id",(req, res) =>{
    const index = products.findIndex(p => p.id == req.params.id);
    
    if(index === -1){
        return res.status(404).json({message: "Product not found"});
    }
    const deleted = products.splice(index,1);
    res.json(deleted);

});

//start server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
}
)
*/


/* Implement custom promise .all fun 
const app = express();
const PORT = 3000;

// custom promise .all implemntation
 function myPromiseAll(promises){
    return new Promise((resolve,reject) => {
        if(!Array.isArray(promises)){
            return reject(new TypeError("Argument must be an array"));          
        }
        let results = [];
        let completed = 0;
       
        if(promises.length === 0) {
            return resolve([]);
        }

        promises.forEach((promise , index) => {
            Promise.resolve(promise)
            .then((value) => {
                results[index] = value;
                completed++;

                if(completed === promises.length){
                    resolve(results);

                }
            })
            .catch((err) => {
                 reject(err);
            });
        });
    });
 }

 //Simulate fetching user from DB
    function getUser(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Fetched user');
                resolve({id: userId, name: "Ansh" , plan: "Pro"});
            } , 1000);
            });
    }

    //Simulate fetching orders 
    function getOrders(userId){
        return new Promise((resolve) =>{
            setTimeout(() => {
                console.log('fetched orders');
                resolve([
                    {orderId: 101, item: "Laptop"},
                    {orderId: 102, item: "Phone"},
                ]);    
            },1500);
        });
    }
 
    //simulate external notification service

    function getNotifications(userId) {
        return new Promise((resolve) =>  {
            setTimeout(() => {
                console.log("fetched notificatons");
                resolve([
                    "Your order has been shipped",
                    "New login from unrecognized device",
                ]);
            },500);
        });
    }

    // Real API Route
    app.get("/dashboard/:userId", async (req,res) => {
        const {userId} = req.params;

        try {
            console.time("Dashboard Data Fetching");

            const [user, orders, notifications] = await myPromiseAll([
                getUser(userId),
                getOrders(userId),
                getNotifications(userId),
            ]);
            console.timeEnd("Dashboard Data Fetching");

            res.json({
                success : true,
                data:{
                    user,
                    orders,
                    notifications,
                },
            });

        } catch (error) {

            resstatus(500).json({
                success: false,
                message: error.message,
            });
        }
    });

    // Sequential version
app.get("/dashboard-sequential/:userId", async(req,res) => {
    const {userId} = req.params;

    try {
        console.time("Sequential Dashboard Data Fetching");

        const user  = await getUser(userId);
        const orders = await getOrders(userId);
        const notifications = await getNotifications(userId);

        console.timeEnd("Sequential Dashboard Data Fetching");

        res.json({
            success: true,
            data: {
              user,
              orders,
              notifications,
            },
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }
        });

        // server start
        app.listen(PORT, () => {
            console.log('Server running at http://localhost:${PORT}');

        });
*/


/* implemnt promise. race 
function promiseRace(promises) {
    return new Promise((resolve ,reject) => {
        for(let p of promises) {
            Promise.resolve(p).then(resolve,reject);
        }
});
}


function driverResponse(name, delay){
    return new Promise((resolve) => 
    {
      setTimeout(() => resolve(`${name} accepted ride`), delay);
});
}

const drivers = [
    driverResponse("Driver A", 3000),
    driverResponse("Driver B",1500),
    driverResponse("Driver C",2500),   
];
promiseRace(drivers)
.then(console.log);
*/

/* implement  function that retries an async operation with backoff
async function retryWithBackoff(asyncFn, retries , delay) {
    try{
        return await asyncFn();
    } catch(err) {
        if (retries === 0) throw err;

       console.log(`Retrying in ${delay}ms...`);
       await new Promise(res => setTimeout(res, delay));


       return retryWithBackoff(asyncFn , retries - 1 , delay * 2);

    }
}
let attempt = 0;
async function fetchUserData() {
    attempt ++;
    console.log("API Call Attempt:",attempt);

    // random failure 
    if (attempt < 3) {
        throw new Error("Network Error")
    }
    return {name: "Ansh", age:21};
}

retryWithBackoff(fetchUserData,3,1000)
.then(data => console.log("Data recived:",data))
.catch(err => console.error("Failed:",err.message));
*/

/* Create a logger that prefixes logs with timestamps and levels */
/*
class Logger {
    constructor(serviceName = "App") {
        this.serviceName = serviceName;
    }

    // Add this method
    timestamp() {
        return new Date().toISOString();
    }

    log(level, message, ...args) {
        console.log(`[${this.timestamp()}] [${level}] [${this.serviceName}] ${message}`, ...args);
    }

    info(message, ...args) {
        this.log("INFO", message, ...args);
    }

    warn(message, ...args) {
        this.log("WARN", message, ...args);
    }

    error(message, ...args) {
        this.log("ERROR", message, ...args);
    }
}

const logger = new Logger("UserService");

async function getUser(userId) {
    logger.info("Fetching user with id:",userId);
    try {
        const user = await new Promise((resolve,reject) => setTimeout (() => {
            if (Math.random() > 0.7) reject(new Error("Database error"));
            else resolve({ id: userId , name : "Ansh Gupta" });               
            },500)
        );
        logger.info("User fetched successfully:", user);
        return user;
        } catch (err){
            logger.error("Failed to fetch user:", err.message);
            throw err;
        }
    }
    (async () => {
        await getUser(1).catch(() => {});
        await getUser(2).catch(() => {});
    })();
    */


//Rotate logs when file size exceeds a threshold.

// const winston = require("winston");
// const {createLogger ,format , transports} = winston;

// const logger = createLogger({
//     level:"info",
//     format: format.combine(
//         format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
//         format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
//     ),
//     transports: [
//         new transports.File({
//             filename: "pos.log",
//          //   maxsize: 1 * 1024 * 1024,  //5Mb thresold 

//             maxsize:1024,
//             maxFiles:5,  // keep last 5 log files 
//             tailable:true

//         }),
//         new transports.Console()
//     ]
// });

// logger.info("Sale comleted: Order #12422 , ₹3920");
// logger.error("Payment Failed:Card Declined");


//Implement a publish/subscribe (pub/sub) pattern

// const EventEmitter = require("events");
// const eventBus = new EventEmitter();

// //Subscriber 1: Inventory sys
// eventBus.on("sale_completed",(order) => {
//     console.log(`Inventory updated for Order #${order.id}`);
// });

// //subs 2: Accouting sys
// eventBus.on("sale_completed",(order) => {
//     console.log(`Accounting updated: $${order.amount} for Order #${order.id}`);
// });
// // Subs 3: Notification sys
// eventBus.on("sale_completed",(order) =>{
//     console.log(`Receipt sent to customer for Order #${order.id}`);
// });
// // Publisher: POS 
// function completeSale(order){
//    console.log(`Sale completed in POS: Order #${order.id}`);
//    eventBus.emit("sale_completed",order); //publish event
// }

// completeSale({id:101 , amount:45.00});
// completeSale({id: 102, amount: 45993});


//Create a custom middleware that logs request details

// const express = require("express");
// const app = express();

// const loggerMiddleware = (req,res,next) => {
//     const startTime = new Date();

//     console.log("----Incoming Request ------");
//     console.log(`Method: ${req.method}`);
//     console.log(`URL: ${req.url}`);
//     console.log(`IP: ${req.ip}`);
//     console.log(`Time: ${startTime.toISOString()}`);

//     //When response finishes 
//     res.on("finish",() => {
//        const endTime = new Date();
//        const duration = endTime - startTime;

//     console.log("----- Response Sent -----");
//     console.log(`Status: ${res.statusCode}`);
//     console.log(`Duration: ${duration} ms`);
//     console.log("--------------------------\n");
//     });
//     next(); //move to next middleware / route
// };

// //use moddleware gloablly
// app.use(loggerMiddleware);

// app.get("/sale",(req,res) => {
//     res.send("Sale processed");
// });

// app.listen(3000,() =>
// {
//     console.log("Server running on port. 3000");
// });

// Validate request body manually without libraries

// function validatePOSRequestBody(body) {
//   const errors = [];

//   // 1. Validate customerId
//   if (!body.customerId || typeof body.customerId !== 'string') {
//     errors.push("customerId is required and must be a string");
//   }

//   // 2. Validate items array
//   if (!Array.isArray(body.items) || body.items.length === 0) {
//     errors.push("items must be a non-empty array");
//   } else {
//     body.items.forEach((item, index) => {
//       if (!item.productId || typeof item.productId !== 'string') {
//         errors.push(`items[${index}].productId mustbe a  string`);
//       }
//       if (
//         typeof item.quantity !== 'number' ||
//         item.quantity <= 0 ||
//         !Number.isInteger(item.quantity)
//       ) {
//         errors.push(`items[${index}].quantity must be a positive integer`);
//       }
//       if (typeof item.price !== 'number' || item.price <= 0) {
//         errors.push(`items[${index}].price must be a positive number`);
//       }
//     });
//   }

//   // 3. Validate paymentMethod
//   const allowedMethods = ["card", "cash"];
//   if (!allowedMethods.includes(body.paymentMethod)) {
//     errors.push("paymentMethod must be either 'card' or 'cash'");
//   }

//   // 4. Validate totalAmount
//   const calculatedTotal = body.items.reduce(
//     (sum, item) => sum + item.quantity * item.price,
//     0
//   );
//   if (body.totalAmount !== calculatedTotal) {
//     errors.push(`totalAmount must be ${calculatedTotal}`);
//   }

//   return errors;
// }
// const requestBody = {
//   customerId: "12345",
//   items: [
//     { productId: "p001", quantity: 2, price: 15.5 },
//     //{ productId: "002", quantity: 1, price: 0 },
//   ],
//   paymentMethod: "card",
//   totalAmount: 61.0,
// };

// const validationErrors = validatePOSRequestBody(requestBody);
// if (validationErrors.length > 0) {
//   console.log("Validation Failed:", validationErrors);
// } else {
//   console.log("Validation Passed");
// }

//Convert CSV file to JSON using Node streams
//  const fs = require('fs');
// const csv = require('csv-parser');
// const { Transform, pipeline } = require('stream');

// const transformPOSData = new Transform({
//   objectMode: true,
//   transform(row, encoding, callback) {
//     try {
//       const transformed = {
//         transactionId: row.transaction_id,
//         product: row.product,
//         category: row.category,
//         price: Number(row.price),
//         quantity: Number(row.quantity),
//         total: Number(row.total),
//         paymentMethod: row.payment_method,
//         datetime: new Date(row.datetime),
//         isHighValue: Number(row.total) > 150
//       };

//       callback(null, JSON.stringify(transformed));
//     } catch (err) {
//       callback(err);
//     }
//   }
// });

// const readStream = fs.createReadStream('./data/pos-transactions.csv')
// const writeStream = fs.createWriteStream('pos-transactions.json');

// let isFirst = true;

// const jsonWrapper = new Transform({
//   writableObjectMode: true,
//   transform(chunk, enc, cb) {
//     if (!isFirst) {
//       this.push(',\n');
//     }
//     this.push(chunk);
//     isFirst = false;
//     cb();
//   },
//   final(cb) {
//     this.push('\n]');
//     cb();
//   }
// });

// // Start JSON array
// writeStream.write('[\n');

// pipeline(
//   readStream,
//   csv(),
//   transformPOSData,
//   jsonWrapper,
//   writeStream,
//   (err) => {
//     if (err) {
//       console.error('Pipeline failed:', err);
//     } else {
//       console.log('POS data converted successfully');
//     }
//   }
// );

// Create a stream pipeline that transforms data to uppercase
// import {createReadStream,createWriteStream} from "fs";
// import { Transform,pipeline } from "stream";
// import { promisify } from "util";

// const pipe = promisify(pipeline);

// //Custom Transform Stream
// class UpperCaseTransform extends Transform {
//     _transform(chunk,encoding,callback){
//         const upperChunk = chunk.toString().toUpperCase();
//         callback(null,upperChunk);
//     }
// }

// async function runPipeline() {
//     try{
//         await pipe(
//             createReadStream("input.txt"),  // for read file 
//             new UpperCaseTransform(),
//             createWriteStream("output.txt")
//         );
//         console.log("Pipeline completed successfully");

//     }catch(err){
//         console.error("Pipeline failed:",err);
//     }
// }
// runPipeline();

// Write code to detect a simple memory leak pattern
// import express from "express";
// const app = express();
// app.use(express.json());

// // Global Array(causes memory leak )
// const requestsStore = [];
// //API that leaks memory
// app.post("/data",(req,res) => {
//     //simulate storing large requests data
//     requestsStore.push({
//         body: req.body,
//         time:  new Date(),
//         bigData: new Array(100000).fill('memory-leak')
//     });
//     res.send("Data recived");
// });
// //Memory Monitor
// setInterval(() => {
//     const memory = process.memoryUsage();

//     console.log("-----Memory Usage-------");
//     console.log("Heap Used(MB):",(memory.heapUsed/1024/1024).toFixed(2));
//     console.log("Rss (MB):",(memory.rss/1024/1024).toFixed(2));
//     console.log("-------------\n");
// },3000);
// app.listen(3000,() => {
//     console.log("Server running oonn port 3000");
// });

// Implement a global error handler in Express. 
// const express = require("express");

// const app = express();

// app.use(express.json());

// app.get("/favicon.ico", (req, res) => res.status(204).end());
// //Custtom error class- This class creates structured, predictable errors that your Express app can safely handle and respond with.
// class AppError extends Error {
//     constructor(message,statusCode){
//         super(message);
//         this.statusCode = statusCode;
//         this.isOperational = true;

//         Error.captureStackTrace(this,this.constructor);
//         //Removes unnecessary internal noise from stack trace
// // Makes debugging cleaner
// // Shows where error actually happened

//     }
// }
// //Async Wrapper
// const asyncHandler = (fn) => (req,res,next) => {
//     Promise.resolve(fn(req,res,next)).catch(next);
// };
// // routes
// app.get("/error", (req, res, next) => {
//     next(new AppError("This route is intentionally broken", 500));
// });
// //simulate access 
// app.get("/success",(req,res) =>{
//     res.json({message: "Everything is fine"});
// });

// //simulate error(sync)
// app.get("/sync-error",(req,res,next) => {
//     next(new AppError("this is manaual error",400));
// });
// // Simulate async error 
// app.get("/user/:id",asyncHandler(async (req,res,next) => {
//     const user = null; //pretend db result

//     if(!user){
//         throw new AppError("User not found",404);
//     }
//     res.json(user);
// })
// );

// //Hnadle unknown routes
// app.use((req,res,next) => {
//     next(new AppError(`Route ${req.originalUrl} not found`, 404));

// });
// //Global Error Handler 
// app.use((err,req,res,next)=> {
//     console.error("Error:",err);

//     let{statusCode = 500, message } = err;

//     // Development mode
//     if(process.env.NODE_ENV === "development") {
//         return res.status(statusCode).json({
//             success: false,
//             message,
//             stack: err.stack,
//         });
//     }
//     //Production mode 
//     if(!err.isOperational){
//         message = "Something went wrong ";
//     }
//     res.status(statusCode).json({
//         success:false,
//         message,
//     });
// });
// // start server
// const PORT = 3000;
// app.listen(PORT,() => {
//     console.log(`Server running on port ${PORT}`);
// }); 

//Build a simple CLI tool using Node.js
// const fs = require("fs");
// //const { randomUUID } = require("crypto");

// const filepath = "./tasks.json";

// //load tasks
// const loadTasks = () => {
//     try{
//         return JSON.parse(fs.readFileSync(filepath,"utf-8"));
//     } catch {
//         return [];
//     }
// };


// //save tasks
// const saveTasks = (tasks) => {
//     fs.writeFileSync(filepath,JSON.stringify(tasks,null,2));
// };
// // CLI input
// const [,, command, ...args] = process.argv;

// const tasks = loadTasks();

// //Add task
// if(command === "add"){
//     const task = args.join(" ");

//     tasks.push({
//         id:Date.now(),
//        // id: randomUUID(),
//         task
//     });
//     saveTasks(tasks);
//     console.log("Task added");
// }
// //List Tasks
// else if(command === "list"){
//     console.log("\nYour Tasks:\n");

//     tasks.forEach((t,i) => {
//         console.log(`${i + 1}. ${t.task}`);
//     });
// }
// //Delete Task
// else if(command === "delete"){
//    const id = Number(args[0]);
//     const updated = tasks.filter(t => t.id !== id);


//     saveTasks(updated);
//     console.log("Task delted");
// }
// // help

// else{
//     console.log("Commands:");
//     console.log(" node index.js add <task>");
//     console.log("node index.js list");
//     console.log("node index.js delete <id>");
// }

//Implement password hashing and verification using bcrypt
// const express = require("express");
// const bcrypt = require("bcrypt");

// const app = express();
// app.use(express.json());

// //fake db 
// const users = [];
// // Register (hash pass)
// app.post("/register",async (req,res) => {
//     const {username,password} = req.body;
//     // Hash pass
//     const saltRounds = 10;

//     const hashedPassword = await bcrypt.hash(password,saltRounds);

//     //2. Save user with hashed password
//     const user = {
//         id: Date.now(),
//         username,
//         password: hashedPassword
//     };
//     users.push(user);


//     res.json({
//         message: "User registerd successsfully",
//         user
//     });
// });

// //login verify
// app.post("/login",async (req,res) => {
//     const {username,password} = req.body;
//     // find user
//     const user = users.find(u => u.username === username);
//     if(!user){
//         return res.status(404).json({message: "User not found"});
//     }
//     //compare pass
//     const isMatch  =  await bcrypt.compare(password,user.password);
//  if (!isMatch) {
//     return res.status(401).json({message: "Invalid password"});
//  }
//  res.json({
//     message: "Login successful",
//     user
//  });
// });
// app.listen(3000,() =>{
//     console.log("Server running on port 3000");
// });


//Create JWT-based login and protected routes

// require("dotenv").config();
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const mysql = require("mysql2/promise");

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 5000;
// //sql connectiion 
// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// //Auth
// function authenticateToken(req,res,next){
//     const authHeader = req.headers.authorization;

//     if(!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({message: "No token provided"});
//     }
//     const token = authHeader.split(" ")[1];

//     try{
//         const decoded = jwt.verify(token,process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch(err){
//         return res.status(401).json({message: "Invalid token"});
//     }
// }
//     //Register
//     app.post("/register",async (req,res) => {
//         try{

//               const { email, password } = req.body;
//              // check if user exist
//              const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

//              if(rows.length > 0){
//                 return res.status(400).json({message: "User already exists"});
//              }
//              const hashedPassword = await bcrypt.hash(password,10);

//              await db.execute("INSERT INTO users (email,password) VALUES (?,?)",
//                 [email,hashedPassword]
//              );
//              res.status(201).json({mesage: "User registered successfully"});
//              console.log("User registered:", email);
//         }catch(err){
//             console.error(err);
//             res.status(500).json({message: "Internal server error"});
//         }
//     });
//     //Login
//     app.post("/login",async (req,res) => {
//         try{
//             const{email,password} = req.body;

//             const [rows] = await db.execute("SELECT * FROM  users WHERE email = ?",
//                 [email]);
//                 if(rows.length === 0){
//                     return res.status(400).json({message: "Invalid credentials"});
//                 }
//                 const user = rows[0];
//                 const isMatch = await bcrypt.compare(password,user.password);
//                 if(!isMatch){
//                     return res.status(400).json({message: "Invalid credentials"});
//                 }

//                 const token = jwt.sign(
//                     {id:user.id , email: user.email},
//                     process.env.JWT_SECRET,
//                     {expiresIn:"1h"}
//                 );
//                 res.json({token});
//         } catch (err) {
//             console.error(err);
//             res.status(500).json({message:"Server error"});
//         }
//     });

//     // protected route
//     app.get("/protected",authenticateToken,async(req,res) => {
//         res.json({message:"Proteced data access granted", user: req.user,
//         });
//     });


// app.listen(PORT,() => {
//     console.log(`Server running on port ${PORT}`);
// });

//Implement file upload API using multer
// require("dotenv").config();
// const express = require("express");
// const { Server } = require("http");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// const PORT =  process.env.PORT || 5000;

// app.use(express.json());

// //Create Upload flder static
// app.use("/uploads",express.static(path.join(__dirname,"uploads")));


// //Multer storge config
// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null,"uploads/");
//     },
//     filename: (req,file,cb) => {
//         const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);

//         cb(null,uniqueName + path.extname(file.originalname));
//     }
// });
// //File Filter
// const fileFilter = (req,file,cb) => {
//     const allowedTypes = /jpeg|jpg|png|webp/;
     
//     const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    
//     const mime = allowedTypes.test(file.mimetype);

//     if(ext && mime){
//         cb(null,true);
//     }else{
//         cb(new Error("Only images are allowed"));
//     }

// };
// //multer instance 

// const upload = multer({
//     storage,
//     fileFilter,
//     limits: {
//         fileSize:  2 * 1024 * 1024,// 2MB
//     }
// });
// //single file upload 
// app.post("/upload", upload.single("profilePic"),(req,res) => {
//       try{
//         if(!req.file){
//             return res.status(400).json({message:"No file uploaded"});
//       }
//      res.status(200).json({
//         message: "Profile upoaded successfully",
//         file: {
//             filename : req.file.filename,
//             path: `/uploads/${req.file.filename}`
//         }
//      });

//     } catch(err) {
//         res.status(500).json({message: "Internal server error"});
//     }
// });

// //multiple file upload 
// app.post("/upload-multiple",upload.array("images",5),(req,res)=>{
//     try{
//         if(!req.files || req.files.length === 0) {
//             return res.status(400).json({message: "No files uploaded"});
//         }
//         const files = req.files.map(file => ({
//             filename: file.filename,

//             path: `/uploads/${file.filename}`
//         }));
//         res.status(200).json({
//             message: "Files uploaded successfuly",
//             files
//         });

//     } catch(err){
//         res.status(500).json({message: "Internal server error"});
//     }
// });
// // start server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// Use Redis to implement an incrementing counter API

// const express = require("express");
// const {createClient} = require("redis");

// const app = express();
// const PORT = 3000;

// const redisClient = createClient({
// url: "redis://localhost:6379",
// });
// redisClient.on("error",(err) => {
//     console.error("Redis Client Error",err);
// });
// //connect once at startup
// (async () => {
//     await redisClient.connect();
//     console.log("Connected to Redis");
// })();

// //Real life use case: Page view counter
// //Increment views for a specific page
// app.post("/increment/:pageId", async(req,res) => {
//     try{
//     const {pageId} = req.params;
//     const counterKey = `page:${pageId}:views`;
    
//     //atomic increament
//     const views = await redisClient.incr(counterKey);
//     res.json({
//         pageId,
//         views,
//         message: `Page ${pageId} has been viewed ${views} times`
//     });
// }catch(err){
//     console.error("Error incremneting counter:",err);
//     res.status(500).json({message: " Internal server error"});
// }
//   });
// //get views for a page
// app.get("/views/:pageId",async(req,res) => {
//     try{
//         const {pageId} = req.params;
//         const counterKey = `page:${pageId}:views`;
//         const views = await redisClient.get(counterKey) || 0;
//         res.json({
//             pageId,
//             views: Number(views),
//             message: `Page ${pageId} has been viewed ${views} times`
               
//         });
//     }catch(err){
//         console.error("Error fetching counter:",err);
//         res.status(500).json({message:"Internal server error"});
//     }
// });

// //Get top viewed pages (real-world analytics use)
// app.get("/top-pages", async (req, res) => {
//     try {
//         const keys = await redisClient.keys("page:*:views");
//         const pageViews = [];

//         for (let key of keys) {
//             const views = await redisClient.get(key); //  get views for each key
//             const pageId = key.split(":")[1];         // extract pageId correctly
//             pageViews.push({
//                 page: pageId,
//                 views: Number(views),
//             });
//         }

//         // sort descending
//         pageViews.sort((a, b) => b.views - a.views);
//         res.json(pageViews);
//     } catch (err) {
//         res.status(500).json({ message: "Internal server error" });
//     }
// });
// app.listen(PORT,() => {
//     console.log(`Server running on port ${PORT}`);
// });

//Simulate a simple in-memory job queue. 

// const express = require("express");
// const { createClient } = require("redis");

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// const redisClient = createClient({
//     url: "redis://localhost:6379",
// });
// redisClient.on("error",(err)=>{
//     console.error("Redis Client Error",err);
// });

// (async () => {
//      await redisClient.connect();
//      console.log("Connected to Redis");
// })();
// // Queue Keys
// const QUEUE_KEYS = {
//     email: "queue:email",
//     notification: "queue:notification",
//     report: "queue:report",
// };

// // Add JOb to queue
// async function addjob(queueName, jobData){
//     const job = {
//         id: `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//         status:"pending",
//         createdAt: new Date().toISOString(),
//         data: jobData,
//     };
//     //LPush add job to the left (front) of the list
//     await redisClient.lPush(queueName,JSON.stringify(job));
//     console.log(` Job added to ${queueName}:`, job.id);
//     return job;
// }

// //Process Job from queue
// async function processJob(queueName,processor) {
//     //RPOP removes jobfrom the right (end) of the list
//     const raw = await redisClient.rPop(queueName);
//     if(!raw){
//         console.log(`No jobs in ${queueName}`);
//        return null;
//     }
//     const job = JSON.parse(raw);
//     job.status = "processing";
//     console.log(` Processing job ${job.id}...`);


//     try{
//         const result = await processor(job.data);
//         job.status = "completed";
//         job.result = result;
//         job.completedAT = new Date().toISOString();
//         console.log(`Job ${job.id} completed`);

//         //save completed job for history
//         await redisClient.lPush("queue:completed",JSON.stringify(job));

//         //keep only last 100 complted jobs
//         await redisClient.lTrim("queue:completed",0,99);
//     }catch(err){
//         job.status = "failed";
//         job.error = err.message;
//         job.failedAt = new Date().toISOString();
//         console.error(`Job ${job.id} failed:`, err.message);


//         //save failed job for retry
//         await redisClient.lPush("queue:failed",JSON.stringify(job));

//     }
//         return job;
//     }

//     // Real world processors

//     //simulate sending an email (e.g. welcome email)
//     async function emailProcessor(data){
//         console.log(` Sending email to ${data.to} | Subject: ${data.subject}`);
//         await new Promise((res) => setTimeout(res,1000));
//         if(data.to === "fail@test.com")
//             throw new Error("Failed to send email");
//         return {sent:true,recipient: data.to};
//     }

//     async function notificationProcessor(data) {
//     console.log(`Sending notification to user ${data.userId}: ${data.message}`);
//     await new Promise((res) => setTimeout(res, 500));
//     return { delivered: true, userId: data.userId };
// }
//   //Simulates genratng a report (pdf,csv)
//   async function reportProcessor(data) {
//     console.log(`Generating ${data.type} report for ${data.userId}...`);
//     await new Promise((res) => setTimeout(res,2000));
//     return{
//         reportUrl: `https://reports.example.com/reports/${data.userId}_${Date.now()}.${data.type}.pdf`,
//         generatedAt: new Date().toISOString(),
//     };
//   }
// //Routes
// //1. Add email job
// app.post("/jobs/email",async(req,res) => {
//     try{
//         const { userId, message,type } = req.body;
//         const { to, subject, body } = req.body; 
//         const job = await addjob(QUEUE_KEYS.notification,{userId,message,type});
//         res.json({message:"Notification job queued",job});
//     }catch(err){
//         console.error("FULL ERROR:", err);
//         res.status(500).json({message:"failed to queue Job"});
//     }
// });

// //2. Add notification job
// app.post("/jobs/notification",async (req,res) => {
//     try{
//         const {userId,message,type} = req.body;
//         const job = await addjob(QUEUE_KEYS.notification,{userId,message,type});
//         res.json({message:"Notification job queued",job});
//     }catch(err){
         
//         res.status(500).json({message:"Failed to queue job"});
//     }
// });

// //3.Add reprt genrtion job
// app.post("/jobs/report",async(req,res) =>{
//     try{
//         const {userId , type} = req.body;
//         const job = await addjob(QUEUE_KEYS.report,{userId,type});
//         res.json({message:"Report job queued",job});

//     }catch(err){
//         console.error(err);
//         res.status(500).json({message:"failed to queue job"});
//     }
// });


// //4.Process one job form a queue manually
// app.post("/jobs/process/:queueName",async(req,res)=>{
//     try{
//         const{queueName} = req.params;
//         const processors = {
//             email:emailProcessor,
//             notification:notificationProcessor,
//             report:reportProcessor,
//         };
//        const processor = processors[queueName];
//        if(!processor)
//         return res.status(400).json({message:"Unknown queue name"});

//        const job = await processJob(QUEUE_KEYS[queueName],processor);
//        if(!job) return res.json({message:"No pending jobs in queue"});
//        res.json({message:"Job processed",job});
//     }catch(err){
//         res.status(500).json({message:"Error processing job"});
//     }
// });

// //5. check queue length(how many jobs are waiting )
// app.get("/jobs/status",async(req,res) => {
//     try{
//         const [emailCount,notifCount,reportCount,completedCount,failedCount] =
//         await Promise.all([
//             redisClient.lLen(QUEUE_KEYS.email),
//             redisClient.lLen(QUEUE_KEYS.notification),
//             redisClient.lLen(QUEUE_KEYS.report),
//             redisClient.lLen("queue:completed"),
//             redisClient.lLen("queue:failed"),
//         ]);
//         res.json({
//             pending:{
//                 email:emailCount,
//                 notification:notifCount,
//                 report:reportCount,
//             },
//             completed:completedCount,
//             failed:failedCount,
//         });
//     }catch(err){
//         res.status(500).json({message:"Error Fetching sts"})
//     }
// });

// //6.View completed jobs
// app.get("/jobs/completed",async(req,res)=>{
//     try{
//         const jobs = await redisClient.lRange("queue:completed",0,-1);
//         res.json(jobs.map((j)=>JSON.parse(j)));
//     }catch(err){
//         res.status(500).json({message:"Error fetching failed jobs"})
//     }
// });

// //7.view failed jobs
// app.get("/jobs/retry-failed",async(req,res)=>{
//     try{
//         const jobs = await redisClient.lRange('queue:failed',0,-1);
//         res.json(jobs.map((j) => JSON.parse(j)));
//     }catch(err){
//         res.status(500).json({message:"Error fetching failed jobs "});
//     }
// });


// //8.Retry all failed jobs(re-add them to their original queue)
// app.post("/jobs/retry-failed",async(req,res)=>{     
//     try{
//         const failedRaw = await redisClient.lRange("queue:failed",0,-1);
//         if(failedRaw.length === 0)
//             return res.json({message:"No failed jobs to retry"});

//         for(let raw of failedRaw){
//             const job = JSON.parse(raw);
//            //figure out which queue it belongs to by job data shape
//            const queueName = job.data.to ? QUEUE_KEYS.email:job.data.type
//            ? QUEUE_KEYS.report
//            :QUEUE_KEYS.notification;

//            job.status = "pending";
//            job.retriedAt = new Date().toISOString();
//            await redisClient.lPush(queueName,JSON.stringify(job));
//         }
//         //clear failed queue. after. retry
//         await redisClient.del("queue:failed");
//         res.json({message:`${failedRaw.length} failed jobs re-queued` });
//         }catch(err){
//             res.status(500).json({message:"Error retrying failed jobs"});
//         }
// });
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//json parse - take a json string and convert it into a JavaScript object. It also allows you to provide a reviver function that can transform the values during parsing. In this example, we convert all string values to uppercase.

// const userStr = '{"name":"John Doe","email":"john.doe@example.com","age":30}';

// const userObj = JSON.parse(userStr,(key,value)=>{
//     if(typeof value === "string"){
//         return value.toUpperCase();
//     }
//     return value;
// });
// console.log(userObj);


//JSON.stringify - takes a JavaScript object and converts it into a JSON string. It also allows you to provide a replacer function that can transform the values during stringification. In this example, we exclude any properties with the key "password" from the resulting JSON string.

// const userObj = {
//     name:"John Doe",
//     email:"john.doe@example.com",
//     age:30,
// }
// const userStr = JSON.stringify(userObj,(key,value)=>{
//      if(typeof value === "string"){
//         return value.toUpperCase();
//      }
//      return value;
// })
// console.log(userStr)


//redis rate lmiter

const express = require("express");
const redis = require("redis");

const app = express();
app.use(express.json());

const Port = 3000;

const MAX_REQUESTS = 5; // max requests per window
const WINDOW_SIZE = 60 * 1000; 

const redisClient = redis.createClient({
    socket:{
        host: "127.0.0.1",
        port: 6379
    },
});

redisClient.on("connect",()=>{
    console.log("Connected to Redis");
});

redisClient.on("error",(err)=>{
    console.error("Error connecting to Redis:", err);
});

//ratelimiter middleware
async function rateLimiter(req,res,next){
    try{
        const ip = req.ip;
        const key = `rate:${ip}`;

        //lua script
        const luaScript = `
        local current 
        current = redis.call("INCR", KEYS[1])
        if tonumber(current) == 1 then 
        redis.call("EXPIRE", KEYS[1],ARGV[1])
        end
        return current
        `;
        //Execute lua script atomically
        const currentrequests = await redisClient.eval(luaScript,{
            keys: [key],
           arguments: [String(WINDOW_SIZE / 1000)],
        });

        //calculate remaining request
        const remaining = MAX_REQUESTS - currentrequests;

        //set response headers
        res.set({
            "X-RateLimit-Limit": MAX_REQUESTS,
            "X-RateLimit-Remaining": Math.max(0,remaining),
            "X-RateLimit-Reset": Date.now() + WINDOW_SIZE,
        });

        // block if limit is exceeded
        if(currentrequests > MAX_REQUESTS){
            const ttl = await redisClient.ttl(key);
            res.set({"Retry-After": ttl,});
            res.status(429).json({message: "Too many requests. Please try again later.",retryAfter: ttl});
        }else{

            next();
        }
    }catch(err){
        console.error("Error in rate limiter:", err);
        res.status(500).json({message:"Internal server error"});
    }
}

//Apply rate limiter
app.use(rateLimiter);

app.get("/",(req,res)=>{
    res.json({success:true,message:"running successfully"});
})

//protected route
app.get("/api/data",(req,res) => {
    res.json({success:true,message:"This is protected data",
        data: {
            name: "Ansh Gupta",
            description: "This data is protected by rate limiting middleware."
        }
    });
})

//login route
app.post("/login",(req,res) => {
    res.json({success:true,message:"Login successful"});
});

//start server
async function startServer(){
    try{
        await redisClient.connect();
        app.listen(Port,() => {
            console.log(`Server running on port ${Port}`);
        });
    } catch(err){
        console.error("Failed to start server:", err);
    }
}
startServer();