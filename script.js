
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


$("button").click(function(june) {
    var client = document.getElementById('nameDetail').value;
    alert(' Hello ' + 'dear ' + client + ' we have received your message. ' + ' We will get back to you soon');
    june.preventDefault();
});

//    reset my form
$("button").on('click', function(){
    $('form').each(function(){
      this.reset();
    });
});