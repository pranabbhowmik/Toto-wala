// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('nav-menu');
// const navLinks = document.querySelectorAll('.nav__link');
// const body = document.getElementById('body');
// const mainContent = document.getElementById('main-content');

// // Close the menu and show main content when a navigation link is clicked
// navLinks.forEach(link => {
//   link.addEventListener("click", () => {
//     navMenu.classList.add('hidden');
//     body.classList.remove('no-scroll'); // Re-enable scrolling
//     mainContent.classList.remove('hidden'); // Show main content
//   });
// });

// // Toggle the menu and background color when the hamburger is clicked
// hamburger.addEventListener("click", () => {
//   const isMenuVisible = navMenu.classList.toggle('hidden');
  
//   if (isMenuVisible) {
//     // Menu is visible, hide main content and change background color
//     mainContent.classList.add('hidden');
//     body.classList.add('no-scroll'); // Prevent scrolling
//     body.style.backgroundColor = 'yellow'; // Change to yellow
//   } else {
//     // Menu is hidden, show main content and reset background color
//     mainContent.classList.remove('hidden');
//     body.classList.remove('no-scroll'); // Re-enable scrolling
//     body.style.backgroundColor = ''; // Reset to default color
//   }
// });
