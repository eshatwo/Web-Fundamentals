var poke = '';
    for (var i = 1; i<=151; i++){
        poke += "<img id = '" + i + "' src = 'http://pokeapi.co/media/img/" + i + ".png'>"
}
$('div').html(poke);