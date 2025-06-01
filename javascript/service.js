  const services = document.querySelectorAll('.service');

  services.forEach(service => {
    const toggleBar = service.querySelector('.toggle-bar');
    const content = service.querySelector('.content');
    const serviceName = service.querySelector('.service-name');
    let hideTimeout;

    toggleBar.addEventListener('click', () => {
      // Zamknij inne otwarte panele i pokaż ich nazwy
      document.querySelectorAll('.content.show').forEach(openContent => {
        if (openContent !== content) {
          openContent.classList.remove('show');
          const parentService = openContent.closest('.service');
          const otherName = parentService.querySelector('.service-name');
          if (otherName) otherName.style.display = 'block';
        }
      });

      // Pokaż bieżący panel
      content.classList.add('show');

      // Ukryj nazwę
      if (serviceName) serviceName.style.display = 'none';

      // Wyczyść poprzedni timeout
      if (hideTimeout) clearTimeout(hideTimeout);

      // Schowaj po 15 sekundach
      hideTimeout = setTimeout(() => {
        content.classList.remove('show');
        if (serviceName) serviceName.style.display = 'block';
      }, 15000);
    });
  });
