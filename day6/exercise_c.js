var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var barcelona_players = players.filter(function(player) {
	return player.club === 'FC Barcelona';
});

console.log(barcelona_players);

var player_names = players.map(function(player) {
	return player.name;
});

console.log(player_names);