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
const numbers = [1,2,3,4,5,6];
const string = "beep";
const stringArray = string.split(" ");
let xArray = [];
stringArray.forEach(function(letter) {
  if (numbers.includes(letter)) {
    xArray.push("beep");
  } else {
    xArray.push(letter);
  }
});
const finalString = xArray.join(" ");
function noInputtednumbers() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}