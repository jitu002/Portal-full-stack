async function dataSubmit(){
    alert("Data submitted")
    var data=readData();
    const response = await fetch('http://localhost:3000/student', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
          },
      }); 
}

function readData(){
    var formdata={}
    formdata["name"]=document.getElementById("name").value;
    formdata["email"]=document.getElementById("email").value;
    formdata["age"]=document.getElementById("age").value;
    formdata["class"]=document.getElementById("class").value;
    formdata["subject"]=document.getElementById("subject").value;
    formdata["usname"]=document.getElementById("usname").value;
    formdata["password"]=document.getElementById("password").value;
    return formdata;
}

async function signIn(){
    const response = await fetch('http://localhost:3000/student');
    data=await response.json()
    semail=document.getElementById("email1").value
    suname=document.getElementById("usname1").value
    spasswd=document.getElementById("password1").value
    if(semail=="" || suname=="" || spasswd==""){
        alert("Invalid data")
    }
    else{
        for(let i=0;i<data.length;i++)
    {
        if(semail==data[i].email && suname==data[i].usname && spasswd==data[i].password)
        {
            window.open("./login.html")
        }
    }
    }   
}