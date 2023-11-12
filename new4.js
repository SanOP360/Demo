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
  localStorage.setItem(myEmail.value, userDetailsString);

  var button = document.createElement("button");
  button.textContent = "Delete";
  button.style.backgroundColor = "red";
  button.style.color = "white";
  button.style.cursor='pointer';
  
  
  
  

  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      `Name: ${UserDetails.name}, Email: ${UserDetails.email}, Phone NO: ${UserDetails.phoneNo}`
    )
  );

  li.appendChild(button);
  users.appendChild(li);
  
   button.addEventListener("click", function () {
     
     const emailToRemove = UserDetails.email;

     
     console.log("Email to remove:", emailToRemove);

     
     localStorage.removeItem(emailToRemove);

    
     button.parentNode.remove();
   });


  myName.value = "";
  myEmail.value = "";
  myPhoneno.value = "";
}
