$(document).ready(function(){

    $("#fbBtn").click(function(){
        window.location.href = "https://www.facebook.com/studyire/";
    });

    $("#twBtn").click(function(){
        window.location.href = "https://twitter.com/realstudyie";
    });

    $("#inBtn").click(function(){
        window.location.href = "https://www.instagram.com/study.ie_";
    });

    $("#lnBtn").click(function(){
        window.location.href = "https://www.linkedin.com/company/study-ie/";
    });

    $('#learnOnlineFocus').on('click', function() {
        //this scroll withour animations in chrome
        $('#sectionThreeBox').get(0).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });

    loginStatus();

    $('#learInPersonFocus').on('click', function() {
        //this scroll withour animations in chrome
        $('#sectionThreeRowTwo').get(0).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });

    $('#trackLearningFocus').on('click', function() {
        //this scroll withour animations in chrome
        $('#sectionThreeRowThree').get(0).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });

    $('#pills-home').click(function(){
        loginStyle("revert");
    });

    $('#pills-profile-tab').click(function(){
        loginStyle("revert");
    });

    $('#navLogOut').click(function(){
        swal({
                title: "Are you sure?",
                text: " ",
                icon: "info",
                buttons: {
                    cancel: true,
                    confirm: {
                        text: "Log Out",
                        value: true,
                        visible: true,
                        className: "",
                        closeModal: true
                    }
                }
        }).then(function(){
                swal({
                    title: "Logged Out!",
                    text: " ",
                    icon:"success",
                    timer: 2500,
                    buttons:false
                });
                $('#navProfile').hide();
                $('#navLogin').show();
                sessionStorage.setItem("logged","none");
        });
    });

    $("#accLoginBtn").click(function(){
        var mailUsername=$("#mailUsername").val();
        var pass=$("#pass").val();
        var option="login";

        $.post("https://study.ie/Server/accRetrieval.php",{
            option: option,
            mailUsername: mailUsername,
            userPass: pass
        },function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
            if(data==="login success"){
                sessionStorage.setItem("logged",mailUsername);
                //alert(sessionStorage.getItem("logged"))f;
                //getUserData(sessionStorage.getItem("logged"));
                loginStyle("revert");
                loginStyle("clear");
                $('#loginModal').modal('hide');
                $('#dropdownAcc').html("User: "+sessionStorage.getItem("logged"));
                $('#dropdownProfileLink').attr("href", "https://www.study.ie/user.html/"+sessionStorage.getItem("logged"));
                $('#navProfile').show();
                $('#navLogin').hide();
                swal({
                    title: "Logged In!",
                    text: " ",
                    icon:"success",
                    timer: 2100,
                    //showConfirmButton: false
                    buttons:false
                });
                //loginStatus();
            }else{
                loginStyle("revert");
                loginStyle(data);
            }
        });
    });


    $("#accCreateBtn").click(function(){
        var username=$("#createUsername").val();
        var email=$("#createEmail").val();
        var pass=$("#createPass").val();
        var conPass=$("#confirmPass").val();
        var option="create";

        $.post("https://study.ie/Server/accRetrieval.php",{
            userName: username,
            userEmail: email,
            userPass: pass,
            userConPass: conPass,
            option: option
        },function(data,status){
            //alert("Data: " + data + "\nStatus: " + status);
            if(data==="create success"){
                swal({
                    title: "Account Created!",
                    text:"Now that you have an account, please log in",
                    icon:"success",
                    timer: 2500,
                    //showConfirmButton: false
                    buttons:false
                });
            }else{
                loginStyle("revert");
                loginStyle(data);
            }
        });
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#pass').tooltip('disable');
    $('#mailUsername').tooltip('disable');
    $('#createUsername').tooltip('disable');
    $('#createEmail').tooltip('disable');
    $('#createPass').tooltip('disable');
    $('#confirmPass').tooltip('disable');

//comment system
    $('#comment_form').on('submit', function(event){
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
            url:"add_comment.php",
            method:"POST",
            data:form_data,
            dataType:"JSON",
            success:function(data)
            {
                if(data.error != '')
                {
                    $('#comment_form')[0].reset();
                    $('#comment_message').html(data.error);
                    $('#comment_id').val('0');
                    load_comment();
                }
            }
        })
    });

    load_comment();

    $(document).on('click', '.reply', function(){
        var comment_id = $(this).attr("id");
        $('#comment_id').val(comment_id);
        $('#comment_name').focus();
    });

    $(".groupTileResTrigger").mouseenter(function () {
        $(".groupResourceContainer").fadeIn();
    });

    $(".groupTile").mouseleave(function(){
        $(".groupResourceContainer").fadeOut();
        //alert("fade out");
    });
});

