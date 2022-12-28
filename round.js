function round(num,digit=0){
  let fraction = 1;
  if(digit > 0){
    fraction = 10 ** digit;
  }else if(digit < 0){
    digit = Math.abs(digit);
    fraction = 0.1 ** digit;
  }

  let result = Math.round(num * fraction) / fraction;
  return result;
}

function roundup(num,digit=0){
  let fraction = 1;
  if(digit > 0){
    fraction = 10 ** digit;
  }else if(digit < 0){
    digit = Math.abs(digit);
    fraction = 0.1 ** digit;
  }

  let result = Math.ceil(num * fraction) / fraction;
  return result;
}

function rounddown(num,digit=0){
  let fraction = 1;
  if(digit > 0){
    fraction = 10 ** digit;
  }else if(digit < 0){
    digit = Math.abs(digit);
    fraction = 0.1 ** digit;
  }

  let result = Math.floor(num * fraction) / fraction;
  return result;
}
