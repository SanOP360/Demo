// const axios= require('axios');

const myform = document.querySelector("#myform");
const myName = document.querySelector("#name");
const myEmail = document.querySelector("#email");
const myPhoneno = document.querySelector("#phoneNo");
const users = document.querySelector(".items");

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const UserDetails = {
    name: myName.value,
    email: myEmail.value,
    phoneNo: myPhoneno.value,
  };

//   const userDetailsString = JSON.stringify(UserDetails);
//   localStorage.setItem(myEmail.value, userDetailsString);

axios
  .post(
    "https://crudcrud.com/api/bd442d3d78904226a9427ea7d655460e/appointData",
    UserDetails,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });


  var button = document.createElement("button");
  button.textContent = "Delete";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.cursor = "pointer";

  var editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.style.backgroundColor = "blue";
  editBtn.style.color = "white";
  editBtn.style.cursor = "pointer";

  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      `Name: ${UserDetails.name}, Email: ${UserDetails.email}, Phone NO: ${UserDetails.phoneNo}`
    )
  );

  li.appendChild(button);
  li.appendChild(editBtn);
  users.appendChild(li);

  button.addEventListener("click", function () {
    const emailToRemove = UserDetails.email;
    // localStorage.removeItem(emailToRemove);
    button.parentNode.remove();
  });
  editBtn.addEventListener("click", function () {
    const emailToRemove = UserDetails.email;
    const nameToedit = UserDetails.name;
    const phoneNUmberToEdit = UserDetails.phoneNo;
    // localStorage.removeItem(emailToRemove);
    myEmail.value = emailToRemove;
    myPhoneno.value = phoneNUmberToEdit;
    myName.value = nameToedit;

    editBtn.parentNode.remove();
  });
  myName.value = "";
  myEmail.value = "";
  myPhoneno.value = "";
}