function load_comment(){
    $.ajax({
        url:"fetch_comment.php",
        method:"POST",
        success:function(data)
        {
            $('#display_comment').html(data);
        }
    })
}

function loginStatus(){
    if(sessionStorage.getItem("logged")==="none" || sessionStorage.getItem("logged")===null){
        sessionStorage.setItem("logged","none");
        return "No User Logged In";
    }else{
        $('#dropdownAcc').html("User:"+sessionStorage.getItem("logged"));
        $('#dropdownProfileLink').attr("href", "https://www.study.ie/user.html/"+sessionStorage.getItem("logged"));
        $('#navProfile').show();
        $('#navLogin').hide();
        return "User "+sessionStorage.getItem("logged")+" is logged in.";
    }
}

function loginStyle(x){
    var $tooltip=$('.tooltip');

    if(x==="revert"){
        $('#mailUsername').tooltip('disable');
        $('#pass').tooltip('disable');
        $('#createUsername').tooltip('disable');
        $('#createEmail').tooltip('disable');
        $('#createPass').tooltip('disable');
        $('#confirmPass').tooltip('disable');
        $('.form-control').css("box-shadow","");
    }else if(x==="clear"){
        $('.form-control').val("");
    }else if(x==="wrong password"){
        $('#pass').tooltip('enable');
        $('#pass').css("box-shadow","0 0 0 0.2rem hsl(0, 71%, 53%)");
    }else if(x==="no user"){
        $('#mailUsername').tooltip('enable');
        $('#mailUsername').css("box-shadow","0 0 0 0.2rem hsl(44, 90%, 80%)");
    }else if(x==="empty"){
        $('.form-control').css("box-shadow","0 0 0 0.2rem hsl(44, 90%, 80%)");
    }else if(x==="warning tooltip"){
        //Tooltip colors are currently working.
        $tooltip.css("background-color","hsla(44, 95%, 85%, 1)");
        $tooltip.css("color","hsl(43, 64%, 34%)");
        $$tooltip.css("font-weight","700");
    }else if(x==="danger tooltip"){
        $tooltip.css("background-color","hsla(0, 89%, 77%, 1)");
        $tooltip.css("color","hsl(0, 56%, 36%)");
        $tooltip.css("font-weight","700");
    }else if(x==="name taken"){
        /* $('#createUsername').tooltip('enable'); */
        $('#createUsername').css("box-shadow","0 0 0 0.2rem hsl(44, 90%, 80%)");
    }else if(x==="invalid username"){
        $('#createUsername').tooltip('enable');
        $('#createUsername').css("box-shadow","0 0 0 0.2rem hsl(44, 90%, 80%)");
    }else if(x==="invalid email"){
        $('#createEmail').tooltip('enable');
        $('#createEmail').css("box-shadow","0 0 0 0.2rem hsl(44, 90%, 80%)");
    }else if(x==="invalid params"){
        $('#createUsername').tooltip('enable');
        $('#createEmail').tooltip('enable');
        $('#createUsername').css("box-shadow","0 0 0 0.2rem hsl(44, 90%, 80%)");
        $('#createEmail').css("box-shadow","0 0 0 0.2rem hsl(44, 90%, 80%)");
    }else if(x==="password mismatch"){
        $('#confirmPass').tooltip('enable');
        $('#confirmPass').css("box-shadow","0 0 0 0.2rem hsl(0, 71%, 53%)");
    }else{
        alert("Error! Oh no...\nLooks like its a "+x);
    }
}

function userProfile(){
    var x=loginStatus();
    if(x.indexOf("No User Logged In") ==-1){
        alert("HEY!");
    }
}

var saving;
var tileName=$('#classTileName');
var tileTopic=$('#classTileTopic');

function editClassTile(){
    /*var tileName=$('#classTileName');
    var tileTopic=$('#classTileTopic'); */
    $('.editHighlight').css("outline","2px dashed hsl(206, 79%, 81%)");
    $('.editHighlight').attr("contenteditable","true");
    $('#classTileEdit').hide();
    $('#classTileSave').show();
    //tileName.css("cursor","pointer");
    //saving=setInterval(saveClassTile,10000);
}

