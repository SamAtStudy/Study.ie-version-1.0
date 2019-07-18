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

$(document).ready(function(){

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

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
            $(this).attr("src", "icons/unBookmark.png");
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
            $(this).attr("src", "icons/unRecommend.svg");
        }
    });
});