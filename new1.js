const myform = document.querySelector("#myform");
const myName = document.querySelector("#name");
const myemail = document.querySelector("#email");
const msg = document.querySelector(".msg");
const users = document.querySelector(".items");

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
    
    const userDetails = {
      name: myName.value,
      email: myemail.value,
    };

    // Convert the object to a JSON string before storing in local storage
    const userDetailsString = JSON.stringify(userDetails);

    
    localStorage.setItem('myKey', userDetailsString);

    // Display user details in the list
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${userDetails.name} : ${userDetails.email}`)
    );
    users.appendChild(li);

    // Clear input fields
    myName.value = "";
    myemail.value = "";
  }
}
