// Create and read Data Start

var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) {
      insertNewRecord(formData);
    } else {
      updateRecord(formData);
    }
    resetForm();
  }
}

function readFormData() {
  // Create a empty object and initialize/assign properties and values
  var newData = {};
  newData["fullName"] = document.getElementById("fullName").value;
  newData["email"] = document.getElementById("email").value;
  newData["phone"] = document.getElementById("phone").value;
  newData["address"] = document.getElementById("address").value;
  return newData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("tablelist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phone;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.address;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML =
    '<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>';
}

// Create and read Data Ends
// Function and operations on current Data

// When all a Cell Deleted From Table
function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  selectedRow = null;
}
// Reset Form Ends
// Edit Function Start
function onEdit(tabelcell) {
  selectedRow = tabelcell.parentElement.parentElement; // row1>a>row of(cell)
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("email").value = selectedRow.cells[1].innerHTML;
  document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
  document.getElementById("address").value = selectedRow.cells[3].innerHTML;
}
// Edit Function Ends
// // Delete Function Start
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.phone;
  selectedRow.cells[3].innerHTML = formData.address;
}
// Delete Function Ends

// Validations
function onDelete(tabelcell) {
  if (confirm("Are you sure to delete this record ?")) {
    row = tabelcell.parentElement.parentElement;
    document.getElementById("tablelist").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
    document.getElementById("fullNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("fullNameValidationError")
        .classList.contains("hide")
    )
      document.getElementById("fullNameValidationError").classList.add("hide");
  }
  return isValid;
}
