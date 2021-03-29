
//function b(x){}
function countYearsSalary(monthlySalary){
    return monthlySalary *12;
}


function countTotalSalaryWithBonus(a , b, c) {
  const salary = countYearsSalary(c);
  return salary + b
}
 



module.exports = {countTotalSalaryWithBonus,countYearsSalary };
//module.exports = countYearsSalary; 



console.log(module.exports)
