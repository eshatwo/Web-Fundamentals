var poke = '';
    for (var i = 1; i<=151; i++){
        poke += "<img id = '" + i + "' src = 'http://pokeapi.co/media/img/" + i + ".png'>"
}
$('div').html(poke);

$('div').click(function(){
    $.get("https://pokeapi.co/api/v2/pokemon/" + i + "/", function(res) {
        console.log(res.height);
    })
})

$(document).ready(function(){
    for(var y = 1; y<=151; y++){
      var source = "http://pokeapi.co/media/img/" + y + ".png"
      $("#images").append("<img src = '" + source + "'alt='pokémon' id ='" + y + "'>");
    }
    $("img").click(function(){
      var image = $(this).attr("src");
      $.get("http://pokeapi.co/api/v1/pokemon/" + $(this).attr("id"), function(stats){
          console.log(stats);
          var str_details = "";
          for (var i in stats.types){
            // str_details = "<h4>Type(s):</h4><p>" + stats.types[i].name + "</p><h4>Height:</h4><p>" + stats.height + "</p><h4>Weight:</h4><p>" + stats.weight + "</p>";
            str_details =`<h3> ${stats.name} </h3>
                          <img src='${image}' alt = 'pokemon'>
                          <h4>Type(s):</h4>
                          <p>${stats.types[i].name}</p>
                          <h4>Height:</h4>
                          <p>${stats.height}</p>
                          <h4>Weight:</h4>
                          <p>${stats.weight}</p>`;
          }
          $("#pokedex").html(str_details);
        }, "json")
    })
  });