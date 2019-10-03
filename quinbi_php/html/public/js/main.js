$(document).ready(function(){

	$('#form-search').validate({
		submitHandler : function(form) {
			//sendbutton.attr('disabled', 'disabled');
			value = $("input[name=search_term]").val();
			var value = value.split(' ').join(',');

			window.location.hash = '#search/all/'+value
			searchProduct(value);
			return false;
		}
	});

	//FILTERS action
	//Activate
	$('.filters li a').click(function(){
		var filter 	= $(this).data('filter');
		var val 	= $(this).data('fvalue');
		var name 	= $(this).data('fname');
		
		var actualHash 	= window.location.hash;
		var splitHash 	= actualHash.split('/');
		var first = "";

		var newVar = "";
		var isFilterAdded = false; //clicked var is included
		var operador = "&";

		if (splitHash.length > 1) {

			var first = splitHash[2].split("?");

			//YES - Other parameters
			if (first.length > 1) { 
		        //console.log(">1");
		        var searchForRepeated = first[1].split("&");

				for (i = 0; i < searchForRepeated.length; ++i) {
					/*if (newVar.indexOf(filter) >=0) {*/
					
					var pair = searchForRepeated[i].split("=");	

					if (pair[0] != ""){
						if(pair[0] == filter) {
							//Agregar variable a la anteriror
							v1 = [pair[1], val]; 
							console.log(v1); 
						    var joinVars = v1.join(",");
						    var newVarPair = Array.from(new Set(joinVars.split(','))).toString();
							newVar += operador+filter+"="+newVarPair;
							isFilterAdded = true;
						} else {
							//Mantener la variable
							operador = "&";
							//1 PRESERVAR
							//2 CREAR NUEVA CADENA
							//thisVar =  
							newVar += operador+pair[0]+"="+pair[1];
							//3 VAR NO ADD
							if (isFilterAdded != true){
								isFilterAdded = false;
							}
						}
					}					 
				} 
				if (isFilterAdded == false){
					newVar += operador+filter+"="+val;
				}
								
			} else {
		        operador 	= ""; //First
				newVar 		= operador+filter+"="+val
		        //console.log("default");
			}

			addActiveFilter (filter, val, name);
       		var newHash	= splitHash[0]+"/"+splitHash[1]+"/"+first[0]+"?"+newVar; //Add News Search

		} else { //console.log("SEARCH BY DEFAULT");
			addActiveFilter (filter, val, name);
			var newHash		= "search/all/?"+ filter+"="+val; //New Search
		}	
		window.location.hash = newHash;
		//Add to Filter Menu
		removeActiveFilter();			
		return false;
	});

	

	//cuando alimenta  search-input
	//buscar con api resultados nuevos
	//crear temp database

	// si hay resultados
	//almacenar en un temporal,
	//filtrar con la interaccion de los

});

var URL = '//lab.besign.com.ve/flamuko/html/';

//FILTERS - Activate
function addActiveFilter(filter, val, name) {
		
	if ($('#active-'+filter+val).length == 0) {
    	var newFilter = '<a href="#" id="active-'+filter+val+'" class="active-filter" data-fvalue="'+val+'" data-filter="'+filter+'">'+name+'</a>';
		$('#current-filters-'+filter).prepend(newFilter);
		console.log(filter, val);
    }
}
//FILTERS - Deactivate
function removeActiveFilter() {
	$('.active-filter').click(function(){
		var filter 	= $(this).data('filter');
		var val 	= $(this).data('fvalue');
		$('#active-'+filter+val).remove();

		//console.log( getUrlParam(filter));
		
		//break down string into  all parts
		var currentHash = window.location.hash;
		var splitHash 	= currentHash.split("?");
		
  		var vars = splitHash[1].split("&");
 
  		var updatedHash = "";

        for (var i=0; i< vars.length; i++) {
        	if (vars[i] != "") {
        		console.log("----- "+i);
            	var pair = vars[i].split("=");
               	//which part matches filter
               	if(pair[0] == filter) {
               		var indexesVar = pair[1].split(","); //String to Array
					var index = indexesVar.indexOf(val.toString()); 

					//remove value from match
					var newVars = indexesVar.splice(index.toString(), 1);
					updatedHash = pair[0]+"="+newVars.toString();
					console.log(updatedHash);
					/*var joinVars = v1.join(",");
					var newVarPair = Array.from(new Set(joinVars.split(','))).toString();
					newVar += operador+filter+"="+newVarPair;*/
							
            	} else {
            		//updatedHash += pair; //keep same
            	}
            }
	    }
		//window.location.hash = updatedHash;
		
		return false;
	});
}

function searchProduct(searchterms) {
	type = 'all';
	$.getJSON(URL+"api/search/"+type+"/"+searchterms ,function(data) { 
			console.log(data)
		
			/*var TemplateScriptSearch = $("#Search-Filters-Template").html();
			var TemplateSearch = Handlebars.compile(TemplateScriptSearch);
			$("#searchfilters").html(TemplateSearch(data));*/
			//console.log(data);
			var TemplateProducts = $("#Product-Template").html();
			var TemplateResults = Handlebars.compile(TemplateProducts);
			$("#results").html(TemplateResults(data));
			
			//checkSearchView();

			//fade each result
			/*$('.item-card').css('opacity','0');	
			$('.item-card').each(function(i) {
				$(this).delay((i++) * 300).fadeTo(500, 1); 
			});*/	
			
			$(".btn-filter").click(function(){				
				var term = $(this).data("term");
				$(this).remove();
				var actualHash 	= window.location.hash
				var newHash 	= actualHash.replace(term, "");
				var newHash 	= newHash.replace(" /", "/");
				var newHash 	= newHash.replace("//", "/");
				window.location.hash = newHash;
				//window.history.pushState({"html":response.html,"pageTitle":response.pageTitle},"", urlPath); 				
		});
			
	});
}

//Source:
//https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}	