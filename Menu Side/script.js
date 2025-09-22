const sidebar = document.getElementById('sidebar');
let isExpanded = false;

function toggleMenu() {
    isExpanded = !isExpanded;
    if (isExpanded) {
        sidebar.classList.add('expanded');
    } else {
        sidebar.classList.remove('expanded');
    }
}

function collapseMenu() {
    if (isExpanded) {
        sidebar.classList.remove('expanded');
        isExpanded = false;
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        collapseMenu();
    }
});