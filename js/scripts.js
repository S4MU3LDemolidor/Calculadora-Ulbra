const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let g1 = document.getElementById('width').value;
    let g2 = document.getElementById('height').value;

    if (g1.includes(",")) {
        g1 = g1.replace(",", ".");
    }
    
    if (g2.includes(",")) {
        g2 = g2.replace(",", ".");
    }

    g1 = parseFloat(g1);
    g2 = parseFloat(g2);    
    
    const average = ((g1 + (g2 * 2)) / 3).toFixed(2);
    
    const value = document.getElementById('value');

    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    if(average >= 6) {
        description = 'Você foi aprovado!';
    } else if (average < 6){
        description = 'Você está no Exame Final'
    }

    value.textContent = average;
    document.getElementById('description').textContent = description;

});