<?php
include 'header.php';
?>
<div class = "container-fluid">
    <div class="row m-xl-5 m-3" id="groupResTileContainer">
    </div>
    <div class="row">
        <div class="col-12 my-5 mx-auto">
            <div id="test"></div>
            <button id="loadMoreResults" onclick="groupResults();" type="button" class="mx-auto btn btn-lrg my-5 gmd-1" style="display:block; width:60%; background: teal; color:white; border-radius: 30px; height:70px; font-size: 1.5rem; padding:10px;">Load More</button>
            <h1 id="noResults" class="my-5 text-center" style="display:none;"> No More Results . . .</h1>
        </div>
    </div>
</div>
<script>
    createGroupTile(8);
</script>
<?php
include 'groupResFooter.php';
?>
