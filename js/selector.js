
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

let hamburgerBtn, sidebar, overlay, submenu;

document.addEventListener('DOMContentLoaded', function() {
    hamburgerBtn = document.getElementById('hamburger-btn');
    sidebar = document.getElementById('sidebar');
    overlay = document.getElementById('overlay');
    submenu = document.getElementById('submenu');

    if (!hamburgerBtn || !sidebar || !overlay || !submenu) {
        console.error('Elementos no encontrados para el menú hamburguesa');
        return;
    }

    hamburgerBtn.addEventListener('click', function() {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            submenu.classList.remove('hidden');
        } else {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            hamburgerBtn.classList.add('active');
            if (window.innerWidth <= 768) {
                submenu.classList.add('hidden');
            }
        }
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        submenu.classList.remove('hidden');
    });

    const categoryFromUrl = getURLParameter('category');
    const categoryToLoad = categoryFromUrl || 'favourites';
    loadCategory(categoryToLoad);
});

function loadCategory(category) {
    console.log('Cargando categoría:', category);
    
    if (sidebar && overlay && hamburgerBtn && submenu) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        submenu.classList.remove('hidden');
    }
    
    document.querySelectorAll('.sidebar-link, .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLinks = document.querySelectorAll(`[onclick="loadCategory('${category}')"]`);
    activeLinks.forEach(link => link.classList.add('active'));
    
    console.log('Renderizando productos para:', category);
    renderProducts(category, 'products-container');
    
    const container = document.getElementById('products-container');
    console.log('Contenedor después de renderizar:', container.innerHTML.length > 0 ? 'Tiene contenido' : 'Vacío');
    
    const categoryNames = {
        'favourites': 'Favoritos',
        'drinks': 'Bebidas',
        'sandwiches': 'Bocadillos', 
        'snacks': 'Pulgas',
        'croissants': 'Croissants',
        'hotDrinks': 'Bebidas Calientes',
        'others': 'Varios'
    };
    document.title = `Selección - ${categoryNames[category]}`;
}