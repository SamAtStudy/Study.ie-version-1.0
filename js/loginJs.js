document.addEventListener('DOMContentLoaded', function() {

    $("#accCreateBtn").click(function(){
        var username=$("#createUsername").val();
        var email=$("#email").val();
        var pass=$("#createPass").val();
        var conPass=$("#confirmPass").val();
        var option="create";


        $.post("accRetrieval.php",{
            userName: username,
            userEmail: email,
            userPass: pass,
            userConPass: conPass,
            option: option
        },function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
            if(data==="already exists"){
                alert("Username is taken, Please enter a unique username");
            }else if(data==="created"){
                alert("Account Created Successfully, Please log in");
            }else{
                alert(data);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    $("#accLoginBtn").click(function(){
        var username=$("#username").val();
        var pass=$("#pass").val();
        var option="login";

        $.post("accRetrieval.php",{
            option: option,
            username: username,
            password: pass
        },function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
            if(data==="login success"){
                sessionStorage.setItem("logged",username);
                //alert(sessionStorage.getItem("logged"));
                getUserData(sessionStorage.getItem("logged"));
                $('#loginBox').modal('close');
                loginStatus();
            }else{
                alert("Username/Password is incorrect");
            }
        });
    });
});

function loginStatus(x) {

    if(x==="out"){
        if(confirm("Are you sure you want to logout?")){
            $('#login').show();
            $('#logout').hide();
            $('#sidebarBtn').hide();
            sessionStorage.setItem("user_results","none");
            sessionStorage.setItem("logged","none");
        }
    }else{
        $('#login').hide();
        $('#logout').show();
        $('#sidebarBtn').show();
    }
}

$("#createForm").submit(function(e) {
    e.preventDefault();
});

$("#loginForm").submit(function(e) {
    e.preventDefault();
});