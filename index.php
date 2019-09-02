<?php
include 'indexHeader.php';
?>

    <div id="headerCardContainer" style="margin-top:-60px; position: relative;">
        <div style="width:500px; height:275px; position: absolute; z-index: 5;top: 20%;bottom: 0; margin-left: 8.5%">
            <div class="card gmd-3" style="width: 100%; height: 100%; border-radius: 20px;">
                <div class="card-body p-4">
                    <div class="p-2 mb-2 d-flex justify-content-center">
                        <h3 id="headerCardTitle">Find the right group for you</h3>
                    </div>
                    <div class="p-2 my-2 d-flex justify-content-center">
                        <input class="form-control" id="headerForm" data-toggle="tooltip" data-placement="right" title="" placeholder="Search">
                    </div>
                    <div>
                        <button id="headerCardBtn" type="button" class="btn btn-info btn-block btn-round mx-auto mt-4" onclick="searchHomeHeader();">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <ul class="rslides" id="homeHeader" style="height:110vh;">
            <li><img src="img/1.jpg" alt=""></li>
            <li><img src="img/2.jpg" alt=""></li>
            <li><img src="img/3.jpg" alt=""></li>
        </ul>
    </div>


    <div style="height:100vh;">&nbsp

    </div>

<?php
include 'footer.php';
?>