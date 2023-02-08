// 'use strict';
// //  "Call" and "Apply" methods
// //  used to assign objects to "this" keyword

// const lufthansa = {
//     flightName : "Lufthansa",
//     flightCode : "B0",
//     bookings : [],

//     //  this is a function inside the object which uses "this" keyword
//     book (name, flightNo){
//         console.log(`${name} booked a ${this.flightName} flight having UID No. ${this.flightCode}${flightNo}.`);

//         this.bookings.push({flight : `${this.flightCode}${flightNo}`, name});
//     }
// };

// lufthansa.book("Shrey", 47);
// console.log(...lufthansa.bookings);

// //  Earlier solution for the problem

// //////////////////////////////////////////////
// const indigo = {
//     flightName : "Indigo",
//     flightCode : "B3",
//     bookings : []
// }

// const book = lufthansa.book;

// book.call(indigo, "Sahay", '03');       //  1st argument of "Call" & "Apply" method takes
// book.call(indigo, "Sanjay", '01');      //  the object in which "this" refers to.
// book.call(indigo, "Shikha", 33);

// //  Now some new airlines r added to the lufthansa group
// //  So now for the "this" operator inside the function we have to use "call" statement
// //  bcoz "this" is undefined inside the function.

// //  Same thing can be done with "apply" method
// //  *The only difference is that "apply" method accepts the function parameters as an array*

// const ip1 = ["person2", 78];
// book.apply(lufthansa, ip1);

// //  OR same using "call"
// const ip2 = ["person3", 87];
// book.call(lufthansa, ...ip2);

// // ------------------------------------------------------------------------------------------
// //  "Bind" method

// //  it is similar to that of "Call" and "Apply" method
// //  the only difference is that the "Bind" method returns a new function with the same
// //  function body

// const luf = book.bind(lufthansa);
// console.log(luf("Prince", 45));
// console.log(...lufthansa.bookings);

// //  we can add Default Argument to the "bind" method
// const ind = book.bind(indigo, "Alice");
// console.log(ind(79));
// console.log(...indigo.bookings);

// // -------------------------------------------------------------------------------------------
// //  IIFE (Immediately Invoked Function Expression)

// //  used "To call a function for once"
// //  used during asynchronous js

// function repeatFn (){
//     console.log("This function will be repeated again and again.");
// }
// repeatFn();

// (function(){
//     console.log("This time the function will be dead after a single call.");
// })();    //  Its syntax is just similar to that of functionCall ie "(functionExpression)()"

// // -------------------------------------------------------------------------------------------
// //  Closures

// //  A Closure gives a function access to all its variables of its parent function, even after
// //  that parent function has returned. The function keeps a reference to its outer scope, which
// //  preserves the scope chain throughout the time.

// const closure = function(){
//     let count = 0;

//     return function(){
//         ++count;
//         console.log(`closure ${count}`);
//     };
// };

// const callClosure = closure();  //  Assigning function to an object.

// callClosure();
// callClosure();
// callClosure();

// // console.dir(callClosure);

// //  here although "closure" function has ended, but also the "count" variable has been stored.

// //  #Example1
// let f;
// const g = function(){
//     const a = 3;
//     f = function(){
//         console.log(a * 3);
//     }
// }

// const h = function(){
//     const b = 1;
//     f = function(){
//         console.log(b * 5);
//     }
// }

// g();
// f();

// h();
// f();

// //  #Example2 -> to show that closure has priority on scope chain
// const boarders = function(n, delay){
//     const a = n/3;      //  comment this line and uncomment "a" to see the result.

//     setTimeout(function(){
//         console.log(`There are ${a} passengers for boarding.`);
//     }, delay * 1000);

//     console.log(`Boarding will start in ${delay} seconds.`);
// };

// //a = 1000;
// boarders(180, 3);

// // -------------------------------------------------------------------------------------------
// //  Challenge Part

// //  #Part1

// //  Let's build a simple poll app!
// //  A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
// //  Here are your tasks:
// //  1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// //    1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
// //          What is your favourite programming language?
// //          0: JavaScript
// //          1: Python
// //          2: Rust
// //          3: C++
// //          (Write option number)

// //    1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// //  2. Call this method whenever the user clicks the "Answer poll" button.
// //  3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// //  4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// //  HINT: Use many of the tools you learned about in this and the last section 😉
// //  BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
// //  BONUS TEST DATA 1: [5, 2, 3]
// //  BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
// //  GOOD LUCK 😀

// 'use strict';
// let languages = ["JavaScript", "Python", "Rust", "C++"]
// let data = [0, 0, 0, 0];

// function displayResults(ip){
//     //console.log(ip);

//     if(ip == "string"){
//         console.log(`Poll results are ${data}`);
//     }
//     else if(ip == "array"){
//         console.log(...data);
//     }
//     else{
//         console.log("😒 Wrong choice");

//     }
// }

