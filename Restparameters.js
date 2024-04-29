function sumAll(...Args) {
    let total = 0;
    for (let i of Args) {
      total += i;
    }
    return total;
  }
  
  console.log(sumAll(1, 2, 3));
  
  console.log(sumAll(1, 2, 3, 4));


  function userInfo(firstName,lastName,...rest)
  {
    let array1 = [rest];

    let obj1 = {
        name: firstName+" "+lastName,
        hobbies : array1
    }

    console.log(obj1);
  }

  userInfo("Sam","Wilson","Tennis","Cricket","Football");