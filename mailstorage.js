function submitForm() {
    var email = document.getElementById('inputEmail').value;
    var emailType = document.getElementById('emailType').value;

    // Clear input fields
    document.getElementById('inputEmail').value = '';
    document.getElementById('emailType').value = 'students';

    // Display submitted data in the respective table
    var tableBody = document.getElementById(emailType + 'TableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell = newRow.insertCell(0);
    cell.innerHTML = email;
}