
console.log("Script loaded!");


document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const content = document.getElementById('content');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  menu.addEventListener('click', function () {
    menu.classList.remove('active');
  });


  // Function to load page content
  function loadPage(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        content.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading the page:', error);
      });
  }

  // Initial page load
  loadPage('bored.html');

  // Event listeners for navigation links
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      loadPage(href);
    });
  });
});

document.getElementById("showAppsBtn").addEventListener("click", function () {
  var appDescription = document.getElementById("appDescription");
  if (appDescription.style.display === "none") {
    appDescription.style.display = "block";
  } else {
    appDescription.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var showAppsBtn = document.getElementById("showAppsBtn");
  var showMembersBtn = document.getElementById("showMembersBtn");
  var appDescription = document.getElementById("appDescription");
  var membersList = document.getElementById("membersList");

  showAppsBtn.addEventListener("click", function () {
    appDescription.style.display = "block";
    membersList.style.display = "none";
  });

  showMembersBtn.addEventListener("click", function () {
    appDescription.style.display = "none";
    membersList.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Event delegation for dynamically loaded content
  document.addEventListener("click", function(event) {
      if (event.target.matches("#showAppsBtn")) {
          document.getElementById("appDescription").style.display = "block";
          document.getElementById("membersList").style.display = "none";
      } else if (event.target.matches("#showMembersBtn")) {
          document.getElementById("membersList").style.display = "block";
          document.getElementById("appDescription").style.display = "none";
      }
  });
});
