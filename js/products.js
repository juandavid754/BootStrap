
const products = {
    productos: [
        {
            id: 'water-large',
            name: 'AGUA 1,50L',
            price: 1.00,
            image: '../images/aguagrande.png',
            category: 'drinks'
        },
        {
            id: 'water-small',
            name: 'AGUA 0,50L', 
            price: 0.50,
            image: '../images/aguapequeña.png',
            category: 'drinks'
        },
        {
            id: 'tropical-juice',
            name: 'ZUMOS',
            price: 0.50,
            image: '../images/zumotropical.png',
            category: 'drinks'
        },
        {
            id: 'orange-juice',
            name: 'ZUMO DE NARANJA',
            price: 2.00,
            image: '../images/zumonaranja.png',
            category: 'drinks'
        },
        {
            id: 'coca-cola',
            name: 'COCA-COLA ZERO',
            price: 1.00,
            image: '../images/cocacola.png',
            category: 'drinks',
            favourite: true
        },
        {
            id: 'nestea-bottle',
            name: 'NESTLEA BOTELLA',
            price: 1.50,
            image: '../images/nestleabotella.png',
            category: 'drinks'
        },
        {
            id: 'nestea-can',
            name: 'NESTLEA LATA',
            price: 1.00,
            image: '../images/nestlealata.png',
            category: 'drinks'
        },
        {
            id: 'aquarius-bottle',
            name: 'AQUARIUS BOTELLA',
            price: 1.50,
            image: '../images/aquariusbotella.png',
            category: 'drinks'
        },
        {
            id: 'aquarius-can',
            name: 'AQUARIUS LATA',
            price: 1.00,
            image: '../images/aquariuslata.png',
            category: 'drinks'
        },
        {
            id: 'sparkling-water',
            name: 'AGUA CON GAS',
            price: 0.60,
            image: '../images/aguacongas.png',
            category: 'drinks'
        },
        {
            id: 'cafe-con-leche',
            name: 'Café con leche',
            price: 1.30,
            image: '../images/cafeconleche.png',
            category: 'hotDrinks',
            ingredients: ['azucar', 'edulcorante']
        },
        {
            id: 'cortado-largo',
            name: 'Cortado largo',
            price: 1.20,
            image: '../images/cafecortadolargo.png',
            category: 'hotDrinks',
            ingredients: ['azucar', 'edulcorante']
        },
        {
            id: 'cortado-corto',
            name: 'Cortado corto',
            price: 1.00,
            image: '../images/cafecortadocorto.png',
            category: 'hotDrinks',
            ingredients: ['azucar', 'edulcorante']
        },
        {
            id: 'cafe-solo',
            name: 'Café solo',
            price: 0.80,
            image: '../images/cafesolo.png',
            category: 'hotDrinks',
            ingredients: ['azucar', 'edulcorante']
        },
        {
            id: 'cola-cao',
            name: 'Cola-cao',
            price: 1.50,
            image: '../images/colacao.png',
            category: 'hotDrinks'
        },
        {
            id: 'cafe-para-llevar',
            name: 'Café para llevar',
            price: 1.30,
            image: '../images/cafeparallevar.png',
            category: 'hotDrinks',
            ingredients: ['azucar', 'edulcorante']
        },
        {
            id: 'bocadillo-pollo-lomo',
            name: 'Bocadillo Pollo/Lomo',
            price: 2.00,
            image: '../images/bocadillopollo.png',
            category: 'sandwiches',
            ingredients: ['tomate', 'lechuga', 'alioli', 'queso']
        },
        {
            id: 'bocadillo-especial',
            name: 'Bocadillo Especial',
            price: 2.30,
            image: '../images/bocadilloespecial.png',
            category: 'sandwiches',
            ingredients: ['tomate', 'lechuga', 'alioli', 'queso'],
            favourite: true
        },
        {
            id: 'bocadillo-embutidos',
            name: 'Bocadillo embutidos',
            price: 1.20,
            image: '../images/bocadillojamonqueso.png',
            category: 'sandwiches'
        },
        {
            id: 'bocadillo-tortilla',
            name: 'Bocadillo Tortilla',
            price: 1.80,
            image: '../images/bocadillotortilla.png',
            category: 'sandwiches',
            ingredients: ['alioli']
        },
        {
            id: 'pulgas',
            name: 'Pulgas',
            price: 2.00,
            image: '../images/pulga.png',
            category: 'snacks'
        },
        {
            id: 'jamon-serrano',
            name: 'Jamón serrano',
            price: 1.30,
            image: '../images/pulgajamonserrano.png',
            category: 'snacks'
        },
        {
            id: 'queso-fresco',
            name: 'Queso Fresco',
            price: 1.30,
            image: '../images/pulgaquesofresco.png',
            category: 'snacks'
        },
        {
            id: 'jamon-s-queso-f',
            name: 'Jamón S + Queso F',
            price: 2.00,
            image: '../images/pulgajamonserranoquesofresco.png',
            category: 'snacks'
        },
        {
            id: 'calabacin-queso-f',
            name: 'Calabacín + Queso F',
            price: 1.80,
            image: '../images/pulgacalabacinquesofresco.png',
            category: 'snacks'
        },
        {
            id: 'pollo-vegetal',
            name: 'Pollo Vegetal',
            price: 1.50,
            image: '../images/pulgapollovegetal.png',
            category: 'sandwiches'
        },
        {
            id: 'sandwich-pollo',
            name: 'Sandwich Pollo',
            price: 1.80,
            image: '../images/sandwichpollo.png',
            category: 'sandwiches'
        },
        {
            id: 'sandwich-pollo-vegetal',
            name: 'Sandwich Pollo Vegetal',
            price: 2.30,
            image: '../images/sandwichpollovegetal.png',
            category: 'sandwiches'
        },
        {
            id: 'croissant-pollo',
            name: 'Croissant Pollo',
            price: 2.20,
            image: '../images/croissantpollo.png',
            category: 'croissants',
            favourite: true
        },
        {
            id: 'croissant-pollo-vegetal',
            name: 'Croissant Pollo Vegetal',
            price: 2.50,
            image: '../images/croissantpollovegetal.png',
            category: 'croissants'
        },
        {
            id: 'croissant-mixto',
            name: 'Croissant Mixto',
            price: 2.00,
            image: '../images/croissantmixto.png',
            category: 'croissants'
        },
        {
            id: 'pieza-fruta',
            name: 'Pieza de fruta',
            price: 0.50,
            image: '../images/piezadefruta.png',
            category: 'others'
        },
        {
            id: 'yogurt',
            name: 'Yogurt',
            price: 0.50,
            image: '../images/yogurt.png',
            category: 'others'
        },
        {
            id: 'barrita-cereales',
            name: 'Barrita Cereales',
            price: 0.50,
            image: '../images/barritacereales.png',
            category: 'others'
        },
        {
            id: 'galletas',
            name: 'Galletas',
            price: 0.50,
            image: '../images/oreo.png',
            category: 'others'
        },
        {
            id: 'chocolatinas',
            name: 'Chocolatinas',
            price: 1.20,
            image: '../images/kinderbueno.png',
            category: 'others'
        },
        {
            id: 'millos',
            name: 'Millos',
            price: 1.20,
            image: '../images/millosgrefusa.png',
            category: 'others'
        },
        {
            id: 'millos-tijuana',
            name: 'Millos Tijuana',
            price: 0.50,
            image: '../images/millosgrefusatijuana.png',
            category: 'others'
        },
        {
            id: 'mufy',
            name: 'Mufy',
            price: 0.30,
            image: '../images/mufyscacao.png',
            category: 'others'
        },
        {
            id: 'bizcocchon-casero',
            name: 'Bizcochón Casero',
            price: 1.00,
            image: '../images/bizcochoncasero.png',
            category: 'others'
        },
        {
            id: 'tartas-caseras',
            name: 'Tartas Caseras',
            price: 2.00,
            image: '../images/tartacasera.png',
            category: 'others'
        }
    ]
};
 
