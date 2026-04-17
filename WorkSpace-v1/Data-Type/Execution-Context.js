//TODO: JavaScript কীভাবে কাজ করে?

// JavaScript হলো একটি single-threaded synchronous language।

//1/  single-threaded = এক সময় একটাই কাজ করে
//2/  synchronous = line by line execute করে

// উদাহরণ:

// console.log("A");
// console.log("B");
// console.log("C");

// এখানে output হবে:

// A
// B
// C

// কারণ JS উপরের লাইন থেকে নিচের লাইনে একটার পর একটা execute করে।


// TODO: JavaScript Engine কী করে?

// যখন browser এ JS code run হয়, তখন browser-এর ভিতরে একটা JavaScript Engine থাকে।

// যেমন:

// Chrome → V8 Engine
// Firefox → SpiderMonkey

// এই engine তোমার code পড়ে execute করে।


//TODO:  Execution Context কী?

// Execution Context = JS code run করার environment

// মানে JavaScript যখন কোনো code run করে, তখন code execute করার জন্য একটা environment তৈরি করে।


// Memory
// Code

// এই দুইটা অংশ মিলে Execution Context হয়।