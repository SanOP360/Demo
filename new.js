const myform = document.querySelector("#myform");
const myName = document.querySelector("#name");
const myemail = document.querySelector("#email");
const msg = document.querySelector(".msg");
const users = document.querySelector(".items");
const mybtn = document.querySelector(".btn");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (myName.value === "" || myemail.value === "") {
    msg.classList.add("error");
    msg.textContent = "Please enter all fields";

    setTimeout(() => {
      msg.textContent = "";
      msg.classList.remove("error");
    }, 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${myName.value} : ${myemail.value}`)
    );
    localStorage.setItem(`${myName.value}`, `${myemail.value}`);

    users.appendChild(li);
    myName.value = "";
    myemail.value = "";
  }

}
