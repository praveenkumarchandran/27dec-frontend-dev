let count = 0;


let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el")


function increment (){
    count += 1
    countEl.innerHTML = count
}


function decrement(){
    count -=1;
    countEl.innerHTML= count;

}

function save(){
    let countstr = count + "-"
    saveEl.innerText +=  countstr
    countEl.innerText = 0 
    count= 0 
}




