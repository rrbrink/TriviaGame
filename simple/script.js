var t = 30;
var timesUp;
var correctAnswer = [];



setInterval( startTimer , 1000);


var timeDOM = document.getElementById('timer');
console.log(timeDOM);
function startTimer () {
        if(t != 0) {
            t--;           
            timeDOM.innerHTML = t + "";
        } {
            if (t === 0) {
                $('#boxText').hide();
                $('#gif2').toggle();
            }

        }
    }

    startTimer()

//create a function for the answers
    function handleClick()
    {         
    var amountCorrect = 0;      
    //loop to check   
      for(var i = 1; i <= 45; i++) {
          var radios = document.getElementsByName('group'+i);
            for(var j = 0; j < radios.length; j++) {
                var radio = radios[j];
         if(radio.value == "right" && radio.checked) {
         amountCorrect++;
        }
    }
}          // if all 3 are answered corect         
     console.log("Correct Responses: " + amountCorrect);
     if (amountCorrect == 3) {
         console.log("you win")
         //then make the text disapear
         $('#boxText').hide();
         //display fun Gif
         $('#gif').toggle();
         //display winner txt
         $('#winner').toggle();
         
         
         //create an else for is not all are answered corect. 
         //make try again button apear
     }
}