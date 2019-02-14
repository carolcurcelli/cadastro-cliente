$(function(){
    $.fn.zebrado = function(colorA,colorB){
        // console.log(this);
        $(this)
        .find("tr:even td") 
        .css("background-color", colorA).end()
        .find("tr:odd td") 
        .css("background-color", colorB)
        return this;
    }
});