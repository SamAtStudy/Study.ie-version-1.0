//In Materilise, options are specified in name-value pairs.
//var instances = M.Sidenav.init(elems, options);
//would be for eg. var instances = M.Sidenav.init(elems, {edges:'left',btn:'true'});

$(document).ready(function(){
    $('.parallax').parallax();
});

$(document).ready(function(){
    $('.sidenav').sidenav({
        edge:'right'
    });
});

$(document).ready(function(){
    $('.modal').modal();
});

$(document).ready(function(){
    $('.tooltipped').tooltip();
});

function createAccOption(){
    $('.modal').modal('close');
    $('#createAccBox').modal('open');
}
