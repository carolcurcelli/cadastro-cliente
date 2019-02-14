$(function(){

    var colorA = "cyan";
    var colorB = "silver";

    $.fn.zebrado = function(){
        // console.log(this);
        $(this)
        .find("tr:even td") 
        .css("background-color", colorA)
        .find("tr:odd td")
        .css("background", colorB);
        return this;
    }
});