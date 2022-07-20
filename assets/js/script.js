const students= [
    {   rollNo: "0001",
        name: "Mary Mbugua",
        serialNo:"yh89706",
        class:"MP26",
        section:"Acess Program"
    },
    {
        rollNo: "0002",
        name: "Anne Wambui",
        serialNo:"yh89706",
        class:"MP26",
        section:"Acess Program"
    },
    {
        rollNo: "0003",
        name: "Anne Wambui",
        serialNo:"yh89706",
        class:"MP26",
        section:"Acess Program"
    },
    ];
    
    var table = document.getElementById("rows");
    table.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = students[i].rollNo;
      cell2.innerHTML = students[i].name;
      cell3.innerHTML = students[i].serialNo;
      cell4.innerHTML = students[i].class;
      cell5.innerHTML =students[i].section;
    }
   
    document.getElementById("createstudents").style.display="none";
     function displayForm(){
       document.getElementById("createstudents").style.display="block";

    }
    document.getElementById("btn").addEventListener("click", displayForm);
    function myCreateFunction() {
        var table = document.getElementById("rows");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell2 = row.insertCell(3);
        var cell2 = row.insertCell(4);
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
      }
const btn=document.getElementById("log_In")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
let inputA=document.getElementById("Admin_email").value
let inputB=document.getElementById("Password").value})
