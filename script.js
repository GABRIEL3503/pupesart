AOS.init();

emailjs.init('4FEihb4P4FAaoxNKq');
    const btn = document.getElementById('button');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (!validateForm()) return; // Impide la ejecución si la validación falla

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_20y492c';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Enviado!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('from_name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex para validación de email
        const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{4,6}$/; // Regex básico para teléfono

        if (!name || !phone || !email || !message) {
            alert('Por favor, completa todos los campos.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            alert('Por favor, ingresa un número de teléfono válido.');
            isValid = false;
        }

        return isValid;
    }

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

const overlay = document.querySelector('.overlay');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
    // Alternar la opacidad del overlay
    overlay.classList.toggle('active');
    // Prevenir clics en el contenido principal
    document.body.classList.toggle('no-scroll');
});

// Cerrar el menú al hacer clic en un enlace
navbarLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbarToggle.classList.remove('active');
        navbarLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// mostrar mas servicios
function toggleServices() {
  // Seleccionamos el contenedor de las características adicionales de servicios
  var container = document.getElementById('serviciosAdicionales');
  var button = document.querySelector('.btn-toggle-servicios');

  // Verificamos si el contenedor está visible
  if (container.style.display === "none" || container.style.display === "") {
    container.style.display = "flex"; // Mostramos el contenedor
    container.style.maxHeight = container.scrollHeight + "px"; // Establecemos una altura máxima para la transición
    button.textContent = "Ver menos "; // Cambiamos el texto del botón
  } else {
    container.style.maxHeight = null; // Eliminamos la altura máxima para la transición de colapso
    container.style.display = "none"; // Ocultamos el contenedor
    button.textContent = "Ver todos los trámites"; // Cambiamos el texto del botón
  }
}

// Inicialización al cargar la página para Nuestros Servicios
window.onload = function() {
  // Asegúrate de que las características adicionales de servicios estén ocultas al cargar
  document.getElementById('serviciosAdicionales').style.display = "none"; 
};


document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los elementos con la clase 'caracteristica-servicio' dentro del contenedor con id 'servicios'
    var servicios = document.querySelectorAll('#servicios .caracteristica-servicio');

    // Asignar un event listener a cada uno de ellos
    servicios.forEach(function(servicio) {
        servicio.addEventListener('click', function() {
            // Navegar al elemento con el id 'formulario-contacto'
            location.href = '#formulario-contacto';
        });
    });
});


let lightbox = GLightbox({
    selector: 'a[data-glightbox]',
});

const filterButtons = document.querySelectorAll('.filter-container button');
const items = document.querySelectorAll('.gallery .item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Añadir la clase 'active' al botón seleccionado
        button.classList.add('active');

        // Obtener la categoría seleccionada
        const filter = button.getAttribute('data-filter');

        // Mostrar/ocultar elementos con efecto suave
        items.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');
            if (filter === 'all' || categories.includes(filter)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });

        // Actualizar Glightbox con las imágenes filtradas
        updateLightbox();
    });
});

// Mostrar todos los elementos al cargar la página
window.onload = function() {
    items.forEach(item => item.classList.add('show'));
    updateLightbox(); // Inicializar el lightbox cuando todos los elementos se muestran
}

// Función para reinicializar GLightbox solo con las imágenes visibles
function updateLightbox() {
    // Destruir el lightbox existente
    lightbox.destroy();

    // Crear una nueva instancia solo con los elementos visibles
    lightbox = GLightbox({
        selector: '.item.show a[data-glightbox]', // Selecciona solo los que están visibles
    });
}
