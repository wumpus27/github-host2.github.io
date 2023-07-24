document.write("<div class='cookie-banner'><span class='material-symbols-outlined'>info</span>This website uses cookies to bring a better experience to you. By using this website you accept the use of cookies for a better experience on this and on our partner websites. Read more in our <a href='privacy.html'>Privacy Policy</a>.<button onclick='set_cs();'>Accept</button></div><br><br>");
const img = "/icons/done.png";
const text = `HEY! Your task lol is now overdue.`;
const notification = new Notification("To do list", { body: text, icon: img });


function access_dashboard() {
  var access_state = localStorage.getItem("access");
  if (access_state == "true") {
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      element.classList.remove("skeleton");
      element.classList.remove("hidden");
      element.disabled = false;
    });
    document.getElementById("access").style.display = "none";
    localStorage.setItem("access", "true");
  } else {
    const developer_password = prompt("Access the dashboard as developer with the password");
    if (developer_password == "webseite945") {
      const elements = document.querySelectorAll("*");
      elements.forEach((element) => {
        element.classList.remove("skeleton");
        element.classList.remove("hidden");
        element.disabled = false;
      });
      document.getElementById("access").style.display = "none";
      localStorage.setItem("access", "true");
    } else {
      alert("403: Forbidden");
      localStorage.setItem("access", "false");
    }
  }
}

function object_state() {
  var sort = document.getElementById("sort");
  var selectedValue = sort.options[sort.selectedIndex].value;
  if (selectedValue == "custom-period") {
    document.getElementById("cpi-start").hidden = false;
    document.getElementById("cpi-end").hidden = false;
    document.getElementById("cpi-apply").hidden = false;
  } else {
    document.getElementById("cpi-start").hidden = true;
    document.getElementById("cpi-end").hidden = true;
    document.getElementById("cpi-apply").hidden = true;
  }
}

function set_es() {
  if (document.getElementById("set-es").checked) {
    localStorage.setItem("this_set-es", "true");
    console.log("set_es");
  }
}

function set_cs() {
  if (localStorage.getItem("this_set-es") == "true") {
    document.querySelector(':root').style.setProperty('--dashboardw', '350px');
    document.querySelector(':root').style.setProperty('--dashboardh', '350px');
  }
}