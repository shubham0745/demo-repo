function addTodo(){
    const inputElement=document.querySelector('input');
    const value=inputElement.value;
    console.log(value);
    }

// let ctr=0;
// function Stopwatch(){
//      const el=document.querySelectorAll("h4")[1];
//      el.innerHTML=ctr;
//      ctr=ctr+1;    
//      setTimeout(Stopwatch,1000);           
// }

// setTimeout(Stopwatch,1000);
let ctr = 1;

function deleteTodo(index) {
    const element = document.getElementById("tod-" + index);
    element.parentNode.removeChild(element);
}

function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", "tod-" + ctr);

    // ✅ Corrected button string with proper quotes and variable placement
    newDivEl.innerHTML = "<div>" + value + "</div><button onclick='deleteTodo(" + ctr + ")'>Delete</button>";

    document.querySelector("body").appendChild(newDivEl);

    ctr = ctr + 1; // Increment counter
}
