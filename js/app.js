/**
 * Created with IntelliJ IDEA.
 * User: Kevin
 * Date: 8/14/14
 * Time: 7:20 PM
 * To change this template use File | Settings | File Templates.
 */
var cookies = [];
var width = 6;
var height = 8;
var length = 50;

$(document).ready(function(){
    randomCookies();
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
    drawCookie();
};

var randomCookies = function() {
    cookies = [];
    for (var i = 0; i < height; i++) {
        var row = [];
        for (var j = 0; j < width; j++) {
            var rand = Math.floor(Math.random() * 6);
            var cookie = new Cookie(rand, i, j);
            row.push(cookie);
        }
        cookies.push(row);
    }
//    console.log(cookies);
};

var drawCookie = function() {
    $('#CookieContainer').html("")
    for (var i = 0; i < height; i++) {
        var row = cookies[i];
        for (var j = 0; j < width; j++) {
            var cookie = row[j];
            var pos = getPositionForCookie(i, j);
            $('#CookieContainer').append("<div class='Cookie' style='position: absolute; top: " + pos.top + "px; left: " + pos.left+ "px;'><img class='Cookie-Img' src='" + cookie.imageName + "'></div>")
        }
    }
};

var getPositionForCookie = function(row, column) {
    var windowWidth = $(window).width() - 8;
    var windowHeight = $(window).height() - 8;

    var w = windowWidth / (width+1);
    var h = windowHeight / (height+1);

    var top = (row+1) * h - length/2;
    var left = (column+1) * w - length/2;

    return {top:Math.floor(top), left:Math.floor(left)}
};