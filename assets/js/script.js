

document.addEventListener("DOMContentLoaded",function(){

    let buttons=document.getElementsByTagName("button");
    for(let button of buttons)
    {

        button.addEventListener("click",function(){
            switch(this.getAttribute("data-type").toLowerCase())
            {
                case "submission":
                    alert(`You have clicked submition`);
                default:
                    alert(`You have clicked ${this.getAttribute("data-type")} `)
            }
        })
    }
})
/**
 * This function runs once the DOM is loaded 
 * and after the question is answered
 */
let runGame=()=>{
    let firstNumber=Math.floor(Math.random()*25)+1;
    let secondNumber=Math.floor(Math.random()*25)+1;
}


let checkAnswer=()=>{

}

let calculateCorrectAnswer=()=>{

}
let incrementScore=()=>{

}

let incrementWrongAnswer=()=>{

}

let displayAdditionQuestion=()=>{

}

let displaySubtractionQuestion=()=>{

}

let displayMultiplyQuestion=()=>{

}

let displayDivisionAnswer=()=>{
    
}