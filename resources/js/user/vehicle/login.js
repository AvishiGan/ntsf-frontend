var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

function submitLogin() {
  const userType = 2; // Vehicle
  const vehicleNo = document.getElementById("vehicleNo").value;
  const password = document.getElementById("password").value;

  const query = $.param({
    user_type: userType,
    login_id: vehicleNo,
    password,
  });

  const settings = {
    url: `http://localhost:8080/ntsf/login?${query}`,
    method: "GET",
  };

  $.ajax(settings).done(loginSuccessCallback).fail(loginUnsuccessCallback);
}

function loginSuccessCallback(data) {
  if (data.loggedIn) {
    alert("Login successful");
    sessionStorage.setItem("user_type", "2");
    sessionStorage.setItem("user_id", data.userId);

    window.location.href = "#";
  } else {
    alert("Incorrect login id or password!");
  }
}

function loginUnsuccessCallback() {
  alert("Login Unsuccessful!");
}