function saveClassTile(tileName,tileTopic){
    alert("changes saved");
    $('#classTileEdit').show();
    $('#classTileSave').hide();
    $('.editHighlight').css("outline","");
    $('.editHighlight').attr("contenteditable","false");
    /*clearInterval(saving);
    tileName.css("outline","none");
    tileName.attr("contenteditable","false");
    tileTopic.css("outline","none");
    tileTopic.attr("contenteditable","false");
    //tileGoals.css("outline","");
    //tileGoals.attr("contenteditable","false");
    clearInterval(saving); */
}
var tasks=1;

function newTask(){
    $(".classTileNewTask").remove();
    tasks++;
    var div=('<div class="classTileGoal custom-control-lg custom-checkbox my-2 col-md-12 col-xl-4">\n' +
        '       <input type="checkbox" class="custom-control-input" id="customCheck'+tasks+1+'" disabled>\n' +
        '       <label class="custom-control-label" for="customCheck2"><span contenteditable="false" data-placeholder="Task '+tasks+'" class="editHighlight" style="color:black;"></span></label>\n' +
        ' </div>\n' +
        ' <div class="classTileGoal classTileNewTask custom-control-lg custom-checkbox my-2 col-md-12 col-xl-4">\n' +
        '       <img src="img/icons/add-button.svg" class="classTileNewTaskIcon" onclick="newTask()"><span style="margin-left:0.5rem;">New Task</span>\n' +
        ' </div>')
    $("#taskList").append(div);
}
var weeks=0;

function newTaskList(){
    $(".dropdownNewTaskList").remove();
    weeks++;
    var div=('<a class="dropdown-item" href="#">Week '+weeks+'</a>\n' +
        '     <a class="dropdown-item dropdownNewTaskList" href="#" onclick="newTaskList()"><img src="img/icons/add-button.svg" class="classTileNewTaskDropIcon"> <span style="margin-left:0.25rem;">New Task List</span>\n' +
        '     </a>');
    $("#taskDropdownMenu").append(div);
}

function newAnnouncement(){
    $('#classTileNewAnnounce').hide();
    $('#classTileAnnounce').show();
}

function verifyAnnouncement(x){
    if(x.innerText.length>50){
         x.innerText=x.innerText.substring(0,49);
         return;
    }
    //setInterval(saveTile,3000);

    setTimeout(function(){
        if(x.innerText.length>50){
            x.innerText=x.innerText.substring(0,49);
        }
    },250);
}

function courseGroupTileFunctions(){
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(".bookmarkIcon").click(function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "img/icons/bookmark.png");
            $(this).attr("value", "bookmarked");
            $(this).tooltip('disable');
        }else if($(this).attr("value")==="bookmarked"){
            $(this).attr("src", "img/icons/unbookmark.png");
            $(this).attr("value", "notBookmarked");
            $(this).tooltip('enable');
        }
    });

    $(".bookmarkIcon").hover(function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "img/icons/bookmark.png");
        }
    },function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "img/icons/notBookmarked.png");
        }
    });

    $(".recommendIcon").click(function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "img/icons/Recommend.svg");
            $(this).attr("value", "recommended");
            $(this).tooltip('disable');
        }else if($(this).attr("value")==="recommended"){
            $(this).attr("src", "img/icons/recommend.svg");
            $(this).attr("value", "notRecommended");
            $(this).tooltip('enable');
        }
    });

    $(".recommendIcon").hover(function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "img/icons/recommend.svg");
        }
    },function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "img/icons/notRecommended.svg");
        }
    });
}

function coursePageFunctions(){

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(".bookmarkIcon").click(function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "img/icons/bookmark.png");
            $(this).attr("value", "bookmarked");
            $(this).tooltip('disable');
        }else if($(this).attr("value")==="bookmarked"){
            $(this).attr("src", "img/icons/unbookmark.png");
            $(this).attr("value", "notBookmarked");
            $(this).tooltip('enable');
        }
    });

    $(".bookmarkIcon").hover(function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "img/icons/bookmark.png");
        }
    },function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "img/icons/notBookmarked.png");
        }
    });

    $(".recommendIcon").click(function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "img/icons/Recommend.svg");
            $(this).attr("value", "recommended");
            $(this).tooltip('disable');
        }else if($(this).attr("value")==="recommended"){
            $(this).attr("src", "img/icons/recommend.svg");
            $(this).attr("value", "notRecommended");
            $(this).tooltip('enable');
        }
    });

    $(".recommendIcon").hover(function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "img/icons/recommend.svg");
        }
    },function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "img/icons/notRecommended.svg");
        }
    });


}

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

