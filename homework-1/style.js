function addStudent() { 
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const courses = document.getElementById('courses').value.trim();

    // Check if all fields are filled
    if (!name || !age || !courses) { // Fix: Proper empty field check
        alert("Please fill out all fields.");
        return;
    }

    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    // Check for duplicate name
    for (let i = 0; i < rows.length; i++) {
        const existingName = rows[i].cells[0].textContent; // Keep case-sensitive
        if (existingName === name) {
            alert("This student is already added.");
            return; // Stop if a duplicate name is found
        }
    }

    // Add a new row if no duplicates
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const coursesCell = newRow.insertCell(2);

    nameCell.textContent = name;
    ageCell.textContent = age;
    coursesCell.textContent = courses;

    // Create Delete button
    const actionCell = newRow.insertCell(3);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex - 1); 
    };
    actionCell.appendChild(deleteButton);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('courses').value = '';
}

// Search tab    
function searchStudent() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('studentTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const name = cells[0].textContent.toLowerCase();
        const age = cells[1].textContent.toLowerCase();
        const courses = cells[2].textContent.toLowerCase();

        if (name.includes(query) || age.includes(query) || courses.includes(query)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none'; 
        }
    }
}
