# fantasy-football-app
Fantasy football insights is a data dashboard for fantasy football managers to track performance against their fellow league members.

### Usage

### API functionality (BETA)

#### Resources

*/scoring-leaders*

Returns the top 50 scoring leaders for a given week and position.
Query params: 
	week - integer
	position - [QB, RB, WR, TE, FX, DST, K]
	

*/teams*

Returns all teams in a give league.
Query params:
	* leagueId - integer

*/players*

Returns players in alphabetical order.

*/players/{id}*

