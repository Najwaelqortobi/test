document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.sections section');

    // Ocultar todas las secciones al inicio
    sections.forEach(section => {
        section.style.display = 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si el enlace es para casos prácticos, permitir la navegación normal
            if (href === 'casosPracticos.html') {
                return; // Esto permite que el enlace funcione normalmente
            }

            // Para los otros enlaces, prevenir el comportamiento por defecto
            e.preventDefault();
            const targetId = href.substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});