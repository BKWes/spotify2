fetch("https://spotify23.p.rapidapi.com/artist_albums/?id=1U1el3k54VvEUzo3ybLPlM&offset=0&limit=100&", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spotify23.p.rapidapi.com",
		"x-rapidapi-key": "50a402ad5dmsh8a86b4453bff8b5p1cd337jsn4a81dd6a5d42"
	}
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    console.log(data.artist);
    console.log(data.artist.discography.albums.items[0].releases.items[0].name)
})