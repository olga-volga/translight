$(document).ready(function(){
	$("#showRobe").click(function(){
		$("#productsCompulite").hide();
		$("#productsRobe").show();
		$("#showCompilite").removeClass("linkActive");
    	$("#showRobe").addClass("linkActive");
	});
	$("#showCompilite").click(function(){
		$("#productsRobe").hide();
		$("#productsCompulite").show();
		$("#productsCompulite").css({"display": "flex", "justify-content": "center"});
		$("#showRobe").removeClass("linkActive");
    	$("#showCompilite").addClass("linkActive");
	});
});