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

  const userDetailsString = JSON.stringify(UserDetails);
  localStorage.setItem(myName.value, userDetailsString);

  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      `Name: ${UserDetails.name}, Email: ${UserDetails.email}, Phone NO: ${UserDetails.phoneNo}`
    )
  );
  users.appendChild(li);

  // Clear input fields
  myName.value = "";
  myEmail.value = "";
  myPhoneno.value = "";
}
