const img = "/icons/done.png";
const text = `New`;
const notification = new Notification("To do list", { body: text, icon: img });

  window.onload = function () {
    google.accounts.id.initialize({
      client_id: '840302888164-dtk86bh4vfvcp1pbr76ussqglmbornlu.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
          google.accounts.id.prompt()
  };
google.accounts.id.renderButton(document.getElementById("g-id"), {
      theme: 'outline',
      size: 'large',
      click_listener: onClickHandler
    });
  });
    

  
  function onClickHandler(){
    google.accounts.id.revoke('goa204583@outlook.de', done => {
    alert('consent revoked');
    console.log("Sign in with Google button clicked...");
  }
  

function handleCredentialResponse(response) {
        document.getElementById("g-id").style.display = "none";
        document.getElementById("g-id").disabled = true;
        localStorage.setItem("access", "true");
        access_dashboard();
    }

function access_dashboard() {
  var access_state = localStorage.getItem("access");
  if (access_state == "true") {
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
      element.classList.remove("skeleton");
      element.classList.remove("hidden");
      element.disabled = false;
    });
    document.getElementById("g-id").style.display = "none";
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
