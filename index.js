let count =0
let countEl = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
function increment(){
    count+=1
    countEl.innerText=count
}

function save(){
    let countStr = count + " - "
    saveEL.innerText += countStr
    console.log(count)
}