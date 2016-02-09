$(document).on("ready", function(){
	$(".ingredient-button").on("click", makeAjaxPost);
})

function makeAjaxPost(event){
	var sandwichId = $(".my-sandwich").data("sandwich-id");
	var ingredientId = $(event.target).data("id");
	var params = {
		ingredient_id: ingredientId
	};

	$.ajax({
		type: "POST",
		url: "/api/sandwiches/" + sandwichId + "/ingredients/add", 
		data: params, 
		success: onAddSuccess,
		error: onAddError
	})
}

function onAddSuccess(data){
	$('.ingredient-list').empty();
	$('.my-sandwich-calories').text(data.total_calories);
	
	data.ingredients.forEach(function(ingredient){
		var fragment = `
		<li>
			${ingredient.name}
			${ingredient.calories}
		</li>
		`
		$('.ingredient-list').append(fragment);
	})
}

function onAddError(err){
	console.log(err);
}