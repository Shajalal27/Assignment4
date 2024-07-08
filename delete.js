
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
      return "error message";
    }
    const validNumbers = array.filter(item => typeof item === 'number');
    return validNumbers;
  }
  
  const result = deleteInvalids( {[ 1 , b, 2 , 3 ]});
  console.log(result);
  