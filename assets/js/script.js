

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

let runGame=()=>{

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