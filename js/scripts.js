//UI Logic

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const formInput = $("input#input").val();
    let result = beepboop(formInput)
    $("#output").text(result);
  });
});

//Business logic

function beepboop(number) {
  let beepboopArray= [];
    for(let i=0; i <= number; i++){
      let beepboopString =i.toString();
      if (beepboopString.includes("3")){
      beepboopArray.push("wont ypu be my neighbor");
    } else if (beepboopString.includes("2")){
      beepboopArray.push("boop");
    }else if(beepboopString.includes("1")){
      beepboopArray.push("beep");
    } else {
      beepboopArray.push(" " + beepboopString);
    }
  }
  return beepboopArray;
}
