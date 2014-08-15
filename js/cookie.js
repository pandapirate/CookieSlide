/**
 * Created with IntelliJ IDEA.
 * User: Kevin
 * Date: 8/14/14
 * Time: 7:31 PM
 * To change this template use File | Settings | File Templates.
 */
var cookieImages = ["images/Croissant.png", "images/Cupcake.png", "images/Danish.png", "images/Donut.png", "images/Macaroon.png", "images/Star.png"];

function Cookie(type, row, column) {
    this.type = type;
    this.imageName = cookieImages[this.type];
    this.row = row;
    this.column = column;

}