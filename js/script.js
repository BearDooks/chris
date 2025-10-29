document.addEventListener('DOMContentLoaded', function() {
    var navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
        new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
    }
});