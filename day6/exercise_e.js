function uefaEuro2016(teams, score) {
	var teamA = teams[0];
	var teamB = teams[1];

	if (score[0] > score[1]) {
		return "At match " + teams.join(' - ') + ", " + teamA + " won!";
	} else if (score[0] < score[1]) {
		return "At match " + teams.join(' - ') + ", " + teamB + " won!";
	} else {
		return "At match " + teams.join(' - ') + ", " + " teams played draw.";
	}
}

// the function should result in
console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0])); // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'],[0, 2])); // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1])); // "At match Portugal - Iceland, teams played draw."