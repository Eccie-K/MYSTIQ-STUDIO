$(document).ready(function(){
    $("#show").click(function(){
        $(".design").toggle("slide");
    });
});


$(document).ready(function(){
    $("#click").click(function(){
        $(".development").toggle("slide");
    });
});

$(document).ready(function(){
    $("#s").click(function(){
        $(".product").toggle("slide");
    });
});


("button").click(function() {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    event.preventDefault();
});
//    reset my form
  $("button").on('click', function(){
    $('form').each(function(){
      this.reset();
      alert(client);
    });
});