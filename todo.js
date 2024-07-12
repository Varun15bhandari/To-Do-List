const input=document.getElementById('inputId');
const task=document.getElementById('task');
 
function addTask(){
    if(input.value === ''){
        alert("type your task");

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input.value=" ";
    savaDate();
}
task.addEventListener("click",function(e){
    if(e.target.tagName==="Li"){
        e.target.classList.toggle("checked");
        savaDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savaDate();
    }
},false);
function savaDate(){
    localStorage.setItem("data",task.innerHTML);
}
   function showTask(){
    task.innerHTML=localStorage.getItem("data");
}
showTask(); 