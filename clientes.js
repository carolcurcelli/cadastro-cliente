// jquery wrapper

$(function(){

    $.ajax({
        url: `http://www.mocky.io/v2/5c64a4d53300006500b99929`,
        method: "GET",
        dataType: "json",
        error: genericError,
        success: getCustomersSuccess
    });

    var genericError = function(){ debugger; }
    var getCustomersSuccess = function(){ debugger; }

});