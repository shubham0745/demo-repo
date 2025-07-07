function deleteTodo(index){
    const element=document.getElementById("todo-"+index);
    element.parentNode.removeChild(element);
}
let ctr=10;
function addTodo(){
    const value=document.querySelector("input").value;
    const spanEl=document.createElement("span");
    const buttonEl=document.createElement("button");

    spanEl.innerHTML=value;
    buttonEl.innerHTML="delete";

    const divEl=document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);
    divEl.setAttribute("id","todo-"+ctr);
    buttonEl.setAttribute("onclick", "deleteTodo(" + ctr + ")");
    document.querySelector("body").appendChild(divEl);
    ctr=ctr+1;
}