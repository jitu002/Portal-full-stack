async function search(){
    const response = await fetch('http://localhost:3000/student');
    data=await response.json()
    nm=document.getElementById("lgname").value
    for(let i=0;i<data.length;i++)
    {
        if(nm==data[i].name)
        {
            insertNewRecord(data,i)
            break
        }
    }

}

async function displayall()
{
    const response1 = await fetch('http://localhost:3000/student');
    data2=await response1.json()
    for(let i=0;i<data2.length;i++)
    {
        insertNewRecord(data2,i)
    }
}

function insertNewRecord(formdata,i) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = formdata[i].name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = formdata[i].email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = formdata[i].age;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = formdata[i].class;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = formdata[i].subject;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = formdata[i].usname;
    cell7=newRow.insertCell(6);
    cell7.innerHTML = `<a class="portallink" onClick="onEdit(this)">Edit</a>
    <a class="portallink" onClick="onDelete(this)">Delete</a>
    <a class="portallink" onClick="onUpdate(this)">Update</a>`;
}

async function admin()
{
    const adres=await fetch("http://localhost:3000/admin")
    data1=await adres.json()
    us=prompt("Username:")
    pss=prompt("Password:")
    if(us==data1[0].username && pss==data1[0].password){
        displayall()
    }
}
//edit record
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("lgname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lgemail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lgClass").value = selectedRow.cells[2].innerHTML;
    document.getElementById("lgsubject").value = selectedRow.cells[3].innerHTML;
    document.getElementById("lgusername").value = selectedRow.cells[4].innerHTML;
    document.getElementById("lgpassword").value = selectedRow.cells[5].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.usname;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.age;
    selectedRow.cells[3].innerHTML = formData.class;
    selectedRow.cells[4].innerHTML = formData.subject;
    selectedRow.cells[5].innerHTML = formData.usname;
    selectedRow.cells[6].innerHTML = formData.password;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}