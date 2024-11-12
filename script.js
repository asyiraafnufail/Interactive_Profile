const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});
