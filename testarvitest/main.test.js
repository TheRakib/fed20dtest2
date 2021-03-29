//main.test.js
//main.spec.js
//export default functionname

// export {  }
// import sum from "./main"
// import {} from "./main"


const {countTotalSalaryWithBonus,countYearsSalary } = require("./main")
// import b
//destructuring 

// test("först argument ska vara nåt vettig meddelande", ()=>{
    // den kod som ska testa din unit/feature/function
    // expect(sum(5,5)).toBe(10)

//})





 test("om count total salary with bonus generar rätt resultat", ()=> {

    const test = countTotalSalaryWithBonus()
     expect( test ).toBe(20)
 })


 test("vi ska testa om sum inte ska vara undefined", ()=> {
    expect( sum(1, 2) ).not.toBeUndefined();
})


// Node js:  node , npm 
// Node js:   run time miljö 
// 10:00

  // setup jest miljö 
  // köra test 
  // exports 
  // konstiga js
  

// module.exports

