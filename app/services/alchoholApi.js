export const getFromApiAsync = () => {
	return fetch("https://the-cocktail-db.p.rapidapi.com/search.php?i=Vodka", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
			"x-rapidapi-key": "287f764f2amshdb3d7223e5ba6acp1503a3jsne138a4c7a73e"
		}
	});
};