function copyToClipboard(email) {
    const tempInput = document.createElement('input');

    tempInput.value = email;

    document.body.appendChild(tempInput);
    
    tempInput.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);

    alert('Email copied to clipboard: ' + email);
}

const pageOrder = ['home', 'about', 'projects', 'contact'];

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[data-page]');
  const navLinks = document.querySelectorAll('nav a');

  function showSection(targetPage, direction) {
    sections.forEach(section => {
      if (section.getAttribute('data-page') === targetPage) {
        section.style.display = '';
        section.classList.add('active');
        // Add slide-in class based on direction
        if (direction === 'right') {
          section.classList.add('slide-in-right');
          setTimeout(() => section.classList.remove('slide-in-right'), 500);
        } else if (direction === 'left') {
          section.classList.add('slide-in-left');
          setTimeout(() => section.classList.remove('slide-in-left'), 500);
        }
      } else {
        section.style.display = 'none';
        section.classList.remove('active', 'slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
      }
    });
  }

  // Show home section by default
  showSection('home', 'right');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetPage = link.getAttribute('data-target');
      const currentSection = document.querySelector('section.active');
      const currentPage = currentSection.getAttribute('data-page');
      const currentPageIndex = pageOrder.indexOf(currentPage);
      const targetPageIndex = pageOrder.indexOf(targetPage);

      if (currentPageIndex !== targetPageIndex) {
        const isNext = targetPageIndex > currentPageIndex;
        currentSection.classList.add(isNext ? 'slide-out-left' : 'slide-out-right');
        currentSection.classList.remove('active');
        setTimeout(() => {
          showSection(targetPage, isNext ? 'right' : 'left');
        }, 500);
      }
    });
  });
});
