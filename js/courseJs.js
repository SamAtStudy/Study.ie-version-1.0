//In Materilise, options are specified in name-value pairs.
//var instances = M.Sidenav.init(elems, options);
//would be for eg. var instances = M.Sidenav.init(elems, {edges:'left',btn:'true'});

var userResult={1:"Java,Pyhton",2:"Java,Pyhton"};

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

$(document).ready(function(){
    $('select').formSelect();
});

$(document).ready(function(){
    $('.collapsible').collapsible();
});

$(document).ready(function(){
    $('.tabs').tabs();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.chips');
    var instances = M.Chips.init(elems,);
});

function createAccOption(){
    $('.modal').modal('close');
    $('#createAccBox').modal('open');
}

function redirectCourses(){
    window.location.replace("http://study.ie/Demo/courses.html"); //SITE LIVE VERSION
    //window.location.replace("http://localhost:63342/Study.ie/courses.html"); //LOCAL VERSION
}

