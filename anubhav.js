 
    // Active nav link on scroll
    const sections = ['stack','architecture','steps','checklist','public-url','cloudsql'];
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 80) current = id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    });

    function copyCode(btn) {
      const pre = btn.closest('.code-wrap').querySelector('pre');
      const text = pre.innerText;
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = 'Copied!';
        btn.style.color = '#34d399';
        btn.style.borderColor = '#34d399';
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      });
    }
 