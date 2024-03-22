let isOpen = false;

function toggleMenu() {
    const modal = document.getElementById('modal');
    isOpen = !isOpen;
    modal.style.display = isOpen ? 'block' : 'none';
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
}

document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);
