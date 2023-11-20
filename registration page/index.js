function submitForm(event) {
  event.preventDefault();

  // Validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Perform additional validation as needed

  // Simulate server-side validation
  if (!validatePasswordStrength(password)) {
    document.getElementById("passwordStrength").innerText =
      "Password must be at least 8 characters long.";
    return;
  }

  // Simulate successful registration
  alert(
    `Registration Successful!\nName: ${name}\nEmail: ${email}\nUsername: ${username}`
  );

  // You can redirect to a confirmation page or perform other actions here
}

function validatePasswordStrength(password) {
  // Perform password strength validation logic here
  return password.length >= 8;
}
