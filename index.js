/* //Keep it simple stupid



// single responsibility principle : 

function loginAndGetUserInfo() {
    console.log("logging user och getting user info")
}

function login() {

}

function getUserInfo() {

}

// open closed principle :

const listaRawMaterials = ["ris", "nöttkött",]


const makeIceCream = [""]

function makeFood(list) {

    console.log("mat lagning ")

}

makeFood(listaRawMaterials)

makeFood(make)


// DRY 

//for loop

var list = [1, 2, 3, 4, 5, 6];

console.log(list[0])

for (var i = 0; i < list.length; i++) {
    console.log(list[i])
}

//functioner

 */


//**********************************// */
    // functions, class 
//********************************** */

// state , payload 



//console.log("first line");
const sayHello = function () {
    //console.log("hello ")
    return 10
}

const getValueFromFunction = sayHello();

//console.log(getValueFromFunction)

//console.log("second line");



function testarReturn(a, b){


    //console.log( a + b)
    return a+b
}

const getReturnedValue = testarReturn(10, 30);
//console.log(getReturnedValue)




function countSalary(time, timePrice) {
  
   // console.log(time*timePrice)

}

//verktyg så att man kan skriva bättre kod , clean kod, inte upprepande kod 

  
  
// Object , Object iteration , ? , tinary operator (conditional rendering), 



//console.log(person.name?.split(""))
 
/* if(true) {
    console.log("true block")
}
else {
    console.log("false block")
}
 */

//  (true) ? console.log("true block") : console.log("false block")

// !



// kopiera en object 
let personInfo = {
    name:"", 
    personnummer:000000000, 
    profession:"inget"
}
// Arrow function 
// different Loop 
// json object : 
  // loop för att kunna iterera/loopa igenom object/lista
  
  const personLista =["rakib", "ida", "alex", "lasse"];

  //personLista.forEach( function(person){console.log(person)}   )

 // ()  =>  {     }

personLista.forEach((person, index) => {
  //  console.log("personsnamn " , person)
    //console.log("indexNummer " , personInfo)
})


// [object object]  , för att lösa detta 
  
// kopiera en array 
const newPersonLista = ["Kalle anka",  ...personLista, "Nalle puh"]
//console.log(newPersonLista)
//console.log(personLista)




const newPersonInfo = {...personInfo, age:28}

personInfo={
    name:"dummy text", 
    personnummer:000000000, 
    profession:"inget", 
    testarViNewPersonInfo:"om det lägger till efter (personInfo är oginalt objekt)"
}

//object iteration 
for(var [k, v] of Object.entries(personInfo))
{
   // console.log("key: " , k);
    //console.log("value: " , v)
}

//console.log(Object.keys(personInfo))
//Object.keys(personInfo).forEach( p=> console.log(p))
//console.log(newPersonInfo);


Object.values(personInfo).forEach( v=> console.log(v))




//  ***changing original list





//parprogrammering
