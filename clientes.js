// jquery wrapper

$(function(){

    var genericError = function(){ debugger; }
    var getCustomersSuccess = function(customers){ 
        var html = [];
        // foreach escrito de um jeito diferente:
        $.each(customers,function(index, customer){
            html.push(`<tr>
			<td>${customer.name}</td>
			<td>${customer.email}</td>
			<td>${customer.phone}</td>
			<td>${customer.country}</td>
		</tr>`);
        }); 
        console.log(html.join("")); // junta todos os pedacinhos da array pra fazer uma string de texto
        $("tbody").append(html.join("")); // diferente do appendTo porque append insere o conteúdo especificado pelo parametro, para o fim de cada elemento, enquanto appendTo funciona o contrário, ele insere cada elemento dentro do target inserido no parâmetro (rever isso porque francamente sei lá)
        $("tr").eq(1).fadeOut("300");
    }
    
    $.ajax({ 
        url: `http://www.mocky.io/v2/5c64a4d53300006500b99929`,
        method: "GET",
        dataType: "jsonp",
        error: genericError,
        success: getCustomersSuccess
    });

});