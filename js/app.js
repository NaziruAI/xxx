document.addEventListener('DOMContentLoaded', function () {
    // Get references to the home and about sections
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const contactSection = document.getElementById('contact');
    const subscription = document.getElementById('subscription')

    // Initially, display the home section and hide the about section
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';

    // Function to show the home section and hide the about and contact section
    function showHomeSection() {
      homeSection.style.display = 'block';
      aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    subscription.style.display = 'block';

    }

    // Function to show the about section and hide the home and contact section
    function showAboutSection() {
      homeSection.style.display = 'none';
      aboutSection.style.display = 'block';
    contactSection.style.display = 'none';
    subscription.style.display = 'block';

    }

    // Function to show the contact section and hide the home and about section
    function showContactSection() {
      homeSection.style.display = 'none';
      aboutSection.style.display = 'none';
      contactSection.style.display = 'block';
      subscription.style.display = 'none';
    }

    // Attach click event listeners to the navigation links
    document.querySelector('.nav-links a[href="#home"]').addEventListener('click', showHomeSection);
    document.querySelector('.nav-links a[href="#about"]').addEventListener('click', showAboutSection);
    document.querySelector('.nav-links a[href="#contact"]').addEventListener('click', showContactSection);

    document.querySelector('.nav-toggler').addEventListener('click', function () {
      document.querySelector('.nav-links').classList.toggle('show');
    });
  });