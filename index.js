const Name = document.getElementById("name"); // getting all input Fields and buttons

const StudentID = document.getElementById("studentId");

const Email = document.getElementById("email");

const Contact = document.getElementById("contact");

const StudentRecord = document.getElementById("table-body");

const Submit = document.getElementById("submit");

Submit.addEventListener("click", RegisterDetails);  // Adding Event Listener to submit button

function RegisterDetails() {

    // Creating table and row data

    const RecordData = document.createElement("tr");
    const item1 = document.createElement("td");
    item1.innerHTML = Name.value;
    item1.classList.add("item"); // adding class for styling and editing
    localStorage.setItem("Name", Name.value);

    const item2 = document.createElement("td");
    item2.innerHTML = StudentID.value;
    item2.classList.add("item");
    localStorage.setItem("StudentID", StudentID.value);

    const item3 = document.createElement("td");
    item3.innerHTML = Email.value;
    item3.classList.add("item");
    localStorage.setItem("Email", Email.value);

    const item4 = document.createElement("td");
    item4.innerHTML = Contact.value;
    item4.classList.add("item");
    localStorage.setItem("Contact", Contact.value);


    // Validation for empty fields and contact number length

    if (Name.value == "" || StudentID.value == "" || Email.value == "" || Contact.value == "" || Contact.value.length < 10) {
        alert("Please fill all the details correctly");
        return;
    }

    // Creating delete button

    const deletebutton = document.createElement("button");
    deletebutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deletebutton.classList.add("trash-button");

    // appending all items to record data 

    RecordData.appendChild(item1);
    RecordData.appendChild(item2);
    RecordData.appendChild(item3);
    RecordData.appendChild(item4);
    RecordData.appendChild(deletebutton);

    // Appending record data to student record

    StudentRecord.appendChild(RecordData);

    // Clearing input fields after submission

    Name.value = "";
    StudentID.value = "";
    Email.value = "";
    Contact.value = "";

}

// Deleting Record data

StudentRecord.addEventListener("click", deleteRecord);

function deleteRecord(e) {
    const item = e.target;
    if (item.classList[0] == "fa-solid") {
        const record = item.parentElement.parentElement;
        record.remove();
    }

}

// Editing Record data

StudentRecord.addEventListener("click", editRecord);

function editRecord(e) {
    const item = e.target;
    if (item.classList[0] == "item") {
        const record = item;
        const newValue = prompt("Enter new Value", record.innerHTML);
        if (newValue != null && newValue != "") {
            record.innerHTML = newValue;
        }
    }
}

window.addEventListener("load", () => {
    const storedName = localStorage.getItem("Name");
    const storeStudentID = localStorage.getItem("StudentID");
    const storeEmail = localStorage.getItem("Email");
    const storeContact = localStorage.getItem("Contact");
    if (storeEmail && storedName && storeStudentID && storeContact != "") {
        StudentRecord.innerHTML = `<tr>
       <td class="item">${storedName}</td>
       <td class="item">${storeStudentID}</td>
       <td class="item">${storeEmail}</td>
       <td class="item">${storeContact}</td>
       <td><button class="trash-button"><i class="fa-solid fa-trash"></i></button></td>
   </tr>`;
    }
    return;
})