const ingredientesAdicionales = {
  "queso": {
    "nombre": "Queso",
    "precio": 0.20,
    "imagen": "../assets/queso.png"
  },
  "alioli": {
    "nombre": "Alioli",
    "precio": 0.10,
    "imagen": "../assets/alioli.png"
  },
  "tomate": {
    "nombre": "Tomate",
    "precio": 0.15,
    "imagen": "../assets/tomate.png"
  },
  "lechuga": {
    "nombre": "Lechuga",
    "precio": 0.10,
    "imagen": "../assets/lechuga.png"
  },
  "azúcar": {
    "nombre": "Azúcar",
    "precio": 0.05,
    "imagen": "../assets/azucar.png"
  },
  "edulcorante": {
    "nombre": "Edulcorante",
    "precio": 0.05,
    "imagen": "../assets/edulcorante.png"
  },
  "cebolla": {
    "nombre": "Cebolla",
    "precio": 0.10,
    "imagen": "../assets/cebolla.png"
  }
};

function loadProductsByCategory(category) {
    if (category === 'favourites') {
        return products.productos.filter(product => product.favourite === true);
    }
    return products.productos.filter(product => product.category === category);
}

function loadAllProducts() {
    return products.productos;
}

// Function to load favourite products
function loadFavouriteProducts() {
    return products.productos.filter(product => product.favourite === true);
}

function createProductCard(product) {
    return `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price.toFixed(2)}€</p>
                <a href="quantity.html?product=${product.id}" class="btn btn-dark">COMPRAR</a>
            </div>
        </div>
    `;
}

function renderProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const productList = loadProductsByCategory(category);
    container.innerHTML = productList.map(product => createProductCard(product)).join('');
}

function calculateTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}