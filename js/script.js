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
  const time = new Date();
  const name = document.forms["message-form"]["full-name"].value;
  const email = document.forms["message-form"]["email"].value;
  const phone = document.forms["message-form"]["phone"].value;
  const birthdate = document.forms["message-form"]["birth-date"].value;
  const gender = document.getElementById('gender').options[document.getElementById('gender').selectedIndex].value;
  const messages = document.forms["message-form"]["messages"].value;

  setSenderUI(time, name, email, phone, birthdate, gender, messages);
  alert("Thank You");
  return false;
}

function setSenderUI(time, name, email, phone, birthdate, gender, messages) {
  document.getElementById("time").innerHTML = "Current Time : "+time;
  document.getElementById("send-name").innerHTML = "Name : "+name;
  document.getElementById("send-email").innerHTML = "Email : "+email;
  document.getElementById("send-phone").innerHTML = "Phone : "+phone;
  document.getElementById("send-birthdate").innerHTML = "Birthdate : "+birthdate;
  document.getElementById("send-gender").innerHTML = "Gender : "+gender;
  document.getElementById("send-messages").innerHTML = "Message : "+messages;
}