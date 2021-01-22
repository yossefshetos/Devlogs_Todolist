let add                  = document.getElementById("add");
let task                 = document.getElementById("task");
let todolist             = document.getElementById("todolist");
let alertW               = document.getElementById("alertW");
let tasksCountDiv        = document.getElementById("tasks-count");
let tasksDoneCount        = document.getElementById("tasks-done-count");

window.onload = task.focus();

add.onsubmit = newTask;

tasksEmpty();

function newTask(e) {

  e.preventDefault()
  
  if (task.value === "") {

    alertW.innerHTML += `<div class="input-null">Please enter new task !</div>`;

    setTimeout(() => {

      let inputNull = document.querySelectorAll(".input-null")

      inputNull.forEach(iNull => {
        iNull.style.height = 0;
        iNull.style.padding = 0;
        
        setTimeout(() => iNull.remove(),1000)
      })


    }, 2000)

  } else {
    
    // Add Task Item
    let taskItem = document.createElement("li");
    taskItem.classList.add("list-item");
    taskItem.innerHTML = `

      <span class="capitalize">${task.value}</span>
      <i class="del fa fa-trash-o" aria-hidden="true"></i>

    `;

    todolist.appendChild(taskItem);

    count(todolist.children.length);
    tasksEmpty();
    


    // Delete Task Item
    let del = document.querySelectorAll(".del");

    del.forEach(btn => {
      btn.onclick = removeItem;
    })

    // Done Task Item
    let allTaskItem = document.querySelectorAll(".list-item");

    allTaskItem.forEach(task => {
      task.children[0].onclick = done;
    })

    // Empty Input
    task.value = ""
    task.focus();

  }

}

function removeItem(e) {

  e.target.parentNode.remove();
  count(todolist.children.length);
  tasksEmpty();
  doneCount()
}

function done(e) {
  e.target.classList.toggle("done")
  doneCount()
}

function count(count) {
  tasksCountDiv.innerHTML = `${count}`;
}

function tasksEmpty() {

  let tasksEmptyDiv = document.querySelector(".tasks-empty");

  if (todolist.children.length === 0) {

    
    tasksEmptyDiv.innerHTML = "Tasks Empty";

  } else {
    tasksEmptyDiv.innerHTML = "";
  }

}

function doneCount() {
  let doneLength = document.querySelectorAll(".done").length;
  tasksDoneCount.innerHTML = `${doneLength}`;
}