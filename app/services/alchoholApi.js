export const getIngridient = (searchIngridient) => {
	return fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${searchIngridient}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "287f764f2amshdb3d7223e5ba6acp1503a3jsne138a4c7a73e"
		}
	});
};

export const getListOfIngridients = () => {
	fetch("https://the-cocktail-db.p.rapidapi.com/list.php?i=list", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "a22cc43f1amsh965711d8ac0c73fp15d213jsnd5c5d9f256b0"
		}
	})
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
};

export const getCocktailByName = (cocktailName) => {
	return fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?i=${cocktailName}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "a22cc43f1amsh965711d8ac0c73fp15d213jsnd5c5d9f256b0"
		}
	});
};

export const getCocktailByIngridient = (ingridient) => {
	return fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${ingridient}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "a22cc43f1amsh965711d8ac0c73fp15d213jsnd5c5d9f256b0"
		}
	});
};

export const getRandomCocktail = () => {
	fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "a22cc43f1amsh965711d8ac0c73fp15d213jsnd5c5d9f256b0"
		}
	})
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
};
//https://rapidapi.com/theapiguy/api/the-cocktail-db?endpoint=apiendpoint_db9305ba-c580-466b-a1b7-34fafb742ac1