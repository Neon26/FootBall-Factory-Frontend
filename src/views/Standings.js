import React from 'react'
import LeagueTable from '../Components/LeagueTable'

// on Submit take the values and apply them to data-league and data-season

const handleSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    console.log(e.target.league.value)
    console.log(e.target.season.value)
    const league = e.target.league.value
    const season = e.target.season.value
    const games = document.getElementById('wg-api-football-standings')
    games.setAttribute('data-league', league)
    games.setAttribute('data-season', season)
    console.log(games)
    return games
    
    
}

// get league id and season from handleLeagueChange and handleSeasonChange

// pass them to the LeagueTable component






export default function Standings() {
  return (
    <>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <h2>Enter the ID and Season of the League Standing you would like to see</h2>
    <form onSubmit={handleSubmit}>
        <label for="league">League ID:</label>
        <input type="text" id="league" name="league" placeholder="League ID"/>
        <label for="season">Season:</label>
        <input type="text" id="season" name="season" placeholder="Season"/>
        <input type="submit" value="Submit"/>
    </form>
    <LeagueTable/>
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      {handleSubmit}
    <div>Standings</div>    
    <div id="wg-api-football-standings"
    data-host="v3.football.api-sports.io"
    data-key="146b09475304d452d6cdb2425a7b10dd"    
    data-league=""
    data-team=""
    data-season=""
    data-theme=""
    data-show-errors="false"
    data-show-logos="true"
    class="wg_loader">
    </div>

    </div>
  </div>
</div>
    
    

    </>
  )
}
