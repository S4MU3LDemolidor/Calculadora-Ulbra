const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let g1 = document.getElementById('width').value;

    if (g1.includes(",")) {
        g1 = g1.replace(",", ".");
    }

    g1 = parseFloat(g1);
    
    const precisa = (((6 * 3) - g1) / 2).toFixed(2);
    
    const value = document.getElementById('value');

    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if(precisa) {
        description = 'Você precisa de:';
    }

    document.getElementById('description').textContent = description;
    value.textContent = precisa;

});