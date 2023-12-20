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
    
function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const email = document.forms["message-form"]["email"].value;
  const phone = document.forms["message-form"]["phone"].value;
  const birthdate = document.forms["message-form"]["birth-date"].value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const messages = document.forms["message-form"]["messages"].value;

  setSenderUI(name, email, phone, birthdate, gender, messages);
  alert("Thank You");
  return false;
}

function setSenderUI(name, email, phone, birthdate, gender, messages) {
  document.getElementById("send-name").innerHTML = name;
  document.getElementById("send-email").innerHTML = email;
  document.getElementById("send-phone").innerHTML = phone;
  document.getElementById("send-birthdate").innerHTML = birthdate;
  document.getElementById("send-gender").innerHTML = gender;
  document.getElementById("send-messages").innerHTML = messages;
}
