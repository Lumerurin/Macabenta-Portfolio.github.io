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
  const currentPage = document.querySelector('section[data-page]');
  const navLinks = document.querySelectorAll('nav a');

  currentPage.classList.add('active');

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetPage = link.getAttribute('data-target');
      const currentPageIndex = pageOrder.indexOf(currentPage.getAttribute('data-page'));
      const targetPageIndex = pageOrder.indexOf(targetPage);

      if (currentPageIndex !== targetPageIndex) {
        const isNext = targetPageIndex > currentPageIndex;

        currentPage.classList.add(isNext ? 'slide-out-left' : 'slide-out-right');
        currentPage.classList.remove('active');

        setTimeout(() => {
          window.location.href = link.getAttribute('href');
        }, 500);
      }
    });
  });
});