function checkResults(){
    /* Number of results/rows is cached here */
    //return 6;
    /*var amount="all";
    $.post("https://study.ie/Server/api.php",{
        amount: amount
    },function(data,status){
        data=data.substring(1,data.length-1);
        alert("JSON Data: " + data + "\nStatus: " + status);
       return 2000;
    });*/
}

function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

var totalRows=3476; //Hardcoded number of rows in DB;

function groupResults(){
    //var totalRows=checkResults();

    if(totalRows==0){
        /*Hide load more btn and show no more results txt*/
        $("#noResults").show();
        $("#loadMoreResults").hide();
    }else if(totalRows<4){
        createGroupTile(totalRows);

        $("#noResults").show();
        $("#loadMoreResults").hide();
    }else{
        createGroupTile(4);
    }
}

//FUTURE: script for applying a relevant image for a particular Course Topic if no image available
function createGroupTile(tilesShown){

    var ar={groupImg:"img/Logo1.png",courseTitle:"Tile Title",courseDesc:"Tile Description",
        coursePrice:"€0",courseRecommend:"notRecommended",courseThread:"0",courseBookmark:"notBookmarked"};

    var div;
    var numRows=""+totalRows;
    var tiles=""+tilesShown;

    $.post("https://study.ie/Server/api.php",{
        tiles: tiles,
        numRows: numRows
    },function(dbData,status){
    },function(dbData,status){

        if(dbData.indexOf("Failed to connect") !==-1){
            console.log("Database Error"); //This is not working...
        }else {
            alert(dbData);
            var decodedJSON = JSON.parse(dbData);
            //alert(tilesShown);
            //console.log(decodedJSON); //Use Console Log to Debug array structure
            //alert(decodedJSON);
            //$('#test').html(decodedJSON[1]['courseTitle']);
            /*
            var strSplit;

            for(i=5; i>=0; i--){

                if(decodedJSON[i]['courseFee'].indexOf("€") !==-1){
                    strSplit=decodedJSON[i]['courseFee'].split("€");
                    strSplit=strSplit[1].split(" ");
                    strSplit=strSplit[0].split(".");
                    decodedJSON[i]['coursePrice']="€"+strSplit[0];
                }else{
                    decodedJSON[i]['coursePrice']=" ";
                }

                //Truncates Card Desc
                if(decodedJSON[i]['courseDesc'].length<2){
                    decodedJSON[i]['courseDesc']="Course Description Not Available.";
                }else if(decodedJSON[i]['courseDesc'].length>250){
                    decodedJSON[i]['courseDesc']=decodedJSON[i]['courseDesc'].substr(0,238)+". . .";
                }
                */
            div = $('<div class="row">' +

                '<div class="col-12 mt-5 mx-auto">\n' +
                '                <div class="row justify-content-between m-xl-5 m-3">\n' +
                '                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 groupTileContainer">\n' +
                '                        <div class="card groupTile mx-md-4 mx-lg-3 mx-xl-4 my-3 my-lg-4 my-xl-5 gmd-1-hover groupTile">\n' +
                '                            <img class="courseImg courseTileImg" src="' + ar['groupImg'] + '" alt="Card image cap" style= "width:10rem; height:10rem;" class="m-auto pt-2 px-1 pb-1 groupTileLogo">\n' +
                '                        <div class="card-body groupTileBody">\n' +
                '                            <a class="stretched-link groupTileModalTrigger" style="color:black" href="#" data-toggle="modal" data-target="#groupTileModal1"><h5 class="card-title text-center groupTileTitle"tyle="font-weight:700;" >' + decodedJSON[i]['className'] + '</h5></a>\n' +
                '                            <p class="card-text courseDesc">' + decodedJSON[i]['lessonName'] + '</p>\n' +
                '                            <div class="row my-2">\n' +
                '                                <img src="img/icons/timer.svg" class="classTileIcon" ><span class="groupTileTime">' + decodedJSON[i]['time'] + '</span>\n' +
                '                        </div>\n' +
                '                        <div class="row my-2">\n' +
                '                            <img src="img/icons/calendar.svg" class="classTileIcon" ><span class=groupTileDate">' + decodedJSON[i]['date'] + '</span>\n</div>\n' +
                '                            <span class="ml-5 px-1 groupTileFreq" style="border-bottom:2px solid green; font-size: 1rem;">Bi-Weekly</span>\n' +
                '                        </div>\n' +
                '                         <div class="row my-2">\n' +
                '                         <img src="img/icons/location-point.svg" class="classTileIcon" ><span class="groupTileLoc">' + decodedJSON[i]['location'] + '</span>\n' +
                '                         </div>\n' +
                '                        <div class="d-flex justify-content-between mt-3 mb-2">\n' +
                '                            <div class="mt-2 text-muted">\n' +
                '                                 <span class="groupTileMembers">' + decodedJSON[i]['memNum'] + '</span> Members \n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                <button type="button" class="btn btn-info px-4 groupTileJoinBtn" style="border-radius: 20px; position: relative; z-index: 5; font-size:1.1rem;" onclick="alert();">Join</button>\n' +
                '                            </div>\n' +
                '                          </div>\n' +
                '                    <div class="row mt-1" style="font-weight:700;">\n' +
                '                        <a class="text-muted text-center groupTileResTrigger" style="color:black; width:100%; position: relative; z-index: 5;" data-toggle="collapse" href="#resourceCollapse2" role="button" aria-expanded="false" aria-controls="resourceCollapse2">Resources </a>\n' +
                '                    </div>\n' +
                '                    <div class="row groupResourceContainer collapse pt-1" id="resourceCollapse2" style="position: relative; z-index: 5;">\n' +
                '                        <div class="col-12">\n' +
                '                           ' + decodedJSON[i]['course1'] + ' <span class="ml-1 p-1" style="border-style: solid; border-radius: 12px; border-width: 2px; border-color: hsl(206, 79%, 81%); color:hsl(206, 79%, 81%);background-color: hsl(206, 100%, 97%); font-size: 0.9rem;">' + decodedJSON[i]['course1Prov'] + '</span>\n' +
                '                        </div>\n' +
                '                        <div class="col-12">\n' +
                '                           ' + decodedJSON[i]['course2'] + ' <span class="ml-1 p-1" style="border-style: solid; border-radius: 12px; border-width: 2px; border-color: hsl(206, 79%, 81%); color:hsl(206, 79%, 81%);background-color: hsl(206, 100%, 97%); font-size: 0.9rem;">' + decodedJSON[i]['course2Prov'] + '</span>\n' +
                '                        </div>\n' +
                '                        <div class="col-12">\n' +
                '                           ' + decodedJSON[i]['course3'] + ' <span class="ml-1 p-1" style="border-style: solid; border-radius: 12px; border-width: 2px; border-color: hsl(206, 79%, 81%); color:hsl(206, 79%, 81%);background-color: hsl(206, 100%, 97%); font-size: 0.9rem;">' + decodedJSON[i]['course3Prov'] + '</span>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <div class="modal fade groupTileModal" id="groupTileModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
                '                        <div class="modal-dialog" role="document">\n' +
                '                            <div class="modal-content" id="aboutUsContent">\n' +
                '                                <div class="modal-body">\n' +
                '                                    <button type="button" class="loginClose" data-dismiss="modal" aria-label="Close">\n' +
                '                                        <span aria-hidden="true">&times;</span>\n' +
                '                                    </button>\n' +
                '                                    <div id="aboutModalContent">\n' +
                '                                        <h4>Our Mission</h4>\n' +
                '                                        <div class="row">\n' +
                '                                            <div class="col">\n' +
                '                                                <div class="container-fluid" id="aboutUsText">Empower any learner* to effortlessly find the best resources and help them visualise their learning journey.</div>\n' +
                '                                                <br/>\n' +
                '                                                <div class="container-fluid" id="aboutUsText" style="font-size:0.6vw; opacity: 0.8;">*If you can think, you are a learner.</div>\n' +
                '                                            </div>\n' +
                '                                        </div>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</div>\n' +
                '</div>');
            totalRows = totalRows - 1;

            $("#groupResContainerStep").append(div);

            // add functionality to course tiles
            courseGroupTileFunctions();
        }
    });

}

