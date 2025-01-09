const btnNewTask = document.getElementById("btn-new-task")
const taskArea = document.getElementById("task-area")
const text = document.getElementById("text")
const parentTask = document.getElementById("parent-task")
let newTaskDiv;
let taskCreated; 

const newTask = () => {
  btnNewTask.classList.toggle("hidden")
  newTaskDiv = document.createElement("div")
  newTaskDiv.innerHTML += 
  `<center>
    <div class="task-area">
      <h2>Title</h2>
      <input type="text" id="title">
      <h2>Date</h2>
      <input type="date" id="date">
      <h2>Description</h2>
      <textarea class="input-description" id="description"></textarea>
      <br>
      <button type="submit" id="btn-create-task">CREATE TASK</button>
    </div>
  </center>`
  document.body.appendChild(newTaskDiv)

  const btnCreateTask = document.getElementById("btn-create-task")
  btnCreateTask.addEventListener("click", () => {
    const title = document.getElementById("title")
    const date = document.getElementById("date")
    const description = document.getElementById("description")
    if(title.value && date.value && description.value){
      parentTask.innerHTML += `
        <div class="task">
          <h2>Title: ${title.value}</h2>
          <h3>Date: ${date.value}</h3>
          <h3>Description: ${description.value}</h3>
          <button>DELETE TASK</button>
          <button>EDIT TASK</button>
        </div>`
    text.innerText = ""
    newTaskDiv.remove()
    btnNewTask.classList.toggle("hidden")
    } else {
      text.innerText = "It is required to insert the values ​​in title, date and description"
    }
  })
}

btnNewTask.addEventListener("click", newTask)