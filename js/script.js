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

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    var images = document.getElementById('header').getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        if (!images[i].classList.contains('visible') && isElementInViewport(images[i])) {
            images[i].classList.add('visible');
        }
    }
}

window.addEventListener('scroll', handleScroll);
handleScroll();

document.addEventListener("DOMContentLoaded", function() {
  var changeNameButton = document.getElementById("change-name");
  
  if (changeNameButton) {
    changeNameButton.addEventListener("click", function() {
      document.getElementById("popup").style.display = "flex";
      document.body.classList.add("no-scroll");
    });
  }
});
