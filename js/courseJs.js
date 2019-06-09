$(document).ready(function(){
    $('.parallax').parallax();
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.modal').modal();
    $('#loginBox').modal('open');
});

$(document).ready(function(){
    $('.tooltipped').tooltip();
});

function createAccOption(){
    $('.modal').modal('close');
    $('#createAccBox').modal('open');
}
