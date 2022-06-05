//for register button
 const openSignUpForm = () => {
    document.querySelector('#signup').style.display = "block";
    document.querySelector('.btn-center').style.display = "none";
    document.querySelector('.signup-div').style.display = "block";
  }

  const cancelForm = () => {
    document.querySelector('.btn-center').style.display = "flex";
    document.querySelector('.signup-div').style.display = "none";
  }

  const openLogInForm = () => {
    document.querySelector('#login').style.display = "block";
    document.querySelector('.btn-center').style.display = "none";
    document.querySelector('.form-div').style.display = "block";
  }

  const cancel = () => {
    document.querySelector('.btn-center').style.display = "flex";
    document.querySelector('.form-div').style.display = "none";

  }

  // validation of signup form
  const validation = ()=>{
    let fname = document.querySelector('.fName').value;
    let lName = document.querySelector('.lName').value;
    let email = document.querySelector('.email').value;
    let pnumber = document.querySelector('.phoneNo').value;
    let password = document.querySelector('.password').value;
    let confirmPassword = document.querySelector('.confirmPassword').value;
    console.log(fname);
    if(fname===""){// first name validation
      checkerr("err-fname","**Please fill the fName field");
      return false;
    }
    if((fname.length <= 2) || (fname.length> 20)){
      checkerr("err-fname", " **fName between 2-20 characters");
      return false;
    }
    if(!validName(fname)){
      checkerr("err-fname"," **only characters are allowed");
      return false;
    }

    if(lName== ""){ //last name validation
      checkerr("err-lname","**Please fill the lName field");
      //document.getElementById("err-lname").innerHTML= " **Please fill the lName field";
      return false;
    }
    if((lName.length <= 2) || (fname.length> 20)){
      checkerr("err-lname", " **fName between 2-20 characters");
     // document.getElementById("err-lname").innerHTML= " **Please fill the fName field";
      return false;
    }
    if(!validName(lName)){
      checkerr("err-lname"," **only characters are allowed");
     // document.getElementById("err-lname").innerHTML= " **only characters are allowed";
      return false;
    }
    

    if(email== ""){ //email validation
      checkerr("err-email", "**Please fill the email field");
     // document.getElementById("err-email").innerHTML= " **Please fill the email field";
      return false;
    }
    if(email.indexOf('@')<=0){
      checkerr("err-email", "**@ Invalid Position");
      return false;

    }
    if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
      checkerr("err-email", "**. Invalid Position");
      return false;
    }

    if(pnumber== ""){ //phone number  validation
      checkerr("err-phoneNo", "**Please fill the phoneNo field");
      //document.getElementById("").innerHTML= " **Please fill the phoneNo field";
      return false;
    }
    if(isNaN(pnumber)){
      checkerr("err-phoneNo", "**Only number is allowed");
      return false;
    }
    if(pnumber.length!=10){
      checkerr("err-phoneNo", "**number must be of 10 digits");
      return false;

    }

    if(password== ""){ //password validation
      checkerr("err-password", "**Please fill password field");
      //document.getElementById("err-password").innerHTML= " **Please fill the password field";
      return false;
    }
    if(password!=confirmPassword){
      checkerr("err-confirmPassword", "**Password Mismatch");
      return false;
    }

    if(confirmPassword== ""){ // confirm password validation
      checkerr("err-confirmPassword", "**Please fill password field");
      //document.getElementById("err-confirmPassword").innerHTML= " **Please fill the confirmPassword field";
      return false;
    }
    
    validate();
  }

  function checkerr(classid , message){ // checker function for checking input field
    document.getElementById(classid).innerHTML= message;
    setTimeout(()=>{ //timeout function for how long error message will show
      document.getElementById(classid).innerHTML= "";
    },7000)
    return ;
  }
  function validName(name){ // checking first name & last name for input text is number or special charcter then return the messge
    for(let i =0;i<name.length; i++){
      let val = name.charCodeAt(i)
      console.log(val);
      if((val<97 || val>122) && (val <65 || val>90)){
        return false;
      }
    }
    return true;
  }

  const data =[];

  function validate(e) { //signup
    let fname = document.querySelector('.fName').value;
    let lName = document.querySelector('.lName').value;
    let email = document.querySelector('.email').value;
    let pnumber = document.querySelector('.phoneNo').value;
    let password = document.querySelector('.password').value;
    let confirmPassword = document.querySelector('.confirmPassword').value;
    if (isValidate(fname,lName,email,password,pnumber)) {
      data.push({
        id: data.length + 1, name: fname, lname: lName, email: email, pnumber: pnumber, password: password, confirmPassword: confirmPassword
      })
      console.log(data);
      window.alert("Registered successfully 😉😉")
      cancelForm();
      openLogInForm();
      insertNewRecord({fname,lName,email,pnumber,password})
    }
  
  }

  const isValidate = (fname,lname,email,password,pnumber)=>{ //for checking 
    if(fname !== "" && lname !== "" && email !== "" && pnumber !== "" && password !== "" && email.includes("@")&&email.includes(".com")){
       for(let i =0; i<data.length; i++){
         if(data[i].email===email){
           alert("User already exit.")
           return false;
         }
       }
       /*if(pnumber.length!==10){
         alert("Enter valid Mobile Number")
         return false;
       }*/
       return true;
    }
    return false;
   }

   //let table1 = document.getElementById('table');
   const login = () => {
    var email = document.querySelector('.login-email').value;
    var password = document.querySelector('.login-password').value;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === email && data[i].password === password) {
        window.alert("Authenticate success")
        cancel();
        insertNewRecord();
       // displayDetails();
        table.style.display="block";
        return;
      }
      
    }
    window.alert("Please check your email or password")
  }

  //table operations

  let selectedRow = null;
  function onClickSubmit(e){
     // event.preventDefault();
      var formData = readFormData();
      if(selectedRow === null){
          insertNewRecord(formData);
      }else{
          updateRecord(formData)
      }
      resetForm();
      }
  // Read operation using this function
  function readFormData(){
      var formData = {};
      formData["fName"] = document.querrySelector("#fName").value;
      formData["lName"] = document.querySelector("#lName").value;
      formData["email"] = document.querySelector("#email").value;
      formData["phoneNo"] = document.querySelector("#phoneNo").value;
      formData["password"] = document.querySelector("#password").value;
      return formData;
  }
  
  // Create operation
  function insertNewRecord(data){
    console.log(data);
      var table = document.querySelector("#userList").getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.length);
      var cell1 = newRow.insertCell(0);
          cell1.innerHTML = data.fname;
      var cell2 = newRow.insertCell(1);
          cell2.innerHTML = data.lName;
      var cell3 = newRow.insertCell(2);
          cell3.innerHTML = data.email;
      var cell4 = newRow.insertCell(3);
          cell4.innerHTML = data.pnumber
      var cell4 = newRow.insertCell(4);
          cell4.innerHTML = data.password;
      var cell5 = newRow.insertCell(5);
          cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>    
                            <a href="#" onClick='onDelete(this)'>Delete</a>`;
  }
  
  // To Reset the data of fill input
  function resetForm(){
      document.querySelector('#fName').value = '';
      document.querySelector('#lName').value = '';
      document.querySelector('#email').value = '';
      document.querySelector('#phoneNo').value = '';
      document.querySelector('#password').value = '';
      selectedRow = null;
  }
  
  // For Edit operation
  function onEdit(td){
      let selectedRow = td.parentElement.parentElement;
      document.querySelector('#fName').value = selectedRow.cells[0].innerHTML;
      document.querySelector('#lName').value = selectedRow.cells[1].innerHTML;
      document.querySelector('#email').value = selectedRow.cells[2].innerHTML;
      document.querySelector('#phoneNo').value = selectedRow.cells[3].innerHTML;
      document.querySelector('#password').value = selectedRow.cells[4].innerHTML;
      openSignUpForm();
      document.querySelector('.form-div').style.display = "none";
      
      
    
  }

  function updateRecord(formData){
      /*selectedRow.cells[0].innerHTML = formData.fName;
      selectedRow.cells[1].innerHTML = formData.lName;
      selectedRow.cells[2].innerHTML = formData.email;
      selectedRow.cells[3].innerHTML = formData.phoneNo;
      selectedRow.cells[4].innerHTML = formData.password;*/
      selectedRow.cells[0].innerHTML = document.querySelector('#fName').value;
      selectedRow.cells[1].innerHTML =  document.querySelector('#lName').value;
      selectedRow.cells[2].innerHTML = document.querySelector('#email').value;
      selectedRow.cells[3].innerHTML =  document.querySelector('#phoneNo').value;
      selectedRow.cells[4].innerHTML =  document.querySelector('#password').value;
  }
  function onDelete(td){
      if(confirm('Are you sure you want to delete this record?')){
          row = td.parentElement.parentElement;
          document.querySelector('#userList').deleteRow(row.rowIndex);
          resetForm();
      }    
  }


 






 
    
