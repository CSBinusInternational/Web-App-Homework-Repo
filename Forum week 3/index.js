// Promise, async, and await
// Promise is an object which has producing code and consuming code
// Producing code example (Output is "Success")
let promiseExample = new Promise(function(promiseResolve, promiseReject){
    let x = 1;
    x = x + 1;
    
    if(x == 2){
        promiseResolve("Success");
    }
    else{
        promiseReject("Error");
    }
});

// Consuming code example
promiseExample.then(
    function (value){console.log("Success")},
    function (error){console.log("Error")}
)

// Async and await example (Output is "Works")
async function asyncExample(){
    let promiseExample2 = new Promise(function(promiseResolve,promiseReject){
        promiseResolve("Works");
    });

    console.log(await promiseExample2);
};

asyncExample();

// Fetch API
// Fetch is the way to get data from files or URLs (Output is "Burger")
async function fetchExample(file){
    let fileObject = await fetch(file);
    let fileText = await fileObject.text();
    console.log(fileText);
}

fetchExample('Example Text.txt');

// Map, filter, reduce
// Mapping creates a new array based on an existing one, where modifications can be applied to the new array (Output is [6,8,10])
let arrayExample = [3,4,5];
let mapExample = arrayExample.map(item => item*2);
console.log(mapExample);

// Filtering removes elements which are specified when calling the filter (Output is [4])
let filterExample = arrayExample.filter(item => item%2 == 0);
console.log(filterExample);

// Reducing makes an entire array into just one value (Output is 12)
let reduceExample = arrayExample.reduce(function(result,item){
    return result + item;
}, 0);
console.log(reduceExample);