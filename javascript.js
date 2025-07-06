function copyToClipboard(email) {
    const tempInput = document.createElement('input');

    tempInput.value = email;

    document.body.appendChild(tempInput);
    
    tempInput.select();
    
    document.execCommand('copy');
    
    document.body.removeChild(tempInput);

    alert('Email copied to clipboard: ' + email);
}

const pageOrder = ['home', 'about', 'projects', 'certifications', 'contact'];

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

      // Remove 'active' class from all nav links
      navLinks.forEach(l => l.classList.remove('active'));
      // Add 'active' class to the clicked nav link
      link.classList.add('active');

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

  // Certificate image modal logic
  const modal = document.getElementById('certificate-modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.querySelector('.modal-close');
  document.querySelectorAll('.certificate-item img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
    }
  });
});

// --- Project Pop-up Animation on Scroll ---
function animateProjectsOnScroll() {
  const projectEls = document.querySelectorAll('.projects-section .project');
  projectEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('pop-in');
    } else {
      el.classList.remove('pop-in');
    }
  });
}

// Only animate when projects section is visible
function handleProjectSectionAnimation() {
  const projectsSection = document.querySelector('.projects-section');
  if (projectsSection && projectsSection.style.display !== 'none') {
    animateProjectsOnScroll();
  }
}

window.addEventListener('scroll', handleProjectSectionAnimation);

// Also trigger animation when switching to projects section
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    setTimeout(() => {
      handleProjectSectionAnimation();
    }, 600);
  });
});
