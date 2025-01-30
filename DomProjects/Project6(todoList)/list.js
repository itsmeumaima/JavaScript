let form = document.querySelector("form");
const btn = document.querySelector("#add");
let inp = document.querySelector("#taskInput");
let ans = document.querySelector(".todo");

function todo(value1) {
    let d1 = document.createElement("div");
    let text = document.createElement("span");

    text.innerHTML = value1;
    d1.appendChild(text);
    
    let end = document.createElement("span");
    end.innerHTML = "&times;";
    end.classList.add("delete");

    end.addEventListener('click', function () {
        ans.removeChild(d1);
    });

    d1.appendChild(end);
    d1.classList.add("task-item"); // Adding a class for styling
    return d1;
}

btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(inp.value);
    let val = inp.value.trim();
    
    if (val === "") {
        ans.innerHTML = `Please Enter a valid task`;
    } else {
        ans.appendChild(todo(val));
        inp.value = "";
    }
});