/*
function courseResults(){
    //var totalRows=checkResults();

    if(totalRows==0){
        /*Hide load more btn and show no more results txt
        $("#noResults").show();
        $("#loadMoreResults").hide();
    }else if(totalRows<6){
        createTile(totalRows);

        $("#noResults").show();
        $("#loadMoreResults").hide();
    }else{
        createTile(6);
    }
}

//FUTURE: script for applying a relevant image for a particular Course Topic if no image available
function createTile(tilesShown){

    var ar={courseImg:"https://via.placeholder.com/320x180",courseTitle:"Tile Title",courseDesc:"Tile Description",
        coursePrice:"€0",courseRecommend:"notRecommended",courseThread:"0",courseBookmark:"notBookmarked"};

    var div;
    var numRows=""+totalRows;
    var tiles=""+tilesShown;

    $.post("https://study.ie/Server/api.php",{
        tiles: tiles,
        numRows: numRows
    },function(dbData,status){

        if(dbData.indexOf("Failed to connect") !==-1){
            console.log("Database Error"); //This is not working...
        }else{
            //alert(dbData);
            var decodedJSON=JSON.parse(dbData);
            //alert(tilesShown);
            //console.log(decodedJSON); //Use Console Log to Debug array structure
            //alert(decodedJSON);
            //$('#test').html(decodedJSON[1]['courseTitle']);
            var strSplit;

            for(i=5; i>=0; i--){

                if(decodedJSON[i]['courseFee'].indexOf("€") !==-1){
                    strSplit=decodedJSON[i]['courseFee'].split("€");
                    strSplit=strSplit[1].split(" ");
                    strSplit=strSplit[0].split(".");
                    decodedJSON[i]['coursePrice']="€"+strSplit[0];
                }else{
                    decodedJSON[i]['coursePrice']=" ";
                }

                //Truncates Card Desc
                if(decodedJSON[i]['courseDesc'].length<2){
                    decodedJSON[i]['courseDesc']="Course Description Not Available.";
                }else if(decodedJSON[i]['courseDesc'].length>250){
                    decodedJSON[i]['courseDesc']=decodedJSON[i]['courseDesc'].substr(0,238)+". . .";
                }

                div = $('<div class="row">' +
                    '<div class="col-12 mt-5 mx-auto">\n' +
                    '                <div class="card gmd-1 courseTile">\n' +
                    '                    <div class="card-horizontal">\n' +
                    '                        <div class="img-square-wrapper">\n' +
                    '                            <img class="courseImg courseTileImg" src="'+ar['courseImg']+'" alt="Card image cap">\n' +
                    '                        </div>\n' +
                    '                        <div class="card-body" style="position: relative;">\n' +
                    '                            <a class="removeColor" href="course.php?id='+numRows+'"><h3 class="courseTitle">'+decodedJSON[i]['courseTitle']+'<br><span style="opacity:0.8; font-size:1rem;">'+decodedJSON[i]['courseProvider']+' </span></h3></a>\n' +
                    '                            <p class="card-text courseDesc">'+decodedJSON[i]['courseDesc']+'</p>\n' +
                    '                            <div class="courseBotTileInfo">\n' +
                    '                                <img class="courseTileIconBottom recommendIcon courseRecommend" src="img/icons/'+ar['courseRecommend']+'.svg" value="'+ar['courseRecommend']+'" data-toggle="tooltip" data-placement="bottom" title="Recommend This">&nbsp<span id="courseRecommend">0</span> Recommended\n' +
                    '                                <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample"><img class="courseTileIconBottom ml-3 mr-1 threadIcon" src="img/icons/thread.svg" data-toggle="tooltip" data-placement="bottom" title="Show Threads"></a>&nbsp<span id="courseThread">'+ar['courseThread']+'</span> Threads\n' +                    '                            </div>\n' +
                    '                        </div>\n' +
                    '                        <div class="courseSideTileInfo">\n' +
                    '                            <div class="courseTileIconSide"><img class="bookmarkIcon courseBookmark" src="img/icons/'+ar['courseBookmark']+'.png" value="'+ar['courseBookmark']+'" data-toggle="tooltip" data-placement="bottom" title="Bookmark"></div>\n' +
                    '                            <div class="align-items-end courseTilePrice"><span id="coursePrice">'+decodedJSON[i]['coursePrice']+'</span></div>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>' +
                    '</div>');
                totalRows=totalRows-1;

                $("#resContainerStep").append(div);
            }

            // add functionality to course tiles
            courseTileFunctions();
        }
    });

}
*/
function createCoursePage(){

    var data={courseID:0,courseImg:"https://via.placeholder.com/320x180",courseTitle:"Course Title",
        courseDesc:"Course Description", courseProvider:"Course Provider",coursePrice:"€0",courseRecommend:"notRecommended",
        courseThread:"0", courseBookmark:"notBookmarked", courseSubjects:"Course Subjects/Modules",
        courseFeeInfo:"Info on Fees",courseDuration:"Info on duration", courseLink:"https://www.google.com/search?q=study.ie",
        courseCode:"XY000",coursePoints:"000", courseLocation:"Course Location",courseSetting:"Online",courseType:"Learning"};

    var strSplit;

    var courseId=GetURLParameter('id');

    $.post("https://study.ie/Server/api.php",{
        classId: classId
    },function(dbData,status){

        if(dbData.indexOf("Failed to connect") !==-1){
            console.log("Database Error"); //This is not working...
        }else{
            dbData=dbData.substring(1,dbData.length-1);
            var decodedJSON=JSON.parse(dbData);
            //alert("JSON Data: " + dbData + "\nStatus: " + status);

            //look into caching selectors for improved performance
            $(".courseTitle").html(decodedJSON['courseTitle']);

            //These features have to be added to the database
            //$("#courseImg").attr("src",decodedJSON['courseImg']);
            //$("#courseSetting").html(decodedJSON['courseSetting']);
            //$("#courseBookmark").attr("value",decodedJSON['courseBookmark']);
            //var bookmarkImg="img/icons/"+decodedJSON['courseBookmark']+".png";
            //$("#courseBookmark").attr("src",bookmarkImg);

            if(decodedJSON['courseDesc'].length<2){
                $("#courseDesc").html("Course Description Not Available.");
            }else{
                $("#courseDesc").html(decodedJSON['courseDesc']);
            }

            if(decodedJSON['courseProvider'].length<2){
                $("#courseProvider").html("Course Provider n/a");
            }else{
                $("#courseProvider").html(decodedJSON['courseProvider']);
            }

            if(decodedJSON['courseSubjects'].length<2){
                $("#courseSubjects").html("Course Structure n/a");
            }else{
                $("#courseSubjects").html(decodedJSON['courseSubjects']);
            }

            var moreInfo="";
            if(decodedJSON['courseFee'].length<2 || decodedJSON['courseDuration'].length<2){
                moreInfo=moreInfo+decodedJSON['courseFee'];
                moreInfo=moreInfo+decodedJSON['courseDuration'];
                moreInfo=moreInfo+"<br><br>More Information can be found on the course providers website.";
            }else{
                moreInfo=moreInfo+decodedJSON['courseDuration']+"<br><br>";
                moreInfo=moreInfo+decodedJSON['courseFee'];
            }


            $("#courseMoreInfo").html(moreInfo);
            if(decodedJSON['courseFee'].indexOf("€") !==-1){
                strSplit=decodedJSON['courseFee'].split("€");
                strSplit=strSplit[1].split(" ");
                strSplit=strSplit[0].split(".");
                $("#coursePrice").html("€"+strSplit[0]);
            }else{
                $("#coursePrice").html("");
            }

            strSplit=decodedJSON['courseLink'].split("~");
            $("#courseLink").attr("href",strSplit[strSplit.length-1]);

            // add functionality to course page
            coursePageFunctions();
            //FUTURE: need to add columns and tables for recommendation system and threads to database for this functionality
            //FUTURE: script for applying a relevant image for a particular course provider
        }
    });
}

function showResult(str) {
    if (str.length==0) {
        document.getElementById("livesearch").innerHTML="";
        document.getElementById("livesearch").style.border="0px";
        return;
    }
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {  // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function() {
        if (this.readyState==4 && this.status==200) {
            document.getElementById("livesearch").innerHTML=this.responseText;
            document.getElementById("livesearch").style.border="1px solid #A5ACB2";
        }
    }
    xmlhttp.open("GET","https://study.ie/Server/search.php?q="+str,true);
    xmlhttp.send();
}

function delay(callback, ms) {
    var timer = 0;
    return function() {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}

$('#input').keyup(delay(function (e) {
    showResult(this.value);
}, 500));