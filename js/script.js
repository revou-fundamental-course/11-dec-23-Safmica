function changeName() {
  const usernameInput = document.getElementById("username");
  const username = usernameInput.value;
  
  if (username.trim() !== "") {
      document.getElementById("name").textContent = username;
      document.getElementById("popup").style.display = "none";
      document.body.classList.remove("no-scroll");
    } else {
      alert("Mohon masukkan nama Anda.");
      usernameInput.focus();
    }
  }
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("popup").style.display = "flex";
  document.body.classList.add("no-scroll");
});
    
document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.getElementById('gender').value;
  const messages = document.getElementById('messages').value;

  document.getElementById('send-name').textContent = name;
  document.getElementById('send-email').textContent = email;
  document.getElementById('send-phone').textContent = phone;
  document.getElementById('send-birthdate').textContent = birthdate;
  document.getElementById('send-gender').textContent = gender;
  document.getElementById('send-message').textContent = message;
  
  alert('Thank You');
});