$(document).ready(function () {
  $(".review-carousel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const menu = document.querySelector(".menu");
const cross = document.querySelector(".cross");
const bm_btn = document.getElementById("bm_btn");
const bm = document.querySelector(".burger_menu");

bm_btn.onclick = function () {
  bm.style.display = "none";
};

cross.onclick = function () {
  popup.style.display = "none";
};

menu.onclick = function () {
  bm.style.display = "flex";
};

document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");

  var popup2 = document.getElementById("popup2");

  var btn = document.querySelector(".signup");

  var burgerSingupBtn = document.querySelector(".bm_signup");

  var burgerLoginBtn = document.querySelector(".bm_login");

  var btnLogin = document.querySelector(".login");

  burgerSingupBtn.onclick = function () {
    popup.style.display = "block";
  };

  burgerLoginBtn.onclick = function () {
    popup2.style.display = "block";
  };

  btnLogin.onclick = function () {
    popup2.style.display = "block";
  };

  let span = document.querySelectorAll(".close");

  btn.onclick = function () {
    popup.style.display = "block";
  };

  span[0].onclick = function () {
    popup.style.display = "none";
  };

  span[1].onclick = function () {
    popup2.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };

  document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
      var isValid = true;
      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var birthday = document.getElementById("birthday");
      var errorLabel = document.querySelector(".error_label");
      console.log(errorLabel);

      if (name.value.trim() === "") {
        isValid = false;
        errorLabel.textContent = "Name is required";
        alert("Name is required");
      }
      if (email.value.trim() === "") {
        isValid = false;
        errorLabel.textContent = "Email is required";
        alert("Email is required");
      } else if (!validateEmail(email.value.trim())) {
        isValid = false;
        errorLabel.textContent = "Please enter a valid email address";
        alert("Please enter a valid email address");
      }
      if (birthday.value.trim() === "") {
        isValid = false;
        errorLabel.textContent = "Birthday date is required";
        alert("Birthday date is required");
      }

      if (!isValid) {
        event.preventDefault();
      }
    });

  document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      document.getElementById("signupForm").style.display = "none";
      document.getElementById("successMessage").style.display = "block";
    });

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

let buttonOne = document.getElementById("1");
let buttonTwo = document.getElementById("2");
let buttonThree = document.getElementById("3");
let buttonFour = document.getElementById("4");
let buttonFive = document.getElementById("5");
let buttonSix = document.getElementById("6");
let buttonSeven = document.getElementById("7");
let buttonEight = document.getElementById("8");
let popup = document.querySelector(".game_popup");
let iframe = document.querySelector(".game_iframe");

buttonOne.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=a0a04f94-d8aa-4d8b-a77d-c3969691e54e";
});

buttonTwo.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=8a7e655b-1a8d-4ebc-9e99-c88ce89d3afd";
});

buttonThree.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=104abc21-cda8-42a7-be0a-f3714cc6edf9";
});

buttonFour.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=5c1b53ae-ea32-4003-a093-f845999b44d3";
});

buttonFive.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=785da286-6786-486e-9d31-e2d7d7019510";
});

buttonSix.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=1434db9e-8b0e-44f9-b89b-d65bf1975418";
});

buttonSeven.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=1aae00f1-9760-49df-bf48-359b58a97e64";
});

buttonEight.addEventListener("click", function () {
  popup.style.display = "block";
  iframe.src =
    "https://casinoguru-en.com/embedGame?identifier=62d9131e-68d1-4bc8-b436-17ffdb4b16fd";
});
