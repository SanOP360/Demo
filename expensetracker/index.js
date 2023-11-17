let myexpenseAmount = document.querySelector("#expenseAmount");
let mydescription = document.querySelector("#chooseDescription");
let mycategory = document.querySelector("#expenseCategory");
let myform = document.querySelector("form");
let list = document.querySelector("ul");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const details = {
    amount: myexpenseAmount.value,
    description: mydescription.value,
    category: mycategory.value,
  };

  const detailString = JSON.stringify(details);
  localStorage.setItem(mydescription.value, detailString);

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "DELETE";
  deleteButton.classList.add("btn", "btn-danger");
  deleteButton.style.margin = "5px";
  deleteButton.style.paddingTop = "1px";

  var editBtn = document.createElement("button");
  editBtn.style.backgroundColor = "grey";
  editBtn.style.color = "white";
  editBtn.style.paddingLeft = "23px";
  editBtn.style.paddingRight = "23px";
  editBtn.textContent = "EDIT";
  editBtn.classList.add("btn", "btn");
  editBtn.style.margin="5px";
  editBtn.style.paddingTop="1px";

  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      `${details.amount} - ${details.category} - ${details.description}`
    )
  );

  li.appendChild(deleteButton);
  li.appendChild(editBtn);

  list.appendChild(li);

  deleteButton.addEventListener("click", function () {
    const descToRemove = details.description;
    localStorage.removeItem(descToRemove);

    li.remove();
  });

  editBtn.addEventListener("click", function () {
    const descToEdit = details.description;
    const categToEdit = details.category;
    const amountToEdit = details.amount;

    localStorage.removeItem(descToEdit);
    myexpenseAmount.value = amountToEdit;
    mydescription.value = descToEdit;
    mycategory.value = categToEdit;

    li.remove();
  });
  mycategory.value="";
  mydescription.value="";
  myexpenseAmount.value="";
}
