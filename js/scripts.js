function makeBeep(number) {
  let beeper = [];
  for(let i=1; i === 1; i++){
    if (i === 1){
      beeper.push('beep')
    } else {
      fizzBuzzArray.push(i);
    }
  }
  return beeper;
}
function beepboop(number) {
  let beepboopArray = [];
  function numberLength(number) {
    let length = 0;
    let n = Math.abs(number);
    do {
      n /= 10;
      length++;
    } while (n >= 1);
    return length;
  }
  for(let i=1; numberLength <= 16; i++){
    if (i === 3){
      beepboopArray.push("wont you be my neighbor")
    }else if(i === 2){
      beepboopArray.push("boop");
    } else if (i === 1) {
      beepboopArray.push("beep");
    } else {
      beepboopArray.push(i);
    }
  }
  return beepboopArray;
}

function numberLength(number) {
	let length = 0;
	let n = Math.abs(number);
	do {
		n /= 10;
		length++;
	} while (n >= 1);
	return length;
}

function beepboop(number) {
  let beepboopArray = [];
  for(let i=0; i < 16; i++){
    if (i === 3){
      beepboopArray.push("wont you be my neighbor")
    }else if(i === 2){
      beepboopArray.push("boop");
    } else if (i === 1) {
      beepboopArray.push("beep");
    } else {
      beepboopArray.push(i);
    }
  }
  return beepboopArray;
}
