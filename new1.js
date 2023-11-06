var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Select the default items in the list
var defaultItems = itemList.getElementsByTagName("li");

// Loop through the default items and add edit buttons
for (var i = 0; i < defaultItems.length; i++) {
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm float-right edit";
  editBtn.appendChild(document.createTextNode("✎"));

  // Add the edit button to the current default item
  defaultItems[i].appendChild(editBtn);
}

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById("item").value;
  var newDesc = document.getElementById("descrip").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";

  // Add text node with input values for the item and description, separated by a space
  li.appendChild(document.createTextNode(newItem + " " + newDesc));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add edit button
  var editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm float-right edit";
  editBtn.appendChild(document.createTextNode("✎"));

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append buttons to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");

  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemText = item.textContent.toLowerCase(); // Get combined item and description text

    if (itemText.includes(text)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
