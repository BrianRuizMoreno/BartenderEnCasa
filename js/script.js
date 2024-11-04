document.addEventListener('DOMContentLoaded', function() {
    const tragos = [
        
            { "nombre": "AKU AKU", "ingredientes": ["RON", "LICOR DE DURAZNO", "JUGO DE ANANÁ", "JUGO DE LIMÓN", "ALMIBAR"] },
            { "nombre": "AMERICANO", "ingredientes": ["VERMOUTH ROSSO", "CAMPARI", "SODA"] },
            { "nombre": "APEROL SPRITZ", "ingredientes": ["APEROL", "ESPUMANTE", "SODA"] },
            { "nombre": "APPLE MARTINI", "ingredientes": ["VODKA", "LICOR DE MANZANA", "JUGO DE MANZANA"] },
            { "nombre": "BEE'S KNEES", "ingredientes": ["GIN", "MIEL", "JUGO DE LIMÓN"]},
            { "nombre": "BETWEEN THE SHEETS", "ingredientes": ["RON", "BRANDY", "TRIPLE SEC", "JUGO DE LIMÓN"]},
            { "nombre": "BLACK RUSSIAN", "ingredientes": ["VODKA", "LICOR DE CAFÉ"]},
            { "nombre": "BLUE LAGOON", "ingredientes": ["VODKA", "BLUE CURAZAO", "JUGO DE LIMÓN", "SPRITE"]},
            { "nombre": "BOULEVARDIER", "ingredientes": ["WHISKY", "VERMOUTH ROSSO", "CAMPARI"]},
            { "nombre": "BRONX", "ingredientes": ["GIN", "VERMOUTH ROSSO", "VERMOUTH DRY", "JUGO DE NARANJA"]},
            { "nombre": "CAIPIRISIMA", "ingredientes": ["GIN", "LIMA", "ALMIBAR"]},
            { "nombre": "CAIPIROSKA", "ingredientes": ["VODKA", "LIMA", "ALMIBAR"]},
            { "nombre": "CAIPIRINHA", "ingredientes": ["CACHAZA", "LIMA", "ALMIBAR"]},
            { "nombre": "CALIFA", "ingredientes": ["RON", "MALIBÚ", "JUGO DE ANANÁ", "LECHE", "GRANADINA"] },
            { "nombre": "CAMINANTE BLANCO", "ingredientes": ["WHISKY", "SODA"] },
            { "nombre": "CAMPARI TONIC", "ingredientes": ["CAMPARI", "AGUA TÓNICA"] },
            { "nombre": "CARDINALE", "ingredientes": ["GIN", "CAMPARI", "VERMOUTH DRY"] },
            { "nombre": "CINZANO", "ingredientes": ["VERMOUTH ROSSO", "GASEOSA POMELO"]},
            { "nombre": "CLOVER CLUB", "ingredientes": ["GIN", "VERMOUTH DRY", "JUGO DE LIMÓN", "ALMIBAR DE ARÁNDANOS"] },
            { "nombre": "CONTESSA", "ingredientes": ["GIN", "VERMOUTH DRY", "CAMPARI"] },
            { "nombre": "COSMOPOLITAN", "ingredientes": ["VODKA", "TRIPLE SEC", "JUGO DE ARÁNDANOS", "ALMIBAR"] },
            { "nombre": "CUBA LIBRE", "ingredientes": ["RON", "COCA COLA", "JUGO DE LIMÓN"] },
            { "nombre": "CYNAR JULEP", "ingredientes": ["CYNAR", "JUGO DE LIMÓN", "JUGO DE POMELO", "MENTA", "ALMIBAR", "SODA"] },
            { "nombre": "DAIQUIRI", "ingredientes": ["RON", "ALMIBAR", "JUGO DE LIMÓN"] },
            { "nombre": "DANZA DEL SOL", "ingredientes": ["WHISKY", "BRANDY", "VERMOUTH ROSSO", "JUGO DE NARANJA"] },
            { "nombre": "DESTORNILLADOR", "ingredientes": ["VODKA", "JUGO DE NARANJA"] },
            { "nombre": "DRY MARTINI", "ingredientes": ["GIN", "VERMOUTH DRY"] },
            { "nombre": "ESPRESSO MARTINI", "ingredientes": ["VODKA", "LICOR DE CAFÉ", "ESPRESSO", "ALMIBAR"] },
            { "nombre": "FERNET", "ingredientes": ["FERNET", "COCA COLA"] },
            { "nombre": "FRENCH 75", "ingredientes": ["GIN", "ESPUMANTE", "JUGO DE LIMÓN", "ALMIBAR"] },
            { "nombre": "FRENCH CONNECTION", "ingredientes": ["COÑAC", "AMARETTO"] },
            { "nombre": "GANCIA", "ingredientes": ["AMERICANO GANCIA", "SPRITE"] },
            { "nombre": "GARIBALDI", "ingredientes": ["CAMPARI", "JUGO DE NARANJA"] },
            { "nombre": "GIMLET", "ingredientes": ["GIN", "JUGO DE LIMÓN", "ALMIBAR"] },
            { "nombre": "GIN GIN FIZZ", "ingredientes": ["GIN", "JUGO DE LIMÓN", "ALMIBAR", "SODA"] },
            { "nombre": "GIN TONIC", "ingredientes": ["GIN", "AGUA TÓNICA"] },
            { "nombre": "GINGER SMASH", "ingredientes": ["WHISKY", "ESPUMANTE", "JUGO DE MANZANA", "MENTA"] },
            { "nombre": "GOD FATHER", "ingredientes": ["WHISKY", "AMARETTO"] },
            { "nombre": "GOD MOTHER", "ingredientes": ["VODKA", "AMARETTO"] },
            { "nombre": "HANKY PANKY", "ingredientes": ["GIN", "VERMOUTH ROSSO", "FERNET"] },
            { "nombre": "HOT NEGRONI", "ingredientes": ["GIN", "CAMPARI", "SIROPE DE VERMOUTH", "JUGO DE LIMÓN", "AGUA CALIENTE"] },
            { "nombre": "ILUSION", "ingredientes": ["VODKA", "APEROL", "LICOR DE DURAZNO", "MARACUYÁ"] },
            { "nombre": "JAZMIN NEGRONI", "ingredientes": ["GIN", "CAMPARI", "TRIPLE SEC", "JUGO DE LIMÓN"] },
            { "nombre": "JOHN COLLINS", "ingredientes": ["WHISKY", "JUGO DE LIMÓN", "ALMIBAR", "SODA"] },
            { "nombre": "JUNGLE BIRD", "ingredientes": ["RON", "CAMPARI", "JUGO DE LIMÓN", "JUGO DE ANANÁ", "ALMIBAR"] },
            { "nombre": "KAMIKAZE", "ingredientes": ["VODKA", "BLUE CURAZAO", "JUGO DE LIMÓN"] },
            { "nombre": "KINGSTON NEGRONI", "ingredientes": ["RON", "CAMPARI", "VERMOUTH ROSSO"] },
            { "nombre": "LEMON DROP", "ingredientes": ["VODKA", "TRIPLE SEC", "JUGO DE LIMÓN", "ALMIBAR"] },
            { "nombre": "LIMONADA ELÉCTRICA", "ingredientes": ["VODKA", "BLUE CURAZAO", "JUGO DE LIMÓN", "ALMIBAR", "SODA"] },
            { "nombre": "LOLA!", "ingredientes": ["GIN", "VERMOUTH ROSSO", "JUGO DE NARANJA", "ALMIBAR"] },
            { "nombre": "MARGARITA", "ingredientes": ["TEQUILA", "TRIPLE SEC", "JUGO DE LIMÓN", "ALMIBAR"] },
            { "nombre": "MELON BALL", "ingredientes": ["VODKA", "LICOR DE MELÓN", "JUGO DE NARANJA"] },
            { "nombre": "MIMOSA", "ingredientes": ["ESPUMANTE", "JUGO DE NARANJA"] },
            { "nombre": "MOJITO", "ingredientes": ["RON", "LIMA", "MENTA", "ALMIBAR", "SODA"] },
            { "nombre": "NEGRONI", "ingredientes": ["GIN", "VERMOUTH ROSSO", "CAMPARI"] },
            { "nombre": "NEGRONI SBAGLIATO", "ingredientes": ["VERMOUTH ROSSO", "CAMPARI", "ESPUMANTE"] },
            { "nombre": "NUEVA OLA", "ingredientes": ["GIN", "BLUE CURAZAO", "JUGO DE ANANÁ", "JUGO DE LIMÓN"] },
            { "nombre": "PALOMA", "ingredientes": ["TEQUILA", "JUGO DE POMELO", "GASEOSA POMELO", "SAL"] },
            { "nombre": "PARADISE", "ingredientes": ["GIN", "BRANDY", "JUGO DE NARANJA"] },
            { "nombre": "PENICILLIN", "ingredientes": ["WHISKY", "JUGO DE LIMÓN", "ALMIBAR DE JENGIBRE"] },
            { "nombre": "PLANTER'S PUNCH", "ingredientes": ["RON", "JUGO DE NARANJA", "JUGO DE ANANÁ", "JUGO DE LIMÓN", "GRANADINA", "ALMIBAR"] },
            { "nombre": "SACRAMENTOS", "ingredientes": ["VODKA", "VERMOUTH ROSSO", "CAMPARI", "LICOR DE MELÓN", "JUGO DE LIMÓN"] },
            { "nombre": "SEX AND THE BEACH", "ingredientes": ["VODKA", "LICOR DE DURAZNO", "JUGO DE NARANJA", "GRANADINA"] },
            { "nombre": "SIDECAR", "ingredientes": ["COÑAC", "TRIPLE SEC", "JUGO DE LIMÓN", "ALMIBAR"] },
            { "nombre": "TEQUILA SUNRISE", "ingredientes": ["TEQUILA", "JUGO DE NARANJA", "GRANADINA"] },
            { "nombre": "TOM COLLINS", "ingredientes": ["GIN", "JUGO DE LIMÓN", "ALMIBAR", "SODA"] },
            { "nombre": "VESPER", "ingredientes": ["GIN", "VODKA", "VERMOUTH DRY"] },
            { "nombre": "VODKA TONIC", "ingredientes": ["VODKA", "AGUA TÓNICA"] },
            { "nombre": "WHISCOLA", "ingredientes": ["WHISKY", "COCA COLA"] },
            { "nombre": "WHITE LADY", "ingredientes": ["GIN", "TRIPLE SEC", "JUGO DE LIMÓN"] }
        
    ];
        

    // Lista de todos los ingredientes disponibles
    const ingredientes = [
        "RON", "LICOR DE DURAZNO", "JUGO DE ANANÁ", "JUGO DE LIMÓN", "ALMIBAR",
        "VERMOUTH ROSSO", "CAMPARI", "SODA", "APEROL", "ESPUMANTE", "VODKA",
        "LICOR DE MANZANA", "JUGO DE MANZANA", "BRANDY", "TRIPLE SEC", "LICOR DE CAFÉ",
        "BLUE CURAZAO", "SPRITE", "WHISKY", "LIMA", "MALIBÚ", "LECHE", "GRANADINA",
        "MARACUYÁ", "COCA COLA", "FERNET", "AMERICANO GANCIA", "JUGO DE NARANJA",
        "JUGO DE ARÁNDANOS", "GIN", "AGUA TÓNICA", "AMARETTO", "ESPRESSO", "MENTA",
        "TEQUILA", "CACHAZA", "COÑAC", "CYNAR", "LICOR DE MELÓN", "VERMOUTH DRY",
        "ALMIBAR VERMOUTH", "JUGO DE POMELO", "MIEL", "SAL", "GASEOSA POMELO", " ALMIBAR JENGIBRE"
    ];

    const ingredientSelector = document.getElementById('ingredient-options');
    const generateCocktailsBtn = document.getElementById('generate-cocktails-btn');
    const clearSelectionBtn = document.getElementById('clear-selection-btn');
    const cocktailResults = document.getElementById('cocktail-results');

    ingredientes.forEach(ingrediente => {
        const option = document.createElement('div');
        option.classList.add('ingredient-option');
        option.textContent = ingrediente;
        option.addEventListener('click', () => toggleIngredient(option));
        ingredientSelector.appendChild(option);
    });

    function toggleIngredient(option) {
        option.classList.toggle('selected');
    }

    generateCocktailsBtn.addEventListener('click', () => {
        const selectedIngredients = Array.from(document.querySelectorAll('.ingredient-option.selected')).map(option => option.textContent);
        generateCocktails(selectedIngredients);
    });

    clearSelectionBtn.addEventListener('click', () => {
        const selectedOptions = document.querySelectorAll('.ingredient-option.selected');
        selectedOptions.forEach(option => option.classList.remove('selected'));
        cocktailResults.innerHTML = ''; // Limpiar los tragos sugeridos
    });

    function generateCocktails(selectedIngredients) {
        const filteredCocktails = tragos.filter(trago => trago.ingredientes.every(ingrediente => selectedIngredients.includes(ingrediente)));
        
        let resultHTML = '<h2>Tragos sugeridos:</h2>';
        if (filteredCocktails.length > 0) {
            filteredCocktails.forEach(trago => {
                const tragoName = trago.nombre.replace(/\s+/g, '-').toLowerCase(); // Convertir nombre a formato URL
                resultHTML += `<p> ${trago.nombre} <a href="Cocktails Html/${tragoName}.html"> VER RECETA</a></p>`;
            });
        } else {
            resultHTML += '<p>No hay tragos disponibles con los ingredientes seleccionados.</p>';
        }

        cocktailResults.innerHTML = resultHTML;
        cocktailResults.style.display = 'block';
    }
});

// Archivo: script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const respuesta = document.getElementById('respuesta');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('procesar_formulario.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.exito) {
                respuesta.textContent = data.mensaje;
                respuesta.style.display = 'block';
                form.reset();
            } else {
                respuesta.textContent = 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.';
                respuesta.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            respuesta.textContent = 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.';
            respuesta.style.display = 'block';
        });
    });
});