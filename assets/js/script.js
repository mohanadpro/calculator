

document.addEventListener("DOMContentLoaded",function(){

    let buttons=document.getElementsByTagName("button");
    for(let button of buttons)
    {

        button.addEventListener("click",function(){
            switch(this.getAttribute("data-type"))
            {
                case "submission":
                    checkAnswer();
                    break;
                case "addition":
                    runGame("addition");
                    break;
                case "subtraction":
                    runGame("subtraction");
                    break;
                case "multiply":
                    runGame("multiply");
                    break;
                case "division":
                    runGame("division");
                    break;
            }
        })
    }
    runGame("addition");
})
/**
 * This function runs once the DOM is loaded 
 * and after the question is answered
 */
let runGame=(dataType)=>{
    let firstNumber=Math.floor(Math.random()*25)+1;
    let secondNumber=Math.floor(Math.random()*25)+1;
    switch(dataType)
    {
        case "addition":
            displayAdditionQuestion(firstNumber,secondNumber);
            break;
        case "subtraction":
            displaySubtractionQuestion(firstNumber,secondNumber);
            break;
        case "multiply":
            displayMultiplyQuestion(firstNumber,secondNumber);
            break;
        case "division":
            displayDivisionAnswer(firstNumber,secondNumber);
            break;
    }
}


let checkAnswer=()=>{
    let userAnswer=parseInt(document.getElementById("answer-box").value);

    let correctAnswer= calculateCorrectAnswer();
    let checkedAnswer=correctAnswer===userAnswer;
    console.log(correctAnswer, userAnswer);
    if(checkedAnswer)
    {
        incrementScore();
    }
    else
    {
        incrementWrongAnswer();
    }


}

/**
 * it gets the operands and operator from the page
 * and depend on the operator it make the calculation and return the value
 */

let calculateCorrectAnswer=()=>{
    let operand1=parseInt(document.getElementById("operand1").innerText);
    let operand2=parseInt(document.getElementById("operand2").innerText);
    let operator=document.getElementById("operator").innerText;
    console.log(operator);
    switch(operator)
    {
        case "+":
            return operand1+operand2;
        case "-":
            return operand1-operand2;   
        case "X":
            return operand1*operand2;
        case "/":
            return operand1/operand2;                                 
    }
}
let incrementScore=()=>{
    let correctScore=parseInt(document.getElementById("correct-score").innerText);

    correctScore++;
    document.getElementById("correct-score").innerText=correctScore;
}

let incrementWrongAnswer=()=>{
    let wrongScore=parseInt(document.getElementById("wrong-score").innerText);

        wrongScore++;
        document.getElementById("wrong-score").innerText=wrongScore;
}

/**
 * It accepts two parameters
 * after that it increment them together
 */
let displayAdditionQuestion=(firstNumber,secondNumber)=>{
    document.getElementById("operand1").textContent=firstNumber;
    document.getElementById("operand2").textContent=secondNumber;
    document.getElementById("operator").textContent="+";
}

let displaySubtractionQuestion=(firstNumber,secondNumber)=>{
    document.getElementById("operand1").textContent=firstNumber;
    document.getElementById("operand2").textContent=secondNumber;
    document.getElementById("operator").textContent="-";
}

let displayMultiplyQuestion=(firstNumber,secondNumber)=>{
    document.getElementById("operand1").textContent=firstNumber;
    document.getElementById("operand2").textContent=secondNumber;
    document.getElementById("operator").textContent="X";
}

let displayDivisionAnswer=(firstNumber,secondNumber)=>{
    document.getElementById("operand1").textContent=firstNumber;
    document.getElementById("operand2").textContent=secondNumber;
    document.getElementById("operator").textContent="/";
}