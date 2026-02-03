


let screen=document.getElementById("res");


function solve(value){
    screen.value+=value;

}

function Clear(){
    screen.value="";

}

function Result(){
    try{
        screen.value=eval(screen.value);

    }catch{
        screen.value ="Error";

    }
}

