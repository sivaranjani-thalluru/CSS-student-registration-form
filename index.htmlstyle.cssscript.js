<!DOCTYPE html>
<html>
<head>
  <title>Student Registration</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h2>Student Registration Form</h2>

    <form id="studentForm">
      <input type="text" id="name" placeholder="Enter Name">
      <input type="email" id="email" placeholder="Enter Email">
      <input type="number" id="age" placeholder="Enter Age">

      <button type="submit">Register</button>
      <p id="error"></p>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html> 



2. body {
  font-family: Arial;
  background: #f2f2f2;
}

.container {
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
}

input {
  width: 100%;
  margin: 8px 0;
  padding: 8px;
}

button {
  width: 100%;
  padding: 8px;
  background: blue;
  color: white;
  border: none;
}

#error {
  color: red;
  margin-top: 10px;
}

3.java script

document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let error = document.getElementById("error");
  if (name === "" || email === "" || age === "") {
    error.innerText = "All fields are required";
  } else if (age < 18) {
    error.innerText = "Age must be above 18";
  } else {
    error.style.color = "green";
    error.innerText = "Registration Successful!";
  }
});