// function registerNewAnswer(){
//     const ip = prompt(`What is your favourite programming language ?\n
//     0: JavaScript\n
//     1: Python\n
//     2: Rust\n
//     3: C++\n
//     (Write Option Number)`);

//     if(ip > 3 || ip < 0){
//         console.log("❌ Wrong Selection.");
//         return;
//     }

//     console.log(`Option ${ip} selected.`);
//     ++data[ip];

//     let form = prompt("Enter 'string' or 'array'.");
//     //console.log(form);

//     displayResults(`${form}`);
// }
// //document.querySelector('.heading').addEventListener('click', registerNewAnswer());
// //⬆️Not Working("Find the Issue With this")

// // // #part2
// 'use strict';
// (function (){
//   const head = document.querySelector('h1');
//   head.style.color = 'red';

//   document.querySelector('.btn').addEventListener('click',
//   function(){
//     head.style.color = 'blue';
//   });
// })();     //  click on the "Poll Request" button.

// ---------------------------------------------------------------------------------------
//  Array Methods

//  #Challenge1
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in 
knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, 
and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
    So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
    (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, 
    and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// 'use strict';    //  Mine answer

// function checkDogs(arr1, arr2){
//     console.log("---Printing details from Julia's data---");
//     for( const i in arr1){
//         if(arr1[i] >= 3) console.log(`Dog number ${+i+1} is an adult, and is ${arr1[i]} years old.`);
//         else console.log(`Dog number ${+i+1} is still a puppy 🐶`);
//     }

//     console.log("---Printing details from Kate's data---");
//     for( const i in arr2){
//         if(arr2[i] >= 3) console.log(`Dog number ${+i+1} is an adult, and is ${arr2[i]} years old.`);
//         else console.log(`Dog number ${+i+1} is still a puppy 🐶`);
//     }
// };

// let julia = [3, 5, 2, 12, 7];
// let kate = [4, 1, 15, 8, 3];

// //console.log(...julia);
// julia.splice(0,1);  //  deleting the 1st element
// //console.log(julia);
// julia.splice(-2);   //  deleting the last 2 elements
// //console.log(julia);

// checkDogs(julia, kate);

//  // Answer(from course)
// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   dogsJulia.slice(1, 3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//  #Challenge2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human 
ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does 
the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
    humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that 
    are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges 
    how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// 'use strict';

// function calcAverageHumanAge(dogAge) {
//     const humanAgeMore = dogAge.filter(function(mov){
//         return mov > 2;
//     });

//     const humanAgeLess = dogAge.filter(function(mov){
//         return mov <= 2;
//     });

//     console.log(...dogAge);

//     const humanAge1 = humanAgeMore.map(function(mov){
//         return 16 + mov*4;
//     });

//     const humanAge2 = humanAgeLess.map(function(mov){
//         return mov * 2;
//     });

//     console.log(...humanAge1);
//     console.log(...humanAge2);

//     //  concatinating two arrays

//     const humanAge = humanAge1.concat(humanAge2);
//     console.log(...humanAge);

//     const adultDog = humanAge.filter(function(mov) {
//         return mov >= 18;
//     });
//     console.log(...adultDog);

//     const averageHumanAge = adultDog.reduce(function(acc, curr, i, adultDog) {
//         return acc + curr;
//     }, 0) / adultDog.length;

//     return `The averageHumanAge of the dogs are ${averageHumanAge} `;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log("---New input---");
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//  //Answer(from course)

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);
//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);



// // ---------------------------------------------------------------------------------------
// //  Geolocation api

// "use strict";

// if (navigator.geolocation)
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(latitude, longitude);
//       console.log(`https://www.google.com/maps/@${latitude},${longitude},15z`);

//       const coords = [latitude, longitude];

//       var map = L.map("map").setView(coords, 15);

//       L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       //console.log(map);

//       map.on("click", function (mapEvent) {
//         console.log(mapEvent);
//         const { lat, lng } = mapEvent.latlng;

//         L.marker([lat, lng])
//           .addTo(map)
//           .bindPopup(
//             L.popup({           //  due to some reason the popUp text is closing itself
//               maxwidth: 250,    //  and the class property is not being applied properly
//               minwidth: 100,
//               autoclose: false,
//               closeOnClick: false,
//               className: 'mapClass',
//             })
//           )
//           .setPopupContent("Workout")
//           .openPopup();

//       });
//     },
//     function () {
//       alert("Could Not Get Your Location");
//     }
//   );


// // ---------------------------------------------------------------------------------------------
// // Asynchronous Js & API calls

// const countryContainer = document.querySelector('.country');

// let country = prompt("Enter The Country Name");
// console.log(country);

// //const country = "india";

// const request = new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();
// console.log(request.responseText);

// function renderCountry(data){
//     const lang = data.languages;

