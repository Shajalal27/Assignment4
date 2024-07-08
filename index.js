// ==========  Assignment-4 =============//

// Problem-1
function calculateMoney(ticketSale){ 
     
        let perTicket = 120;
        let totalSale = ticketSale * perTicket;
        const gard = 500;
        const stafCost = 8 * 50;
        const totalCost = gard + stafCost; 
        const result = totalSale - totalCost;
        return result;
}
   
// const total = calculateMoney(10);
// console.log(total);

// Problem-2
function checkName(name){
    if(typeof name !=='string'){
        return "invalid";
    }
   let myName = name.toLowerCase();
  if(['a', 'e', 'i', 'o', 'u', 'y', 'w'].some(char => myName.endsWith(char))){
    return "Good Name";
  }
  else{
    return "Bad Name";
  }
}
// console.log(checkName("jhankar"));

// Problem-3
function deleteInvalids(array){
  if(!Array.isArray(array)){
    return "Invalid array";
  }
  return array.filter(item => typeof item === "number" && !isNaN(item));

}
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
// console.log(deleteInvalids(["1" , {num:2} , NaN ]));
// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));


// Problem-4
function password(user_info){
    if(!user_info.name || !user_info.birthYear || !user_info.siteName){
        return "Invalid";
    }
    const name = user_info.name;
    const birthYear = user_info.birthYear;
    const siteName = user_info.siteName;

    if(typeof name !== 'string' || name.trim() === ''){
      return "Invalid";
    }

    if(typeof siteName !== 'string' || siteName.trim() === ''){
      return "Invalid";
    }

    if(!Number.isInteger(birthYear) || birthYear.toString().length !== 4){
      return "Invalid";
    }

    if(!/^[A-Za-z]+$/.test(siteName)){
      return "Invalid";
    }

    const password =`${siteName.charAt(0).toUpperCase() + siteName.slice(1)}#${name}@${birthYear}`;
    return password;

};

  const userInfo = {name: "kolimuddin", birthYear:1999, siteName: "google"};
  const userInfo1 = {name: "Fuad", birthYear:2000, siteName: "Facebook"};
  return password(userInfo)
  // console.log(password(userInfo));
  // console.log(password(userInfo1));


  // Problem-5

  function monthlySavings(payments, livingCost) {

    if(!Array.isArray(payments) || typeof livingCost !== 'number'){
       return "Invalid"
    }
    const calculateIncomeAfterTax = (payment) =>{
       return payment >= 3000 ? payment * 0.8 : payment 
    }

    const totalIncome = payments.reduce((acc, payment) => acc + calculateIncomeAfterTax(payment), 0);
    const savings = totalIncome - livingCost
    return savings >= 0 ? savings : "earn more"
    
  }
  
  console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));

  
  
  
  


