/**
 * Created with IntelliJ IDEA.
 * User: Kevin
 * Date: 8/14/14
 * Time: 7:20 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    resizeMainDiv();
});

$( window ).on( "orientationchange", function( event ) {
    resizeMainDiv();
});

$(window).resize(function() {
    resizeMainDiv();
});

var resizeMainDiv = function () {
    $('#CookieContainer').css('width', $(window).width()-4);
    $('#CookieContainer').css('height', $(window).height()-4);
};

var drawCookie = function() {

};