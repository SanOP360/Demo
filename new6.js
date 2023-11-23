const myform = document.querySelector("#myform");
const myName = document.querySelector("#name");
const myEmail = document.querySelector("#email");
const myPhoneno = document.querySelector("#phoneNo");
const users = document.querySelector(".items");

// Function to create a new list item and append it to the list
function createElement(userData) {
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
      `Name: ${userData.name}, Email: ${userData.email}, Phone NO: ${userData.phoneNo}`
    )
  );

  li.appendChild(button);
  li.appendChild(editBtn);
  users.appendChild(li);

  button.addEventListener("click", function () {
    //  delete action here
    
    const emailToRemove = userData.email;
    // axios.delete("https://crudcrud.com/api/bd442d3d78904226a9427ea7d655460e/appointData/" + emailToRemove)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    li.remove();
  });

  editBtn.addEventListener("click", function () {
    // Handle the edit action here
    // For example: populate the form fields with the data for editing
    myName.value = userData.name;
    myEmail.value = userData.email;
    myPhoneno.value = userData.phoneNo;

    // Remove the list item from the DOM
    li.remove();
  });
}

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const UserDetails = {
    name: myName.value,
    email: myEmail.value,
    phoneNo: myPhoneno.value,
  };

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

      // Add the new data to the list
      createElement(UserDetails);
    })
    .catch((err) => {
      console.log(err);
    });

  // Reset form fields
  myName.value = "";
  myEmail.value = "";
  myPhoneno.value = "";
}

// Load existing data from the server on page load
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/bd442d3d78904226a9427ea7d655460e/appointData"
    )
    .then((response) => {
      console.log(response);

      // Loop through existing data and create list items
      for (var i = 0; i < response.data.length; i++) {
        createElement(response.data[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
