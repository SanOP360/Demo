document.addEventListener("DOMContentLoaded", function () {
  const myform = document.querySelector("#myform");
  const myName = document.querySelector("#name");
  const mydescription = document.querySelector("#description");

  const taskRemaining = document.querySelector(".items1");
  const taskDone = document.querySelector(".items2");

  const apiUrl =
    "https://crudcrud.com/api/767341dc38bd4442b6c0605963b5948b/todo";

  function createTodoElement(task) {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${task.name} : ${task.description}`)
    );

    const delButton = createButton("&#10006;");
    delButton.style.backgroundColor = "white";
    delButton.style.color = "red";
    li.appendChild(delButton);

    const tickButton = createButton("&#x2714;");
    tickButton.style.backgroundColor = "white";
    tickButton.style.color = "green";
    li.appendChild(tickButton);

    const taskId = task._id;

    delButton.addEventListener("click", function () {
      deleteTask(taskId, li);
    });

    tickButton.addEventListener("click", function () {
      moveTaskToDone(taskId, li);
    });

    taskRemaining.appendChild(li);
  }



  function createButton(innerHtml) {
    const button = document.createElement("button");
    button.innerHTML = innerHtml;
    button.style.cursor = "pointer";
    return button;
  }

  function deleteTask(taskId, taskElement) {
    axios
      .delete(`${apiUrl}/${taskId}`)
      .then((response) => {
        console.log(response);
        taskElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function moveTaskToDone(taskId, taskElement) {
    axios
      .delete(`${apiUrl}/${taskId}`)
      .then((response) => {
        console.log(response);
        taskElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
    taskDone.appendChild(taskElement);
    taskElement.removeChild(taskElement.querySelector("button"));
    taskElement.removeChild(taskElement.querySelector("button"));
  }


  function addTodo() {
    const todoData = {
      name: myName.value,
      description: mydescription.value,
    };

    axios
      .post(apiUrl, todoData)
      .then((response) => {
        console.log(response);
        createTodoElement(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    myName.value = "";
    mydescription.value = "";
  }

  myform.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });

  window.addEventListener("DOMContentLoaded", () => {
    axios
      .get(`${apiUrl}?status=remaining`)
      .then((response) => {
        console.log(response);
        for (const task of response.data) {
          createTodoElement(task);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${apiUrl}?status=done`)
      .then((response) => {
        console.log(response);
        for (const task of response.data) {
          createDoneElement(task);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function createDoneElement(task) {
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`${task.name} : ${task.description}`)
  );

  taskDone.appendChild(li);
}

});