//     const html = `
//         <div class="country--card">
//             <div class="country--card--flag" style="background: url('${data.flags.svg}'); background-size: contain; background-repeat: no-repeat"></div>
//             <div class="country--card--details">
//                 <div class="country--name"><h2>${data.name.common}</h2></div>
//                 <h3 style="margin-top: -20px;">${data.region}</h3>
//                 <p class="country--population"><span>🧑‍🤝‍🧑</span>${data.population}</p>
//                 <p class="country--language"><span>🗣️</span>${Object.values(lang)[0]}</p>
//                 <p class="country--currency"><span>💲</span>${Object.keys(data.currencies)[0]}</p>
//             </div>
//         </div>`;

//     countryContainer.insertAdjacentHTML('beforeend', html);
// }

// request.addEventListener('load', function(){
//     //console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     //  Adding its neighbouring country
//     //  Called as "Callback Hell"
//     const neighbour = data.borders ?. [0];
//     console.log(neighbour);

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//         const [data2] = JSON.parse(this.responseText);
//         console.log(data2);

//         renderCountry(data2);

//         //Adding its neighbouring country "No - 3"
//         const neighbour2 = data2.borders ?. [0];
//         console.log(neighbour2);

//         const request3 = new XMLHttpRequest();
//         request3.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour2}`);
//         request3.send();

//         request3.addEventListener('load', function(){
//             const [data3] = JSON.parse(this.responseText);
//             console.log(data3);

//             renderCountry(data3);
//         });
//     });
// });

// // -----------------------------------------------------------------------------------------------
// //  API fetch using "fetch" method

// const countryContainer = document.querySelector('.country');

// const country = prompt("Enter the country");

// function renderCountry(data){
//     const lang = data.languages;

//     const html = `
//         <div class="country--card">
//             <div class="country--card--flag" style="background: url('${data.flags.svg}'); background-size: contain; background-repeat: no-repeat"></div>
//             <div class="country--card--details">
//                 <div class="country--name"><h2>${data.name.common}</h2></div>
//                 <h3 style="margin-top: -20px;">${data.region}</h3>
//                 <p class="country--population"><span>🧑‍🤝‍🧑</span>${data.population}</p>
//                 <p class="country--language"><span>🗣️</span>${Object.values(lang)[0]}</p>
//                 <p class="country--currency"><span>💲</span>${Object.keys(data.currencies)[0]}</p>
//             </div>
//         </div>`;

//     countryContainer.insertAdjacentHTML('beforeend', html);
// }

// function renderError(msg){
//     countryContainer.insertAdjacentText('beforeend', msg);
// }

// const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
// .then(response => {
//     if(!response.ok){
//         throw new Error(`(${response.status}) Error! Country not found.`);
//     }
//     return response.json()
// })
// .then(function(data) {
//     const [info] = data;
//     renderCountry(info);
// })
// .catch(err => {
//     console.error(`${err}💣💣💣`);
//     renderError(`Something went wrong. ${err.message}. 📛📛📛Try again !`);    
// })
// .finally(console.log("This is the 'finally' block. Activates after all the fetch/ catch executions."));



// --------------------------------------------------------------------------------------------
//  #Challenge1
//  Based On Reverse Geocoding

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY 
based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a 
    longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to 
    convert coordinates to a meaningful location, like a city and country name. Use this API to 
    do reverse geocoding: https://geocode.xyz/api.

The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. 
Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, 
that is cheating 😉

3. Once you have the data, take a look at it in the console to see all the attributes that 
    you recieved about the provided location. Then, using this data, log a messsage like this 
    to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get 
    this error with code 403. This is an error with the request. Remember, fetch() does NOT 
    reject the promise in this case. So create an error to reject the promise yourself, with a 
    meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute 
    from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can 
    even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

const countryContainer = document.querySelector('.country');

// const lat = prompt("Enter value of Latitude");
// const long = prompt("Enter value of Longitude");

function renderCountry(data){
    const lang = data.languages;

    const html = `
        <div class="country--card">
            <div class="country--card--flag" style="background: url('${data.flags.svg}'); background-size: contain; background-repeat: no-repeat"></div>
            <div class="country--card--details">
                <div class="country--name"><h2>${data.name.common}</h2></div>
                <h3 style="margin-top: -20px;">${data.region}</h3>
                <p class="country--population"><span>🧑‍🤝‍🧑</span>${data.population}</p>
                <p class="country--language"><span>🗣️</span>${Object.values(lang)[0]}</p>
                <p class="country--currency"><span>💲</span>${Object.keys(data.currencies)[0]}</p>
            </div>
        </div>`;

    countryContainer.insertAdjacentHTML('beforeend', html);
};

function callCountryDetailApi(country) {
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
        const str = response.json();
        //console.log(str);
        return str;
    })
    .then(
        function(data) {
            const [info] = data;
            //console.log(info);
            renderCountry(info);
        }
    );
};

function whereAmI(lat, long){
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`)
    .then(response => {
        const res = response.json();
        console.log(res);
        return res;
    })
    .then(function(data) {
        const info = data;
        //console.log(info.address.country);
        callCountryDetailApi(info.address.country)
    });
}

whereAmI(19.037, 72.873);
whereAmI(52.508, 13.381);
whereAmI(-33.933, 18.474);






