<!doctype html>
<html lang="en" class="no-js">
<head>
    <!-- These meta tags Prevents Caching of web page: Good for development, Not so great for consumer. -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <title>Study.ie</title>
    <link rel="icon" href="img/Logo1.png">

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="canonical" href="https://Study.ie" />
    <meta name="description" content="Study.ie's Blog">
    <link href="blogcss/modern-business.css" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <!--Googles Valera Round Font -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,400,700&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet">

    <!-- Study.ie Stylesheet -->
    <link rel="stylesheet" type="text/css" href="css/studyStylesheet.css">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-142230907-4"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-142230907-4');
    </script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script>
        $(function () {

            $('form').on('submit', function (e) {

                e.preventDefault();

                $.ajax({
                    type: 'post',
                    url: 'Server/api.php',
                    data: $('form').serialize(),
                    success: function () {
                        alert('email was submitted');
                    }
                });

            });

        });
    </script>
</head>
<body>

<!-- NAV BAR-->
<nav class="navbar navbar-expand-lg navbar-light navbar-custom navbarHome" id="mainNavbar">
    <a class="navbar-brand" href="index.php">
        <img src=img/Logo2White.png alt="Study.ie" id="studyLogo" width="115" height="36">
    </a>

    <!-- Navbar Search -->
    <div class="my-auto ml-3 gmd-1-hover" id="navbarSearchContainer">
        <input class="px-3 py-1 searchGroups" type="text" id="navbarSearch" size="10" placeholder="Search...">
        <a id="navbarSearchIcon" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><img src="img/icons/magnifier-tool.svg" style="height:70%;"></a>
        <div id="navbarLiveSearch" class="text-truncate"></div>
    </div>
    <!--
    <div class="my-auto ml-3 gmd-1-hover" id="navbarSearchExtendedContainer" style="display: none;">
        <input class="px-3 py-1" type="text" id="navbarSearchExtended" size="10" placeholder="Search...">
        <a id="navbarSearchIcon" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><img src="img/icons/magnifier-tool.svg" style="height:70%;"></a>
    </div> -->
    <div id="livesearch"></div>

    <!-- Mobile Navbar Toggle -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar Options -->
    <div class="collapse navbar-collapse" id="collapseNavbar">
        <ul class="navbar-nav ml-auto" style="margin-left:15px;">
            <li class="nav-item" id="courseNav">
                <a class="nav-link" href="groupResults.php">Groups</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link" href="blog-home.php">Blog</a>
            </li>
            <li class="nav-item" style="display:none" id="navProfile">
                <a class="nav-link" href="user.php">Profile</a>
            </li>
            <li class="nav-item" id="navLogin" style="display: block;">
                <a id="loginModalBtn" class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Login</a>
            </li>
            <li class="nav-item dropdown" id="navSettings" style="display:none;">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="img/icons/settings.svg" style="height:25px; padding-bottom: 3px;"></a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdownMenu">
                    <a class="dropdown-item disabled" href="#" id="dropdownAcc">Account</a>
                    <a class="dropdown-item" href="#" id="dropdownProfileLink">Privacy</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" id="navLogOut">Log Out</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style="visibility: hidden;"></a>
            </li>
        </ul>
    </div>
</nav>

<!-- Login Modal-->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" id="loginModalContent">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div id="loginModalBody">
                    <div class="form-title text-center">
                        <div class="bd-example bd-example-tabs">
                            <ul class="nav nav-pills mb-4 mt-n3 justify-content-center" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a style="color:black;" class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-expanded="true">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a style="color:black;" class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-expanded="true">Sign Up</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div class="d-flex flex-column">
                                        <form id="loginFormContainer">
                                            <!-- <div class="form-group inner-addon left-addon">
                                                 <img src="img/icons/email.svg" class="glyph" style="height:35px;">
                                                 <input type="email" class="form-control loginForm" id="email1" placeholder="Email">
                                             </div> -->
                                            <div class="form-group">
                                                <input type="email" class="form-control loginForm" id="mailUsername" data-toggle="tooltip" data-placement="right" title="" placeholder="Username / Email" data-original-title="User Doesn't Exist">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control loginForm" id="pass" data-toggle="tooltip" data-placement="right" title="" placeholder="Password" data-original-title="Incorrect Password">
                                            </div>
                                            <div class="d-flex flex-row my-3">
                                                <span class="m-auto" style="color:black;"><a href="#" style="color:black;">Forgot password?</a></span>
                                            </div>
                                            <button id="accLoginBtn" type="button" class="btn btn-info btn-block btn-round">Login</button>
                                        </form>

                                        <!-- Or Divider -->
                                        <!-- SOCIAL MEDIA LOGIN
                                        <div class="strike my-4">
                                            <span style="font-weight: 400">Or</span>
                                        </div>


                                        <div class="d-flex flex-column text-center mb-3">
                                            <h4 style="font-weight: 700;">Login With...</h4>
                                        </div>


                                        <div id="loginSocialBox" class="d-flex justify-content-around">
                                            <button class="btn btn-primary">
                                                <img src="img/icons/googleLogo.svg">
                                                Google
                                            </button>
                                            <button class="btn btn-primary">
                                                <img src="img/icons/twitterLogo.svg">
                                                Twitter
                                            </button>
                                            <button class="btn btn-primary text-right">
                                                <img src="img/icons/fbLogo.svg">
                                                Facebook
                                            </button>
                                        </div> -->

                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div class="d-flex flex-column">
                                        <form id="loginFormContainer">
                                            <div class="form-group">
                                                <input type="email" class="form-control loginForm" id="createUsername" data-toggle="tooltip" data-placement="right" title="" placeholder="Username" data-original-title="Username Shouldn't Contain Any Special Characters">
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control loginForm" id="createEmail" data-toggle="tooltip" data-placement="right" title="" placeholder="Email" data-original-title="Invalid Email Address">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control loginForm" id="createPass" data-toggle="tooltip" data-placement="right" title="" placeholder="Password" data-original-title="User Doesn't Exist">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control loginForm" id="confirmPass" data-toggle="tooltip" data-placement="right" title="" placeholder="Confirm Password" data-original-title="Passwords Doesn't Match">
                                            </div>
                                            <div class="d-flex flex-row my-3">
                                                <div class="mx-auto">
                                                    <span style="font-size: 0.8rem;">By creating an account, you agree you've accepted our <a href="UserAgreement.php" style="color:blue;">User Agreement</a><span>
                                                </span></span></div>
                                            </div>
                                            <button id="accCreateBtn" type="button" class="btn btn-info btn-block btn-round">Create Account</button>
                                        </form>

                                        <!-- Or Divider -->
                                        <!-- SOCIAL MEDIA LOGIN
                                        <div class="strike my-4">
                                            <span style="font-weight: 400">Or</span>
                                        </div>


                                        <div class="d-flex flex-column text-center mb-3">
                                            <h4 style="font-weight: 700;">Create An Account With...</h4>
                                        </div>


                                        <div id="loginSocialBox" class="d-flex justify-content-around">
                                            <button class="btn btn-primary">
                                                <img src="img/icons/googleLogo.svg">
                                                Google
                                            </button>
                                            <button class="btn btn-primary">
                                                <img src="img/icons/twitterLogo.svg">
                                                Twitter
                                            </button>
                                            <button class="btn btn-primary text-right">
                                                <img src="img/icons/fbLogo.svg">
                                                Facebook
                                            </button>
                                        </div>-->

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>