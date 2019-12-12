(() => {
    const { body } = document;
    const html = document.documentElement;
    
    const pageHeight = Math.max(
      body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight
    );
  
    const progressLevel = document.querySelector('.progress__level');
  
    window.addEventListener('scroll', () => {
      const scrolledHeight = window.pageYOffset + window.innerHeight;
  
      progressLevel.style.width = ((scrolledHeight / pageHeight) * 100) + '%';
    });
  })();
  