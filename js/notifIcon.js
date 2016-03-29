$(document).ready(function(){ 

$('.btnPressHold').click(function() {
    $('#output').html(function(i, val) { return val*1+1 });
});

});

function myFunction() {
    alert("An user clicks here to review and merge all the cropped clips. This module is coming soon !");
}