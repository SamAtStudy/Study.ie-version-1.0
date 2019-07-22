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

    courseResults();

});

function courseTileFunctions(){

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(".bookmarkIcon").click(function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "icons/bookmark.png");
            $(this).attr("value", "bookmarked");
            $(this).tooltip('disable');
        }else if($(this).attr("value")==="bookmarked"){
            $(this).attr("src", "icons/unbookmark.png");
            $(this).attr("value", "notBookmarked");
            $(this).tooltip('enable');
        }
    });

    $(".bookmarkIcon").hover(function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "icons/bookmark.png");
        }
    },function(){
        if($(this).attr("value")==="notBookmarked"){
            $(this).attr("src", "icons/notBookmarked.png");
        }
    });

    $(".recommendIcon").click(function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "icons/Recommend.svg");
            $(this).attr("value", "recommended");
            $(this).tooltip('disable');
        }else if($(this).attr("value")==="recommended"){
            $(this).attr("src", "icons/recommend.svg");
            $(this).attr("value", "notRecommended");
            $(this).tooltip('enable');
        }
    });

    $(".recommendIcon").hover(function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "icons/recommend.svg");
        }
    },function(){
        if($(this).attr("value")==="notRecommended"){
            $(this).attr("src", "icons/notRecommended.svg");
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
    return 6;
}

function courseResults(){
    var resNum=checkResults();

    if(resNum==0){

        /*Hide load more btn and show no more results txt*/
        $("#noResults").show();
        $("#loadMoreResults").hide();
    }else if(resNum<6){
        for(i=resNum; i>0; i--){
            createTile();
        }

        /* add functionality to course tiles */
        courseTileFunctions();
        $("#noResults").show();
        $("#loadMoreResults").hide();
    }else{
        for(i=resNum; i>0; i--){
            createTile();
        }
        courseTileFunctions();
    }
}

function createTile(){

    var ar=courseData("tile");

    var div = $('<div class="row">' +
        '<div class="col-12 mt-5 mx-auto">\n' +
        '                <div class="card gmd-1 courseTile">\n' +
        '                    <div class="card-horizontal">\n' +
        '                        <div class="img-square-wrapper">\n' +
        '                            <img class="courseImg courseTileImg" src="'+ar['courseImg']+'" alt="Card image cap">\n' +
        '                        </div>\n' +
        '                        <div class="card-body" style="position: relative;">\n' +
        '                            <h3 class="courseTitle">'+ar['courseTitle']+'</h3>\n' +
        '                            <p class="card-text courseDesc">'+ar['courseDesc']+'</p>\n' +
        '                            <div class="courseBotTileInfo">\n' +
        '                                <img class="courseTileIconBottom recommendIcon courseRecommend" src="icons/'+ar['courseRecommend']+'.svg" value="'+ar['courseRecommend']+'" data-toggle="tooltip" data-placement="bottom" title="Recommend This">&nbsp<span id="courseRecommend">0</span> Recommended\n' +
        '                                <a data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample"><img class="courseTileIconBottom ml-3 mr-1 threadIcon" src="icons/thread.svg" data-toggle="tooltip" data-placement="bottom" title="Show Threads"></a>&nbsp<span id="courseThread">'+ar['courseThread']+'</span> Threads\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="courseSideTileInfo">\n' +
        '                            <div class="courseTileIconSide"><img class="bookmarkIcon courseBookmark" src="icons/'+ar['courseBookmark']+'.png" value="'+ar['courseBookmark']+'" data-toggle="tooltip" data-placement="bottom" title="Bookmark"></div>\n' +
        '                            <div class="align-items-end courseTilePrice"><span id="coursePrice">'+ar['coursePrice']+'</span></div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>' +
        '</div>');

    $("#resContainerStep").append(div);
}

function courseData(req){

    if(req==="tile"){
        var data={courseImg:'http://via.placeholder.com/320x180',courseTitle:'Tile Title',courseDesc:'Tile Description',
            coursePrice:'€0',courseRecommend:'notRecommended',courseThread:'0',courseBookmark:'notBookmarked'};

        //data["courseImg"]=;
        //data["courseTitle"]=;
        //data["courseDesc"]=;
        //data["coursePrice"]=;
        //data["courseRecommend"]=;
        //data["courseThread"]=;
        //data["courseBookmark"]=;

        return data;
    }else if(req==="page"){

    }

}