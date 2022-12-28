function round(num,digit=0){
  if(digit > 0){
    var fraction = 10 ** digit;
  }else if(digit < 0){
    digit = Math.abs(digit);
    var fraction = 0.1 ** digit;
  }else{
    fraction = 1;
  }

  var result = Math.round(num * fraction) / fraction;
  return result;
}

function roundup(num,digit=0){
  if(digit > 0){
    var fraction = 10 ** digit;
  }else if(digit < 0){
    digit = Math.abs(digit);
    var fraction = 0.1 ** digit;
  }else{
    fraction = 1;
  }

  var result = Math.ceil(num * fraction) / fraction;
  return result;
}

function rounddown(num,digit=0){
  if(digit > 0){
    var fraction = 10 ** digit;
  }else if(digit < 0){
    digit = Math.abs(digit);
    var fraction = 0.1 ** digit;
  }else{
    fraction = 1;
  }

  var result = Math.floor(num * fraction) / fraction;
  return result;
}