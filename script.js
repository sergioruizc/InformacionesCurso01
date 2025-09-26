document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo. Hemos añadido la propiedad 'location' a cada evento.
    const events = [
        {
            day: 'Lunes',
            date: '28 de octubre',
            description: 'Reunión de apoderados para coordinar la kermesse de fin de año.',
            location: 'Sala de clases del 3° Básico', // Nuevo campo
            isPast: false
        },
        {
            day: 'Miércoles',
            date: '30 de octubre',
            description: 'Traer materiales para el proyecto de ciencias: pilas, cables y un motor pequeño.',
            location: 'Salón de artes y manualidades', // Nuevo campo
            isPast: false
        },
        {
            day: 'Viernes',
            date: '25 de octubre',
            description: 'Charla sobre nutrición infantil en el gimnasio del colegio.',
            location: 'Gimnasio principal del colegio', // Nuevo campo
            isPast: true
        },
        {
            day: 'Martes',
            date: '22 de octubre',
            description: 'Entrega de resultados de la prueba de lenguaje.',
            location: 'Auditorio del colegio', // Nuevo campo
            isPast: true
        }
    ];

    const futureEventsContainer = document.getElementById('future-events');
    const pastEventsContainer = document.getElementById('past-events');
    const toggleButton = document.getElementById('toggle-past-events');

    function createEventCard(event) {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <h3>${event.day}, ${event.date}</h3>
            <p>${event.description}</p>
            ${event.location ? `<p class="event-location">Lugar: ${event.location}</p>` : ''}
        `;
        // La línea de arriba usa un "operador ternario" y un "template literal":
        // Si event.location existe (no es nulo o vacío), entonces crea un párrafo con la clase 'event-location'
        // y muestra el lugar. Si no existe, no añade nada.
        return eventCard;
    }

    // Renderizar eventos
    events.forEach(event => {
        if (event.isPast) {
            pastEventsContainer.appendChild(createEventCard(event));
        } else {
            futureEventsContainer.appendChild(createEventCard(event));
        }
    });

    // Lógica para colapsar y expandir la sección de eventos pasados
    toggleButton.addEventListener('click', () => {
        const isCollapsed = pastEventsContainer.classList.toggle('collapsed');
        const arrow = toggleButton.querySelector('span');
        if (isCollapsed) {
            arrow.textContent = '▼';
        } else {
            arrow.textContent = '▲';
        }
    });
});