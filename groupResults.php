<?php
include 'header.php';
?>

<div class = "container-fluid">
    <div class="row justify-content-between m-xl-5 m-3">
        <!-- GROUP TILE CONTAINER -->
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 groupTileContainer"> <!-- Add Unique Id Attribute to each create tile -->
            <!-- GROUP TILE -->
            <div class="card groupTile mx-md-4 mx-lg-3 mx-xl-4 my-3 my-lg-4 my-xl-5 gmd-1-hover groupTile">

                <!-- Group Logo -->
                <img src="img/Logo1.png" alt="Card image cap" style= "width:10rem; height:10rem;" class="m-auto pt-2 px-1 pb-1 groupTileLogo">

                <!-- Group Tile Body -->
                <div class="card-body groupTileBody">
                    <!-- Group Tile Modal Trigger and Title -->
                    <a class="stretched-link groupTileModalTrigger" style="color:black" href="#" data-toggle="modal" data-target="#groupTileModal1">
                        <h5 class="card-title text-center groupTileTitle" style="font-weight:700;" >CS50 Game Development Dublin</h5>
                    </a>

                    <!--Group Tile Time -->
                    <div class="row my-2">
                        <img src="img/icons/timer.svg" class="classTileIcon" ><span class="groupTileTime">5:00 - 7:00pm</span>
                    </div>

                    <!-- Group Tile Date -->
                    <div class="row my-2">
                        <img src="img/icons/calendar.svg" class="classTileIcon" ><span class=groupTileDate">5th of September</span>
                        <span class="ml-5 px-1 groupTileFreq" style="border-bottom:2px solid green; font-size: 1rem;">Bi-Weekly</span>
                    </div>

                    <!-- Group Tile Location -->
                    <div class="row my-2">
                        <img src="img/icons/location-point.svg" class="classTileIcon" ><span class="groupTileLoc">Dublin City, Castle</span>
                    </div>

                    <!--Group Tile Members and Join Btn -->
                    <div class="d-flex justify-content-between mt-3 mb-2">
                        <div class="mt-2 text-muted">
                            <span class="groupTileMembers">13</span> Members
                        </div>
                        <div>
                            <button type="button" class="btn btn-info px-4 groupTileJoinBtn" style="border-radius: 20px; position: relative; z-index: 5; font-size:1.1rem;" onclick="alert('How you doin?');">Join</button>
                        </div>
                    </div>

                    <!-- Group Tile Resources Trigger -->
                    <div class="row mt-1" style="font-weight:700;">
                        <a class="text-muted text-center groupTileResTrigger" style="color:black; width:100%; position: relative; z-index: 5;" data-toggle="collapse" href="#resourceCollapse2" role="button" aria-expanded="false" aria-controls="resourceCollapse2">Resources </a>
                    </div>

                    <!-- Group Tile Resources -->
                    <div class="row groupResourceContainer collapse pt-1" id="resourceCollapse2" style="position: relative; z-index: 5;">
                        <div class="col-12">
                            CS50
                            <span class="ml-1 p-1" style="border-style: solid; border-radius: 12px; border-width: 2px; border-color: hsl(206, 79%, 81%); color:hsl(206, 79%, 81%);background-color: hsl(206, 100%, 97%); font-size: 0.9rem;">EDX</span>
                        </div>
                        <div class="col-12">
                            Python - A begineers route
                            <span class="ml-1 p-1" style="border-style: solid; border-radius: 12px; border-width: 2px; border-color: hsl(206, 79%, 81%); color:hsl(206, 79%, 81%);background-color: hsl(206, 100%, 97%); font-size: 0.9rem;">Udemy</span>
                        </div>
                        <div class="col-12">
                            Unity Basics
                            <span class="ml-1 p-1" style="border-style: solid; border-radius: 12px; border-width: 2px; border-color: hsl(206, 79%, 81%); color:hsl(206, 79%, 81%);background-color: hsl(206, 100%, 97%); font-size: 0.9rem;">Skillshare</span>
                        </div>
                    </div>

                    <!-- Group Tile Modal -->
                    <div class="modal fade groupTileModal" id="groupTileModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content" id="aboutUsContent">
                                <div class="modal-body">
                                    <button type="button" class="loginClose" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div id="aboutModalContent">

                                        <!--Our Mission-->
                                        <h4>Our Mission</h4>
                                        <!-- <hr style="width: 40%"> -->
                                        <div class="row">
                                            <div class="col">
                                                <div class="container-fluid" id="aboutUsText">
                                                    Empower any learner* to effortlessly find the best resources and help them visualise their learning journey.
                                                </div>
                                                <br/>
                                                <div class="container-fluid" id="aboutUsText" style="font-size:0.6vw; opacity: 0.8;">
                                                    *If you can think, you are a learner.
                                                </div>
                                            </div>
                                        </div>


                                        <!-- About Study -->
                                        <h4>About Study</h4>
                                        <div class="row">
                                            <div class="col">
                                                <div class="container-fluid" id="aboutUsText">
                                                    We believe in the learner's natural need for the best learning.<br/>
                                                    <br/>
                                                    We quench this thirst by having all the best resources in one searchable location<br/>
                                                    <br/>
                                                    We then help them track not only what they've done in the past and present, but more importantly where their learning can advance to in the future.<br/>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Our Team -->
                                        <h4>Our Team</h4>
                                        <div class="row">
                                            <div class="col">
                                                <div class="container-fluid" id="aboutUsText">
                                                    A small bunch on college students who are determined to help individuals see the value in what they're learning,
                                                    and how their learning can take them to their deepest goals. You could call us the 'Avengers of Learning',
                                                    or more realistically just your regular local boyband.
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
        </div>
    </div>
</div>

<?php
include 'footer.php';
?>
