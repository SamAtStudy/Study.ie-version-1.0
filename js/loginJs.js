document.addEventListener('DOMContentLoaded', function() {

    $("#accCreateBtn").click(function(){
        var username=$("#username").val();
        var pass=$("#pass").val();

        $.post("accCreate.php",{
            username: username,
            password: pass
        },function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
            if(data==="already exists"){
                alert("Username is taken, Please enter a unique username");
            }else if(data==="created"){
                var tempJSON=JSON.stringify(userResult);
                var user=username;

                $.post("updateUser.php",{
                    username: user,
                    userRes: tempJSON
                },function(data,status){
                    alert("Data: " + data + "\nStatus: " + status);
                });

                alert("Account Created Successfully, Please log in");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    $("#accLoginBtn").click(function(){
        var username=$("#username").val();
        var pass=$("#pass").val();

        $.post("accLogin.php",{
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