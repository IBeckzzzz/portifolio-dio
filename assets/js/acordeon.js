const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const content = acordeon.querySelector('.content');
        const isOpen = acordeon.classList.contains('open');

        if (isOpen) {
            // Fechar o acordeão
            content.style.maxHeight = content.scrollHeight + 'px'; // Define a altura atual
            setTimeout(() => content.style.maxHeight = '0', 10); // Define a altura 0 após um pequeno atraso
            acordeon.classList.remove('open');
        } else {
            // Abrir o acordeão
            content.style.maxHeight = content.scrollHeight + 'px';
            acordeon.classList.add('open');
            content.addEventListener('transitionend', function handler() {
                content.style.maxHeight = 'none'; // Define maxHeight para 'none' após a transição
                content.removeEventListener('transitionend', handler);
            });
        }
    });
});
