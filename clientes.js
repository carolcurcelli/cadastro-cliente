// jquery wrapper

$(function(){

    var genericError = function(){ debugger; }
    var getCustomersSuccess = function(customers){ 
        // foreach escrito de um jeito diferente:
        $.each(customers,function(index, customer){
            console.log(customer);
        }); 
    }
    
    $.ajax({ 
        url: `http://www.mocky.io/v2/5c64a4d53300006500b99929`,
        method: "GET",
        dataType: "jsonp",
        error: genericError,
        success: getCustomersSuccess
    });

});