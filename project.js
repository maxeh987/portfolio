function toggleMenu() {
    var menuContent = document.querySelector('#dropdown');
    menuContent.classList.toggle('hidden');
}

// Hide menu content when clicking outside the menu
document.addEventListener('click', function(event) {
    var menuButton = document.getElementById('menuButton');
    var menuContent = document.getElementById('menuContent');
    if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.classList.add('hidden');
    }
});